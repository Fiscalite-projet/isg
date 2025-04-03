require("dotenv").config();
const mongoose = require("mongoose");
const Steps = require("./models/Steps");

mongoose.connect("mongodb://127.0.0.1:27017/Fisca", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log("MongoDB connecté"))
    .catch(err => console.error(err));

const seedData = async () => {
  await Steps.deleteMany(); // Supprime les anciennes données

  const data = {
    formes: [
      {
        name: "Sociétaire",
        subTypes: [
          { name: "IRPP", subTypes: [{ name: "SNC" }, { name: "SCS" }] },
          { name: "Société des Capitaux", subTypes: [{ name: "SA" }, { name: "SCA" }] },
          { name: "Société Hybride", subTypes: [{ name: "SARL" }, { name: "SUARL" }] }
        ],
      },
      {
        name: "Individuelle",
        subTypes: [],
      },
    ],
    secteurs: [{ name: "Ordinaire" }, { name: "Privilégié fiscalement" }],
    zones: [{ name: "Ordinaire" }, { name: "Développement régional 1" }, { name: "Développement régional 2" }],
  };

  await Steps.create(data);
  console.log("Données insérées !");
  mongoose.connection.close();
};

seedData();
