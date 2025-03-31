const mongoose=require('mongoose')

// connect avec database 
// gestion-projet: nom de database
mongoose.connect('mongodb://127.0.0.1:27017/Fisca')
// message a afficher apres la communication avec la database (succes connection ou erreur)
    .then(
        ()=>{
            console.log('connected');
        }
    )
    .catch(
        (error)=>{
            console.log(error);
        }
    )

    // exporter ce fichier pour accede d'apres d'autres fichier
    module.exports=mongoose;