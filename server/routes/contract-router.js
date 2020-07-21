const express = require('express')

const ContractCtrl = require('../controllers/contract-ctrl')

const router = express.Router()

router.post('/contract', ContractCtrl.createContract)
router.put('/contract/:id', ContractCtrl.updateContract)
router.delete('/contract/:id', ContractCtrl.deleteContract)
router.get('/contract/:id', ContractCtrl.getContractById)
router.get('/contracts', ContractCtrl.getContracts)

module.exports = router