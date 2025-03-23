
create table warriors (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  nom VARCHAR(255) NOT NULL,
  age INT NOT NULL,
  race VARCHAR(255) NOT NULL,
  img text NULL,
  faction VARCHAR(50) NOT NULL
);

CREATE TABLE weapons (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  type VARCHAR(100) NOT NULL
);

INSERT INTO warriors(nom, age, race, img, faction)
VALUES("Aragorn", 110, "Humain", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Iht9cBYkcVAFETAslxeLPY8c2Tjhgc8Ydg&s", "bien"),
("Legolas", 2930, "Elfe", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZmV1s61TumfsEr9mX-xZIt3m3YyFbknqdLw&s", "bien"),
("Gimli", 139, "Nain", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFlbvPVYEK_eUcvs27nIzEiya8D36n5r-HZg&s", "bien");

INSERT INTO weapons(type)
VALUES ("Sword");

CREATE TABLE member (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  hashed_password VARCHAR(255) NOT NULL
);