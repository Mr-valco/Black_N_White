//Import Database Models
const db = require('../models');

//Syncing our sequelize models
db.sequelize.sync().then(function () {
    db.Product.bulkCreate([{

    Time: "Thu Jan 3 23:09:36 2019",
    SSO: "123459876",
    Action: "Userlockout",
    Device_ID: "4C4C0944-0000-4C10-0000-CAC04F345132",
    Count: 2,
    Message: "cockscrew detected",

},
{
    Time: "Thu Jan 3 23:09:36 2019",
    SSO: "123459876",
    Action: "Userlockout",
    Device_ID: "4C4C0944-0000-4C10-0000-CAC04F345132",
    Count: 2,
    Message: "cockscrew detected",
},
{
    Time: "Thu Jan 3 23:09:36 2019",
    SSO: "123459876",
    Action: "Userlockout",
    Device_ID: "4C4C0944-0000-4C10-0000-CAC04F345132",
    Count: 2,
    Message: "cockscrew detected",
},
{
    Time: "Thu Jan 3 23:09:36 2019",
    SSO: "123459876",
    Action: "Userlockout",
    Device_ID: "4C4C0944-0000-4C10-0000-CAC04F345132",
    Count: 2,
    Message: "cockscrew detected",
},
{
    Time: "Thu Jan 3 23:09:36 2019",
    SSO: "123459876",
    Action: "Userlockout",
    Device_ID: "4C4C0944-0000-4C10-0000-CAC04F345132",
    Count: 2,
    Message: "cockscrew detected",
}
]).then(function (data) {
    console.log('Data successfully added!');
}).catch(function (error) {
    console.log('Error', error)
});
});