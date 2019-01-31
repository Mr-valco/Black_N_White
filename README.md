# Black_N_White
Black_N_White is a node js, express, sequelize application that handles data in a CRUD fashion for GE MyApps Team.

Team Members: Valentin Meica, Michelle Brewington, Genie Yang, & Mirian Ejerenwa

Heroku Application: https://enigmatic-taiga-76931.herokuapp.com/blackList.html

MyApps Black_N_White Application Summary:

MyApps Users get locked out for varieties of reasons. The MyApps team is responsible for unlocking/reactivating and notifying the user that their account has been reactivated. For this to happen, the security team has to have carefully reviewed the activity of the users to ensure the lockout is not due to a major security breach, and then following that, a list of approved users for access restoration is sent to the MyApps team. 
Situation today: The data is received from the security team in different formats which is mostly by email. When a user creates a ticket to have their account reviewed, the MyApps team searches through the bulk emails to see if the user’s SSO is listed in the approved lists previously sent from security. When found, the user is enabled on Vital. Then the Engr sends an email to the user to notify them that access has been reenabled.

The new Process: The security team exports report in a CSV file, sends this to the MyApps team and the file is simply uploaded to the Black_N_White App, which allows us to keep track of all Blacklisted users in one place and easily reenable them and notify them that their access is now reenabled at the click of a button!
•	Proactively reenable approved users, reducing tickets and MTTR.
•	Cut out the manual process of exploring emails to search for approved user lists, saving resource time.
•	Reduce manual process of sending individual emails to activated users.
•	Keep track of user lockout events/counts for further action and review

Use Cases:
1.	Import a file into applications’ database. 
2.	Form to manually enter single data entry to database
3.	The ability to manage and manipulate blacklist data. Have CRUD functionality.
4.	Remove backlist record into whitelist record. 
5.	Once blacklist record is completed, setup automatic email confirmation to blacklist SSO user.

Technology and NPM Packages Used:

1. Nodemailer
2. Nodemon
3. Email Templates
4. Handle Bars
5. Loaddash
6. Body Parser
7. JQuery CSV Plugin
8. Node
9. Sequelize
10. MySql DB
11. Express
12. Heroku and JAWS DB

Application Use:

1. Clone Repo
2. NPM Init and NPM Install
3. Provide your own email credentials 
4. Provide your own DB configurations and deployment


