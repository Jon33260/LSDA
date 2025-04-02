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
}
