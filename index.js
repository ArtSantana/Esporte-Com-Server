const express = require('express');
const app = express();
const DataStore = require('nedb');
const PORT = 3000;

app.listen(PORT, () => console.log(`The application is running at port ${PORT}`));
app.use(express.static('./src/client/Home'));
app.use(express.json({limit: '1mb'}));
// Banco de dados.
let db = [];
let baseMatrizes = [];

db.londrina = new DataStore({filename:'./database/LDApreset.db', autoload: true});
db.maringa = new DataStore({filename:'./database/MRGpreset.db', autoload: true});
db.noroeste = new DataStore({filename:'./database/NORpreset.db', autoload: true});
db.guarapuava = new DataStore({filename:'./database/GUApreset.db', autoload: true});
db.foz = new DataStore({filename:'./database/FOZpreset.db', autoload: true});
db.cascavel = new DataStore({filename:'./database/CVLpreset.db', autoload: true});
db.pontagrossa = new DataStore({filename:'./database/PTGpreset.db', autoload: true});
db.curitiba = new DataStore({filename:'./database/CTApreset.db', autoload: true});

for(let i=0; i<11; i++) {
  baseMatrizes[i] = [];
}

for(let i=0; i<11; i++) {
  for(let j=0; j<2; j++) {
    baseMatrizes[i][j] = "";
  }
}

const presetBase = {
  matrixGoTeamA: baseMatrizes,
  matrixGoTeamB: baseMatrizes,
  matrixBackTeamA: baseMatrizes,
  matrixBackTeamB: baseMatrizes,
}

app.get('/api', (request, response) => {
  db.londrina.find({}).sort({preset: 1}).exec((err, data)=> {
    if(err){
      response.end();
      return;
    }
    response.json(data);
  })
})

app.post('/api/presets', (request, reponse) => {
  const data = request.body;
  const presetNumber = request.body.presetNumber;
  console.log("Request received");
  console.log(request.body);
// Update do banco de dados baseado no preset escolhido na hora da gravação feita pelo front-end
  db.londrina.update({preset: presetNumber}, {preset: presetNumber, presetPositions: data.positions});
  db.londrina.loadDatabase(); 
/* É necessário dar load no banco para atualizar o registro */
  response.end();
})

app.delete('/api/delete', (request, response) => {
  db.londrina.remove({}, {multi: true});
  db.londrina.loadDatabase();
  for(let i=1; i<7; i++) {
    db.londrina.insert({preset: i, presetPositions: presetBase});
  }
  response.end();
})