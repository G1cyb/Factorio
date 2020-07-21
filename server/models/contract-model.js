const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Contract = new Schema(
    {
    contractAddress: { type: String, required: true },
    useraddress: { type: String, required: true },
    rut_emisor: { type: String, required: true },
    tipo_documento: { type: String, required: true },
    folio: { type: String, required: true },
    fecha_emision: { type: String, required: true },
    rut_receptor: { type: String, required: true },
    razon_social_receptor: { type: String, required: true },
    monto_factura: { type: Number, required: true },
    rut_cedente: { type: String, required: true },
    razon_social_cedente: { type: String, required: true },
    direccion_cedente: { type: String, required: true },
    email_cedente: { type: String, required: true },
    rut_autorizado_por_cedente: { type: String, required: true },
    nombre_autorizado_por_cedente: { type: String, required: true },
    rut_cesionario: { type: String, required: true },
    razon_social_cesionario: { type: String, required: true },
    direccion_cesionario: { type: String, required: true },
    email: { type: String, required: true },
    monto_cesion: { type: Number, required: true },
    DOBc: { type: String, required: true },
    otras_condiciones: { type: String, required: true },
    nombre_contacto: { type: String, required: true },
    fono_contacto: { type: String, required: true },
    email_contacto: { type: String, required: true },
    email_deudor: { type: String, required: true }
});

module.exports = mongoose.model('contract', Contract)