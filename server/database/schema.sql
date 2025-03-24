
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
("Gimli", 139, "Nain", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFlbvPVYEK_eUcvs27nIzEiya8D36n5r-HZg&s", "bien"),
("Azog", 80, "Orc", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOsYNjbHqAh5-I_YYRRoMRDP8bFdXHvviuTw&s", "mal"),
("Eomer", 35, "Humain", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE16V7z2Nr71ay4sB9PuMK3zlBNYkRk4Cr5g&s", "bien"),
("Frodon", 85, "Hobbit", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1PjJraRBSL8b3kvX_46KqFTlyhMhn2iPd4Q&s", "bien"),
("Sam", 83, "Hobbit", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtWeQfP_jfSa4gVA98cxGsWJkmvTtDgQqd6g&s", "bien"),
("Lurtz", 30, "Orc", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB_A74TN5_ftU4gpmpFaVHvNlFoxahqUUlOA&s", "mal"),
("Saroumane", 1500, "Magicien", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpqsel8vlQRAZIllhzpIDaNs60-6yf3Pc4uQ&s", "mal"),
("Théoden", 55, "Humain", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHPOff-pdcESq3L5riRpr53TS729w4Ab6LEg&s", "bien");

INSERT INTO weapons(type)
VALUES ("Sword"), ("Bow"), ("Ax");

CREATE TABLE member (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  hashed_password VARCHAR(255) NOT NULL
);