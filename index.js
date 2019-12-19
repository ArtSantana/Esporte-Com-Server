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

db.preset1.insert({jabiru: 5});
db.preset2.insert({jabiru: 5});
db.preset3.insert({jabiru: 5});
db.preset4.insert({jabiru: 5});
db.preset5.insert({jabiru: 5});
db.preset6.insert({jabiru: 5});

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
    console.log(request.body);

// Usar para o update em apenas um arquivo
//  db.update({presetNumber: 1}, matrizGo: data.matrizGo, matrizGo: data.matrizBack);

    switch(request.body.presetNumber)
    {
        case 1:
            db.preset1.insert({matrizGo: data.matrizGo, matrizBack: data.matrizBack});
            break;
        case 2:
            db.preset2.insert({matrizGo: data.matrizGo, matrizBack: data.matrizBack});
            break;
        case 3:
            db.preset3.insert({matrizGo: data.matrizGo, matrizBack: data.matrizBack});
            break;
        case 4:
            db.preset4.insert({matrizGo: data.matrizGo, matrizBack: data.matrizBack});
            break;
        case 5:
            db.preset5.insert({matrizGo: data.matrizGo, matrizBack: data.matrizBack});
            break;
        case 6:
            db.preset6.insert({matrizGo: data.matrizGo, matrizBack: data.matrizBack});
            break;
    }

// Alterar para somente um arquivo.
    if(request.body.cleanDatabase)
    {
       db.preset1.remove({}, {multi: true});
       db.preset2.remove({}, {multi: true});
       db.preset3.remove({}, {multi: true});
       db.preset4.remove({}, {multi: true});
       db.preset5.remove({}, {multi: true});
       db.preset6.remove({}, {multi: true});
       db.preset1.loadDatabase();
       db.preset2.loadDatabase();
       db.preset3.loadDatabase();
       db.preset4.loadDatabase();
       db.preset5.loadDatabase();
       db.preset6.loadDatabase();
    }
})