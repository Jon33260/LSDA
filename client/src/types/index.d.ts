interface Warrior {
  id: number;
  nom: string;
  race: string;
  age: number;
  arme: string;
  img: string;
  faction: string;
}

interface WarriorsProps {
  warrior: Warrior;
}
