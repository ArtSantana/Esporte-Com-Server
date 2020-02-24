const DataStore = require('nedb');
let database = [];

database.londrina = new DataStore({filename:'./database/LDApreset.db', autoload: true});
database.maringa = new DataStore({filename:'./database/MRGpreset.db', autoload: true});
database.noroeste = new DataStore({filename:'./database/NORpreset.db', autoload: true});
database.guarapuava = new DataStore({filename:'./database/GUApreset.db', autoload: true});
database.foz = new DataStore({filename:'./database/FOZpreset.db', autoload: true});
database.cascavel = new DataStore({filename:'./database/CVLpreset.db', autoload: true});
database.pontagrossa = new DataStore({filename:'./database/PTGpreset.db', autoload: true});
database.curitiba = new DataStore({filename:'./database/CTApreset.db', autoload: true});

module.exports = database;