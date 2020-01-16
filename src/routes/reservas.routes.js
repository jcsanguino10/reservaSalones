const express = require('express');
const router = express.Router();
const Reserva = require('../models/reservas');

router.get('/', async (req, res) => {
    const reservas = await Reserva.find();
    res.json(reservas);
});

router.post('/', async(req,res) =>{

});

router.post('/reserva', async (req, res) => {
    const objeto = new Object();
    if (req.body.espacio != null) {
        objeto.espacio = req.body.espacio;
    }
    if (req.body.profesor != null) {
        objeto.profesor = req.body.profesor;
    }
    if (req.body.horaIncio != null) {
        const date = new Date(req.body.horaIncio)
        objeto.horaIncio = { $gte : date};
    }
    else{
        const date = new Date()
        objeto.horaIncio = { $gte : date};
    }
    if(req.body.horaFin != null) {
        objeto.horaFin = new Date(req.body.horaFin);
    }
    console.log(objeto);
    const reservas = await Reserva.find({ objeto });
    res.json(reservas);
});
module.exports = router;    