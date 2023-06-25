const fs = require("fs");
const colors = require("colors");
const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    try {
        console.clear();
        console.log("===========================".green);
        console.log("Tabla del:".green, colors.blue(base));
        console.log("===========================".green);

        let salida = "";

        for (let i = 0; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        if (listar) console.log(salida);

        fs.writeFileSync(`./exit/tabla-${base}.txt`, salida);

        return `Tabla-${base}.txt Creado`;
    } catch (e) {
        throw e;
    }
};

module.exports = {
    crearArchivo,
};
