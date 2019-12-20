const express = require('express');
const app = express();

const DataStore = require('nedb');

app.listen(3000, () => console.log("listening at 3000"));
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));

var db = {}; // Banco de dados.

db = new DataStore({filename:'database/preset.db', autoload: true});

app.get('/api', (request, response) =>
{
    db.find({}, (err, data) =>
    {
        if(err)
        {
            response.end();
            return;
        }
        console.log(data);
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

// Usar para o update em apenas um arquivo
//  db.update({presetNumber: 1}, matrizGo: data.matrizGo, matrizGo: data.matrizBack);   

    switch(request.body.presetNumber)
    {
        case 1:
            db.update({preset:1}, {preset: 1,matrizGo: data.matrizGo, matrizBack: data.matrizBack})
            break;
        case 2:
            db.update({preset:2}, {preset: 2,matrizGo: data.matrizGo, matrizBack: data.matrizBack})
            break;
        case 3:
            db.update({preset:3}, {preset: 3,matrizGo: data.matrizGo, matrizBack: data.matrizBack})
            break;
        case 4:
            db.update({preset:4}, {preset: 4,matrizGo: data.matrizGo, matrizBack: data.matrizBack})
            break;
        case 5:
            db.update({preset:5}, {preset: 5,matrizGo: data.matrizGo, matrizBack: data.matrizBack})
            break;
        case 6:
            db.update({preset:6}, {preset: 6,matrizGo: data.matrizGo, matrizBack: data.matrizBack})
            break;
    }
    db.loadDatabase();

//    db.loadDatabase();
// Alterar para somente um arquivo.
    if(request.body.cleanDatabase)
    {
       db.remove({}, {multi: true});
       db.loadDatabase();
       db.insert({preset: 1, matrizGo: 0, matrizBack: 0});
       db.insert({preset: 2, matrizGo: 0, matrizBack: 0});
       db.insert({preset: 3, matrizGo: 0, matrizBack: 0});
       db.insert({preset: 4, matrizGo: 0, matrizBack: 0});
       db.insert({preset: 5, matrizGo: 0, matrizBack: 0});
       db.insert({preset: 6, matrizGo: 0, matrizBack: 0});
    }
})