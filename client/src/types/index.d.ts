interface Warrior {
  id: number;
  nom: string;
  race: string;
  age: number;
  weapon_type: string;
  img: string;
  faction: string;
}

interface WarriorsProps {
  warrior: Warrior;
  onDeleteWarrior?: (id: number) => void; // Ajout de la fonction pour supprimer un guerrier
  onUpdateWarrior?: (warrior: Warrior) => void; // Ajout de la fonction pour mettre à jour un guerrier
}
