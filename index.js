const express = require('express');
const app = express();

const DataStore = require('nedb');

app.listen(3000, () => console.log("listening at 3000"));
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));

var db = []; // Banco de dados.

db.londrina = new DataStore({filename:'database/LDApreset.db', autoload: true});
db.maringa = new DataStore({filename:'database/MRGpreset.db', autoload: true});
db.noroeste = new DataStore({filename:'database/NORpreset.db', autoload: true});
db.guarapuava = new DataStore({filename:'database/GUApreset.db', autoload: true});
db.foz = new DataStore({filename:'database/FOZpreset.db', autoload: true});
db.cascavel = new DataStore({filename:'database/CVLpreset.db', autoload: true});
db.pontagrossa = new DataStore({filename:'database/PTGpreset.db', autoload: true});
db.curitiba = new DataStore({filename:'database/CTApreset.db', autoload: true});

app.get('/api', (request, response) =>
{
    db.londrina.find({}, (err, data) =>
    {
        if(err)
        {
            response.end();
            return;
        }
        console.log(data);
        console.log("\n\n")
        response.json(data);
    })
})

app.post('/api', (request, reponse) =>
{
    const data = {
        matrizGo: request.body.dataGO,
        matrizBack: request.body.dataBack,
    }
    console.log("Request received");
    console.log(request.body);


    switch(request.body.presetNumber)
    {
        case 1:
            db.londrina.update({preset:1}, {preset: 1,matrizGo: data.matrizGo, matrizBack: data.matrizBack})
            break;
        case 2:
            db.londrina.update({preset:2}, {preset: 2,matrizGo: data.matrizGo, matrizBack: data.matrizBack})
            break;
        case 3:
            db.londrina.update({preset:3}, {preset: 3,matrizGo: data.matrizGo, matrizBack: data.matrizBack})
            break;
        case 4:
            db.londrina.update({preset:4}, {preset: 4,matrizGo: data.matrizGo, matrizBack: data.matrizBack})
            break;
        case 5:
            db.londrina.update({preset:5}, {preset: 5,matrizGo: data.matrizGo, matrizBack: data.matrizBack})
            break;
        case 6:
            db.londrina.update({preset:6}, {preset: 6,matrizGo: data.matrizGo, matrizBack: data.matrizBack})
            break;
    }
    db.londrina.loadDatabase();

//    db.loadDatabase();
// Alterar para somente um arquivo.
    if(request.body.cleanDatabase)
    {
       db.londrina.remove({}, {multi: true});
       db.londrina.loadDatabase();
       db.londrina.insert({preset: 1, matrizGo: 0, matrizBack: 0});
       db.londrina.insert({preset: 2, matrizGo: 0, matrizBack: 0});
       db.londrina.insert({preset: 3, matrizGo: 0, matrizBack: 0});
       db.londrina.insert({preset: 4, matrizGo: 0, matrizBack: 0});
       db.londrina.insert({preset: 5, matrizGo: 0, matrizBack: 0});
       db.londrina.insert({preset: 6, matrizGo: 0, matrizBack: 0});
    }
})