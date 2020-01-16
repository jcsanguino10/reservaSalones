const mongoose = require('mongoose');
const {Schema} = mongoose;

const ReservaSchema = new Schema({
    espacio: { type: String , required: true },
    profesor :{ type: String, required: true},
    tema :{type: String, required: false},
    horaInicio: {type: Date, required: true},
    horaFin: {type: Date, required: true},
    cola : [{type: String, required: false}],
    autorizadoPor : {type: String, required: true},
    removidaPor : {type: String, required: false}
});

module.exports= mongoose.model('Reserva', ReservaSchema);