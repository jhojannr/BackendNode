const { crearArchivo } = require("./helpers/multiplicar");
const colors = require("colors");
const argv = require("./config/yargs");
const base = argv.base;
const listar = argv.listar;
const hasta = argv.hasta;

crearArchivo(base, listar, hasta)
    .then((resp) => {
        console.log(resp.rainbow);
    })
    .catch((e) => {
        console.log(e);
    });
