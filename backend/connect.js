const mongoose=require('mongoose')
const seedZones = require('./seed/zones');

// connect avec database 
// gestion-projet: nom de database
mongoose.connect('mongodb://127.0.0.1:27017/Fisca')
// message a afficher apres la communication avec la database (succes connection ou erreur)
    .then(
       async ()=>{
            console.log('connected');
            await seedZones();
        }
    )
    .catch(
        (error)=>{
            console.log(error);
        }
    )

    // exporter ce fichier pour accede d'apres d'autres fichier
    module.exports=mongoose;