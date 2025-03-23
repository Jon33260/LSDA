import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Weapons = {
  type: string;
};

class weaponsRepository {
  // The C of CRUD - Create operation

  async create(weapons: Omit<Weapons, "id">) {
    // Execute the SQL INSERT query to add a new item to the "armes" table
    const [result] = await databaseClient.query<Result>(
      "insert into weapons (type) values (?)",
      [weapons.type],
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from weapons where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the warriors
    return rows[0] as Weapons;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "armes" table
    const [rows] = await databaseClient.query<Rows>("select * from weapons");

    // Return the array of armes
    return rows as Weapons[];
  }

  async update(weapons: Weapons) {
    const [result] = await databaseClient.query<Result>(
      "update armes set type = ? where id = ?",
      [weapons.type],
    );
    return result.affectedRows;
  }

  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "delete from weapons where id = ?",
      [id],
    );
    return result.affectedRows;
  }
}

export default new weaponsRepository();
