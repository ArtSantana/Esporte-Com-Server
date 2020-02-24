const express = require('express');
const router = express.Router();
const database = require('../database/database');
const baseMaster = require('../models/base').default;

router.get('/', (request, response) => {
  database.londrina.find({}).sort({preset:1}).exec((err, data) => {
    if(err) {
      response.send(err);
    }
    response.json(data);
  })
})

router.post('/', (request, response) => {
  const data = request.body;
  const presetNumber = request.body.presetNumber;
  console.log("Request received");
// Update do banco de dados baseado no preset escolhido na hora da gravação feita pelo client
  database.londrina.update({preset: presetNumber}, {preset: presetNumber, presetPositions: data.positions});
  /* É necessário dar load no banco para atualizar o registro */
  database.londrina.loadDatabase(); 
  response.end();
})

router.delete('/', (request, response) => {
  database.londrina.remove({preset: request.body.preset});
  database.londrina.loadDatabase();
  // Restaurando ao default o preset deletado  
  database.londrina.insert({preset: request.body.preset, presetPositions: baseMaster});
  response.end();
})

module.exports = router;
