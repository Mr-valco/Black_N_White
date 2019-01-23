-- Create the Black_n_White Database
DROP DATABASE IF EXISTS Black_n_White;
CREATE DATABASE Black_n_White;

USE Black_n_White;

-- DROP TABLE IF EXISTS products;
-- Create a Table inside of that database called products
CREATE TABLE blackList (
ID INT AUTO_INCREMENT NOT NULL,
Time VARCHAR(255) NOT NULL,
SSO VARCHAR(35) NOT NULL,
Action VARCHAR(35) NOT NULL,
Device_ID VARCHAR(255) NOT NULL,
Count INTEGER NOT NULL,
Message VARCHAR(255) NOT NULL,
createdAt TIMESTAMP NOT NULL,
updatedAt TIMESTAMP NOT NULL,
PRIMARY KEY(id)
);

CREATE TABLE whiteList (
ID INT AUTO_INCREMENT NOT NULL,
Time VARCHAR(255) NOT NULL,
SSO VARCHAR(35) NOT NULL,
Action VARCHAR(35) NOT NULL,
Device_ID VARCHAR(255) NOT NULL,
Count INTEGER NOT NULL,
Message VARCHAR(255) NOT NULL,
createdAt TIMESTAMP NOT NULL,
updatedAt TIMESTAMP NOT NULL,
PRIMARY KEY(id)
);

-- Populate this database with around 10 different SSO. (i.e. Insert 'mock' data rows into this database and table).
INSERT INTO blackList(Time, SSO, Action, Device_ID, Count, Message )
VALUES ('Thu Jan 3 23:09:36 2019', '123459876', 'Userlockout','4C4C0944-0000-4C10-0000-CAC04F345132', 2, 'cockscrew detected'),
       ('Thu Jan 3 23:09:36 2019', '123459876', 'Userlockout','4C4C0944-0000-4C10-0000-CAC04F345132', 2, 'cockscrew detected'),
       ('Thu Jan 3 23:09:36 2019', '123459876', 'Userlockout','4C4C0944-0000-4C10-0000-CAC04F345132', 2, 'cockscrew detected'),
       ('Thu Jan 3 23:09:36 2019', '123459876', 'Userlockout','4C4C0944-0000-4C10-0000-CAC04F345132', 2, 'cockscrew detected'),
       ('Thu Jan 3 23:09:36 2019', '123459876', 'Userlockout','4C4C0944-0000-4C10-0000-CAC04F345132', 2, 'cockscrew detected'),
       ('Thu Jan 3 23:09:36 2019', '123459876', 'Userlockout','4C4C0944-0000-4C10-0000-CAC04F345132', 2, 'cockscrew detected'),
       ('Thu Jan 3 23:09:36 2019', '123459876', 'Userlockout','4C4C0944-0000-4C10-0000-CAC04F345132', 2, 'cockscrew detected'),
       ('Thu Jan 3 23:09:36 2019', '123459876', 'Userlockout','4C4C0944-0000-4C10-0000-CAC04F345132', 2, 'cockscrew detected'),
       ('Thu Jan 3 23:09:36 2019', '123459876', 'Userlockout','4C4C0944-0000-4C10-0000-CAC04F345132', 2, 'cockscrew detected'),
       ('Thu Jan 3 23:09:36 2019', '123459876', 'Userlockout','4C4C0944-0000-4C10-0000-CAC04F345132', 2, 'cockscrew detected');


SELECT * FROM blackList;
SELECT * FROM whiteList;