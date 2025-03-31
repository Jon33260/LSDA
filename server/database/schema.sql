
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

CREATE TABLE warriorsweapons (
  warriors_id INT UNSIGNED NOT NULL,
  weapons_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (warriors_id) REFERENCES warriors(id),
  FOREIGN KEY (weapons_id) REFERENCES weapons(id)
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
("Théoden", 55, "Humain", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHPOff-pdcESq3L5riRpr53TS729w4Ab6LEg&s", "bien"),
("Haldir", 1000, "Elfe", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhJuVqwkghTZI0jYSrqs-9mhQPsJSidzEHnQ&s", "bien");

INSERT INTO weapons(type)
VALUES ("Sword"), ("Bow"), ("Ax"), ("Dagger"), ("magic stick");



CREATE TABLE questions (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  question VARCHAR(255) NOT NULL,
  option1 VARCHAR(255) NOT NULL,
  option2 VARCHAR(255) NOT NULL,
  option3 VARCHAR(255) NOT NULL,
  option4 VARCHAR(255) NOT NULL,
  answer VARCHAR(255) NOT NULL
);

INSERT INTO questions (question, option1, option2, option3, option4, answer)
VALUES 
("Quel est le nom de l’ami de Frodon qui l’accompagne tout au long de son voyage ?", "Aragorn", "Sam", "Legolas", "Merry", "Sam"),
("Quelle est la couleur du premier anneau d’Elrond ?", "Or", "Argent", "Bleu", "Rouge", "Bleu"),
("Comment s’appelle l’épée d’Aragorn ?", "Andúril", "Glamdring", "Sting", "Orcrist", "Andúril"),
("Qui est le premier à proposer d’emmener l’anneau à Mordor ?", "Gandalf", "Aragorn", "Frodon", "Bilbon", "Frodon"),
("Quel est le surnom d'Aragorn parmi les rôdeurs ?", "Grand-Pas", "Lame du Nord", "L'Errant", "Ombre-errante", "Grand-Pas"),
("Qui est le traître parmi la Communauté de l’Anneau ?", "Legolas", "Gimli", "Boromir", "Pippin", "Boromir"),
("Qui a forgé l'Anneau Unique ?", "Elrond", "Sauron", "Saroumane", "Galadriel", "Sauron"),
("Quel est le rôle de Gollum dans l’histoire ?", "Porteur de l'anneau", "Guide de Frodon", "Gardien de la porte noire", "espion", "Guide de Frodon"),
("Quel est le nom de la créature géante que Frodon et Sam rencontrent dans le Mordor ?", "Shelob", "Balrog", "Warg", "Azog", "Shelob"),
("Quel est le nom de l'ami d'Aragorn qui devient roi de Rohan ?", "Théoden", "Eomer", "Faramir", "Pippin", "Théoden"),
("Quel est le nom du royaume d’Aragorn ?", "Gondor", "Rohan", "Mordor", "Isengard", "Gondor"),
("Qui est le père de Boromir et Faramir ?", "Denethor", "Theoden", "Elrond", "Gimli", "Denethor"),
("Quel est le nom de l’épée de Legolas ?", "Andúril", "Glamdring", "Herugrim", "Celebrian", "Celebrian"),
("Qui est le seigneur de l’Isengard ?", "Gandalf", "Saroumane", "Sauron", "Aragorn", "Saroumane"),
("Quel est le nom de l’arbre géant que Merry et Pippin rencontrent dans la forêt ?", "Ent", "Cierge", "Huorn", "Fangorn", "Fangorn"),
("Quel est le nom de l’elfe qui accueille Frodon et ses amis à Lothlorien ?", "Galadriel", "Elrond", "Thranduil", "Legolas", "Galadriel"),
("Quel est le nom de la porte secrète de la Moria ?", "Mithril", "Durin", "Mazarbul", "Narya", "Durin"),
("Qui est le frère de Théoden et le père de Eomer ?", "Gimli", "Boromir", "Théodred", "Faramir", "Théodred"),
("Quel est l’objet magique que Gandalf utilise pour combattre le Balrog ?", "La flamme d'Anor", "La lumière de Galadriel", "L'anneau de pouvoir", "Sting", "La flamme d'Anor"),
("Quel est le nom de l’elfe qui voyage avec la Communauté de l'Anneau et qui porte un arc ?", "Gimli", "Aragorn", "Legolas", "Boromir", "Legolas"),
("Quel est le nom du destrier d'Aragorn ?", "Rohan", "Brego", "Shadowfax", "Gondor", "Brego"),
("Quel est le nom de l’épée de Frodo ?", "Sting", "Andúril", "Glamdring", "Herugrim", "Sting"),
("Dans quel royaume se trouve la Moria ?", "Gondor", "Rohan", "Mordor", "Khazad-dûm", "Khazad-dûm"),
("Qui est l'ami d'enfance de Faramir ?", "Boromir", "Gimli", "Aragorn", "Éomer", "Boromir"),
("Quel est le nom de la montagne où se trouve le Mont Doom ?", "Le Mont Solitude", "Le Mont Gorgoroth", "Le Mont Orodruin", "Le Mont Mordor", "Le Mont Orodruin"),
("Qui est l'ami d'enfance de Legolas ?", "Thranduil", "Gimli", "Aragorn", "Faramir", "Gimli"),
("Quel est le nom du roi des Nazgûls ?", "Sauron", "Le Roi-Sorcier d'Angmar", "Saroumane", "Gollum", "Le Roi-Sorcier d'Angmar"),
("Quel est le nom de l'elfe qui conseille Frodon au début de son voyage ?", "Galadriel", "Thranduil", "Elrond", "Legolas", "Elrond"),
("Quel est le nom du frère de Faramir ?", "Gimli", "Boromir", "Frodo", "Théoden", "Boromir"),
("Qui est le créateur des anneaux de pouvoir ?", "Sauron", "Saroumane", "Elrond", "Gandalf", "Sauron"),
("Quel est le nom de l’armure d’Aragorn ?", "L'armure de Galadriel", "L'armure de Gondor", "L'armure de Rohan", "L'armure d'Andúril", "L'armure de Gondor"),
("Quel est le nom du forgeron nain qui forge les épées pour la Communauté de l’Anneau ?", "Gimli", "Durin", "Eöl", "Thrain", "Eöl"),
("Qui est le capitaine des cavaliers de Rohan ?", "Éomer", "Théoden", "Faramir", "Boromir", "Éomer"),
("Quel est le nom du conseiller de Théoden ?", "Gandalf", "Grima Langue-de-Serpent", "Saroumane", "Gimli", "Grima Langue-de-Serpent"),
("Quel est le nom de l'elfe qui sauve Frodo lors de l'attaque du Nazgûl ?", "Aragorn", "Gimli", "Legolas", "Glorfindel", "Glorfindel"),
("Quel est le nom du balrog que Gandalf affronte dans la Moria ?", "Durin", "Gorbag", "Azog", "Durin’s Bane", "Durin’s Bane"),
("Quel est le nom de la forêt où vivent les Ents ?", "Forêt de Fangorn", "Forêt Noire", "Forêt de Lothlorien", "Forêt de Mirkwood", "Forêt de Fangorn"),
("Qui est l'héritier d'Isildur ?", "Boromir", "Faramir", "Aragorn", "Gimli", "Aragorn"),
("Quel est le nom du cheval d'Aragorn ?", "Shadowfax", "Brego", "Rohan", "Faramir", "Brego"),
("Quel est le nom de la ville d'où provient Éomer ?", "Rohan", "Gondor", "Osgiliath", "Helm's Deep", "Rohan"),
("Qui est le père de Galadriel ?", "Celeborn", "Elrond", "Finarfin", "Amdir", "Finarfin"),
("Quel est le nom de l’elfe qui porte l’anneau de pouvoir Nenya ?", "Galadriel", "Elrond", "Gimli", "Legolas", "Galadriel"),
("Qui est l'ennemi principal du Seigneur des Anneaux ?", "Saroumane", "Gollum", "Sauron", "Boromir", "Sauron"),
("Quel est le nom de la ville de Gondor où Faramir et Boromir sont nés ?", "Osgiliath", "Minas Tirith", "Helm's Deep", "Rohan", "Minas Tirith"),
("Quel est le nom du père de Théoden ?", "Thrain", "Théodred", "Balin", "Denethor", "Théodred"),
("Quel est le nom de l’épée de Gimli ?", "Sting", "Andúril", "Glamdring", "Celebrian", "Glamdring"),
("Quel est le nom du fils de Théoden ?", "Eomer", "Théodred", "Eowyn", "Gimli", "Théodred"),
("Quel est le nom de la mère d'Aragorn ?", "Gilraen", "Galadriel", "Arwen", "Rosie", "Gilraen"),
("Quel est le nom de la femme d’Aragorn ?", "Arwen", "Galadriel", "Eowyn", "Rosie", "Arwen"),
("Quel est le nom du groupe de combattants nains dans les Mines de la Moria ?", "Les Naugrim", "Les Hobbitons", "Les Rohirrim", "Les Elves", "Les Naugrim"),
("Quel est le nom de la plante que Gandalf utilise pour sauver Faramir ?", "Ail", "Athelas", "Misteltoe", "Rose", "Athelas"),
("Qui est le seigneur des forges qui créa l'épée Andúril ?", "Elrond", "Aragorn", "Isildur", "Sauron", "Elrond"),
("Quel est le nom de l’elfe qui a combattu les créatures du Mordor au côté de Frodon ?", "Thranduil", "Legolas", "Glorfindel", "Boromir", "Legolas");


INSERT INTO warriorsweapons(warriors_id, weapons_id)
  VALUES (1, 1), (2, 2), (3, 3), (4, 1), (5, 1), (6, 4), (7, 4), (8, 1), (9, 5), (10, 1), (11, 2);