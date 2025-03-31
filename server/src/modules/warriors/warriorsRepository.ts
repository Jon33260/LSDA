import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Warriors = {
  id: number;
  nom: string;
  age: number;
  race: string;
  img: string;
  faction: string;
};

type Weapon = {
  type: string;
};

class warriorsRepository {
  // The C of CRUD - Create operation

  async create(warriors: Omit<Warriors, "id">) {
    // Execute the SQL INSERT query to add a new item to the "warriors" table
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO warriors (nom, age, race, img, faction) VALUES (?, ?, ?, ?, ?)",
      [
        warriors.nom,
        warriors.age,
        warriors.race,
        warriors.img,
        warriors.faction,
      ], // Ajouter faction ici
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from warriors where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the warriors
    return rows[0] as Warriors;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "warriors" table
    const [rows] = await databaseClient.query<Rows>(
      "select id, nom, age, race, img, faction from warriors",
    );

    // Return the array of warriors
    return rows as Warriors[];
  }

  async update(warriors: Warriors) {
    const [result] = await databaseClient.query<Result>(
      "update warriors set nom = ?, age = ?, race = ?, img = ? where id = ?",
      [warriors.nom, warriors.age, warriors.race, warriors.img, warriors.id],
    );
    return result.affectedRows;
  }

  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "delete from warriors where id = ?",
      [id],
    );
    return result.affectedRows;
  }
  async readByFaction(faction: string) {
    // Sélectionne aussi la colonne 'race' pour inclure cette information dans la réponse
    const [rows] = await databaseClient.query<Rows>(
      "SELECT id, nom, age, race, img FROM warriors WHERE faction = ?",
      [faction],
    );

    return rows;
  }

  async readByFactionDark(faction: string) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT id, nom, age, race, img FROM warriors WHERE faction = ?",
      [faction],
    );

    return rows;
  }

  async readAllWithWeapons() {
    // Requête SQL avec une jointure LEFT JOIN entre 'warriors' et 'weapons'
    const [rows] = await databaseClient.query<Rows>(
      `
        SELECT warriors.id, warriors.nom, warriors.age, warriors.race, 
               warriors.img, warriors.faction, weapons.type AS weapon_type
        FROM warriors
        LEFT JOIN warriorsweapons ON warriors.id = warriorsweapons.warriors_id
        LEFT JOIN weapons ON weapons.id = warriorsweapons.weapons_id
      `,
    );

    // Retourner les données des guerriers avec leurs armes
    return rows;
  }

  // Les autres méthodes CRUD (read, create, update, delete, etc.) restent inchangées
}

export default new warriorsRepository();
