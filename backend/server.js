require("dotenv").config({ path: require("path").resolve(__dirname, ".env") });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

//Conexion con MongoDB atlas
const url = process.env.MONGO_URI;
if (!url) {
    throw new Error("MONGO_URI no está configurada en las variables de entorno");
}

mongoose.connect(url)
.then(() =>{
    console.log("MongoDB conectado correctamente");
})
.catch((error) => {
    console.error("Error al conectar MongoDB:", error);
});
// Ruta de prueba 
app.get("/api", (req, res) => {
    res.json({mensaje: "API EcoMarket funcionando"});
});

// Iniciar servidor 
const PORT = process.env.PORT || 3001;

app.listen(PORT, ()=> {
    console.log("Servidor funcionando en puerto: ", PORT);
});