const express = require('express');
const app = express();
const DataStore = require('nedb');

app.listen(3000, () => console.log("The application is running at port 3000"));
app.use(express.static('./src/client'));
app.use(express.json({limit: '1mb'}));
// Banco de dados.
let db = [];
let baseMatrizes = [];

for(let i=0; i<11; i++){
     baseMatrizes[i] = [];
}

for(let i=0; i<11; i++)
{
    for(let j=0; j<2; j++)
    {
        baseMatrizes[i][j] = "";
    }
}


const presetBase = {
    matrixGoTeamA: baseMatrizes,
    matrixGoTeamB: baseMatrizes,
    matrixBackTeamA: baseMatrizes,
    matrixBackTeamB: baseMatrizes,
}

db.londrina = new DataStore({filename:'./src/server/database/LDApreset.db', autoload: true});
db.maringa = new DataStore({filename:'./src/server/database/MRGpreset.db', autoload: true});
db.noroeste = new DataStore({filename:'./src/server/database/NORpreset.db', autoload: true});
db.guarapuava = new DataStore({filename:'./src/server/database/GUApreset.db', autoload: true});
db.foz = new DataStore({filename:'./src/server/database/FOZpreset.db', autoload: true});
db.cascavel = new DataStore({filename:'./src/server/database/CVLpreset.db', autoload: true});
db.pontagrossa = new DataStore({filename:'./src/server/database/PTGpreset.db', autoload: true});
db.curitiba = new DataStore({filename:'./src/server/database/CTApreset.db', autoload: true});

app.get('/api', (request, response) =>{
    db.londrina.find({}, (err, data) =>{
        if(err){
            response.end();
            return;
        }
        console.log(data);
        console.log("\n\n")
        response.json(data);
    })
})

app.post('/api/presets', (request, reponse) =>{
    const data = request.body;
    const presetNumber = request.body.presetNumber;
    console.log("Request received");
    console.log(request.body);

    console.log(data);
    // Update do banco de dados baseado no preset escolhido na hora da gravação feita pelo front-end
    db.londrina.update({preset: presetNumber}, {preset: presetNumber, presetPositions: data.positions});
    db.londrina.loadDatabase(); /* É necessário dar load no banco para atualizar o registro */
})

app.post('/api/delete', (request, response) =>{
    db.londrina.remove({}, {multi: true});
    db.londrina.loadDatabase();
    db.londrina.insert({preset: 1, presetPositions: presetBase});
    db.londrina.insert({preset: 2, presetPositions: presetBase});
    db.londrina.insert({preset: 3, presetPositions: presetBase});
    db.londrina.insert({preset: 4, presetPositions: presetBase});
    db.londrina.insert({preset: 5, presetPositions: presetBase});
    db.londrina.insert({preset: 6, presetPositions: presetBase});
})