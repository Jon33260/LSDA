
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
  FOREIGN KEY (warriors_id) REFERENCES warriors(id) ON DELETE CASCADE,
  FOREIGN KEY (weapons_id) REFERENCES weapons(id) ON DELETE CASCADE
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
("Haldir", 1000, "Elfe", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhJuVqwkghTZI0jYSrqs-9mhQPsJSidzEHnQ&s", "bien"),
("Golum(après)", 1200, "Hobbit", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Lmbs9sgHKGNym20Z5ostn0Aj6C1KKLiP4A&s", "mal"),
("Golum(avant)", 1200, "Hobbit", "data:image/jpeg;base64,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", "bien"),
("Bolg", 600, "Orc", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTquxzGLpNw7hN0bsDPfOcL0OBiuRCI3tMbUg&s", "mal");

INSERT INTO weapons(type)
VALUES ("Epée"), ("Arc"), ("Hache"), ("Dague"), ("Bâton magique");



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
("Quel est le nom de l’arbre géant que Merry et Pippin rencontrent dans la forêt ?", "Ent", "Sylvebarbe", "Huorn", "Fangorn", "Sylvebarbe"),
("Quel est le nom de l’elfe qui accueille Frodon et ses amis à Lothlorien ?", "Galadriel", "Elrond", "Thranduil", "Legolas", "Galadriel"),
("Quel est le nom de la porte secrète de la Moria ?", "Mithril", "Durin", "Mazarbul", "Narya", "Durin"),
("Qui est le frère de Théoden et le père de Eomer ?", "Gimli", "Boromir", "Théodred", "Faramir", "Théodred"),
("Quel est l’objet magique que Gandalf utilise pour combattre le Balrog ?", "La flamme d'Anor", "La lumière de Galadriel", "L'anneau de pouvoir", "Sting", "La flamme d'Anor"),
("Quel est le nom de l’elfe qui voyage avec la Communauté de l'Anneau et qui porte un arc ?", "Gimli", "Aragorn", "Legolas", "Boromir", "Legolas"),
("Quel est le nom du destrier d'Aragorn ?", "Rohan", "Brego", "Shadowfax", "Gondor", "Brego"),
("Quel est le nom de l’épée de Frodon ?", "Sting", "Andúril", "Glamdring", "Herugrim", "Sting"),
("Dans quel royaume se trouve la Moria ?", "Gondor", "Rohan", "Mordor", "Khazad-dûm", "Khazad-dûm"),
("Qui est l'ami d'enfance de Faramir ?", "Boromir", "Gimli", "Aragorn", "Éomer", "Boromir"),
("Quel est le nom de la montagne où se trouve le Mont Doom ?", "Le Mont Solitude", "Le Mont Gorgoroth", "Le Mont Orodruin", "Le Mont Mordor", "Le Mont Orodruin"),
("Quel est le nom du volcan où l’Anneau Unique doit être détruit ?", "Mont Venteux", "Mont Solitaire", "Montagne du Destin", "Moria", "Montagne du Destin"),
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
("Quel est le nom de la hâche de Gimli ?", "Sting", "Andúril", "Glamdring", "Celebrian", "Glamdring"),
("Quel est le nom du fils de Théoden ?", "Eomer", "Théodred", "Eowyn", "Gimli", "Théodred"),
("Quel est le nom de la mère d'Aragorn ?", "Gilraen", "Galadriel", "Arwen", "Rosie", "Gilraen"),
("Quel est le nom de la femme d’Aragorn ?", "Arwen", "Galadriel", "Eowyn", "Rosie", "Arwen"),
("Quel est le nom du groupe de combattants nains dans les Mines de la Moria ?", "Les Naugrim", "Les Hobbitons", "Les Rohirrim", "Les Elves", "Les Naugrim"),
("Quel est le nom de la plante que Gandalf utilise pour sauver Faramir ?", "Ail", "Athelas", "Misteltoe", "Rose", "Athelas"),
("Qui est le seigneur des forges qui créa l'épée Andúril ?", "Elrond", "Aragorn", "Isildur", "Sauron", "Elrond"),
("Quel est le nom de l’elfe qui a combattu les créatures du Mordor au côté de Frodon ?", "Thranduil", "Legolas", "Glorfindel", "Boromir", "Legolas");


INSERT INTO warriorsweapons(warriors_id, weapons_id)
  VALUES (1, 1), (2, 2), (3, 3), (4, 1), (5, 1), (6, 4), (7, 4), (8, 1), (9, 5), (10, 1), (11, 2);