const argv = require("yargs")
    .option("b", {
        alias: "base",
        type: "number",
        demandOption: true,
        describe: "Es la base de la tabla de multiplicar",
    })
    .option("l", {
        alias: "listar",
        type: "boolean",
        demandOption: true,
        default: false,
        describe: "Muestra la tabla de Multiplicar",
    })
    .option("h", {
        alias: "hasta",
        type: "number",
        demandOption: false,
        default: 10,
        describe: "Número limite de Multiplicación",
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw "La base tiene que ser un numero";
        } else {
            return true;
        }
    }).argv;

module.exports = argv;
