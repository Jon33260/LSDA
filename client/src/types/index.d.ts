interface Warrior {
  id: number;
  nom: string;
  race: string;
  age: number;
  arme: string;
  img: string;
}

interface WarriorsProps {
  warriors: Warrior[];
}
