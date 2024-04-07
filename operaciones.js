const fs = require('fs')
const leerCitas= ()=>{
    try {
        let citas = JSON.parse(fs.readFileSync('citas.json', 'utf-8'))
        console.log(citas)
    } catch (error) {
        console.log(error)
    }
}

const registrarCita= (nombre,edad,tipo,color,enfermedad)=>{
    try {
        let citas= JSON.parse(fs.readFileSync('citas.json', 'utf-8'))
        citas.push({nombre ,edad ,tipo,color,enfermedad })
        fs.writeFileSync('citas.json', JSON.stringify(citas))
        
    } catch (error) {
        console.log(error)
    }
}

module.exports= {leerCitas,registrarCita}