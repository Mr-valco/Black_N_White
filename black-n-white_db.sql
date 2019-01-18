-- Create the Black_n_White Database
DROP DATABASE IF EXISTS Black_n_White;
CREATE DATABASE Black_n_White;

USE Black_n_White;

-- DROP TABLE IF EXISTS products;
-- Create a Table inside of that database called products
CREATE TABLE blackList (
id INT AUTO_INCREMENT NOT NULL,
sso VARCHAR(35) NOT NULL,
action VARCHAR(35) NOT NULL,
device_id VARCHAR(255) NOT NULL,
time VARCHAR(255) NOT NULL,
count INTEGER NOT NULL,
createdAt TIMESTAMP NOT NULL,
updatedAt TIMESTAMP NOT NULL,
PRIMARY KEY(id)

);

CREATE TABLE whiteList (
id INT AUTO_INCREMENT NOT NULL,
sso VARCHAR(35) NOT NULL,
action VARCHAR(35) NOT NULL,
device_id VARCHAR(255) NOT NULL,
time VARCHAR(255) NOT NULL,
count INTEGER NOT NULL,
createdAt TIMESTAMP NOT NULL,
updatedAt TIMESTAMP NOT NULL,
PRIMARY KEY(id)
);

-- Populate this database with around 10 different SSO. (i.e. Insert "mock" data rows into this database and table).
INSERT INTO blackList(sso, action, device_id, time, count)
 VALUES ('123459876', 'Userlockout', '4C4C0944-0000-4C10-0000-CAC04F345132', 'Tue Jan 1 12:00:00 2019', 3),
        ('123459877', 'Userlockout', '4C4C0944-0000-4C10-0000-CAC04F345133', 'Tue Jan 1 12:00:00 2019', 4),
        ('123459878', 'Userlockout', '4C4C0944-0000-4C10-0000-CAC04F345134', 'Tue Jan 1 12:00:00 2019', 1),
        ('123459879', 'Userlockout', '4C4C0944-0000-4C10-0000-CAC04F345135', 'Tue Jan 1 12:00:00 2019', 2),
        ('123459880', 'Userlockout', '4C4C0944-0000-4C10-0000-CAC04F345136', 'Wed Jan 2 10:00:00 2019', 2),
        ('123459881', 'Userlockout', '4C4C0944-0000-4C10-0000-CAC04F345137', 'Wed Jan 2 10:00:00 2019', 1),
        ('123459882', 'Userlockout', '4C4C0944-0000-4C10-0000-CAC04F345138', 'Wed Jan 2 10:00:00 2019', 2),
        ('123459883', 'Userlockout', '4C4C0944-0000-4C10-0000-CAC04F345139', 'Wed Jan 2 10:00:00 2019', 3),
        ('123459884', 'Userlockout', '4C4C0944-0000-4C10-0000-CAC04F345140', 'Wed Jan 2 10:00:00 2019', 5),
        ('123459885', 'Userlockout', '4C4C0944-0000-4C10-0000-CAC04F345141', 'Thu Jan 3 08:30:00 2019', 1);


SELECT * FROM blackList;
SELECT * FROM whiteList;