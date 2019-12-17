const express = require('express');
const app = express();

const DataStore = require('nedb');

app.listen(3000, () => console.log("listening at 3000"));
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));

var db = {};

db.preset1 = new DataStore({filename:'database/preset1.db', autoload: true});
db.preset2 = new DataStore({filename:'database/preset2.db', autoload: true});


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
    console.log("Request received");
    db.preset1.insert(request.body);

    response.json(
    {
        status: 'success',
        data: request.body,
    });
})