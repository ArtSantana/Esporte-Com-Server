const express = require('express');
const app = express();

const DataStore = require('nedb');

app.listen(3000, () => console.log("listening at 3000"));
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));

var db = {}; // Banco de dados.

db.preset1 = new DataStore({filename:'database/preset1.db', autoload: true});
db.preset2 = new DataStore({filename:'database/preset2.db', autoload: true});
db.preset3 = new DataStore({filename:'database/preset3.db', autoload: true});
db.preset4 = new DataStore({filename:'database/preset4.db', autoload: true});
db.preset5 = new DataStore({filename:'database/preset5.db', autoload: true});
db.preset6 = new DataStore({filename:'database/preset6.db', autoload: true});


app.get('/api', (request, response) =>
{
    database.find({}, (err, data) =>
    {
        if(err)
        {
            response.end();
            return;
        }

        response.json(data);
    })
})

app.post('/api', (request, reponse) =>
{
    const data = {
        matrizGo: request.body.dataGo,
        matrizBack: request.body.dataBack,
    }
    console.log("Request received");

    db.preset1.insert({matrizGo: data.matrizGo, matrizBack: data.matrizBack});
})