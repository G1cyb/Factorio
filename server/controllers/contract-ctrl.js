const Contract = require('../models/contract-model')

createContract = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a  Contract',
        })
    }

    const  contract = new  Contract(body)

    if (!contract) {
        return res.status(400).json({ success: false, error: err })
    }

     contract
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id:  contract._id,
                message: ' Contract created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: ' Contract not created!',
            })
        })
}

updateContract = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

     Contract.findOne({ _id: req.params.id }, (err,  contract) => {
        if (err) {
            return res.status(404).json({
                err,
                message: ' Contract not found!',
            })
        }
         contract.name = body.name
         contract.time = body.time
         contract.rating = body.rating
         contract
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id:  contract._id,
                    message: ' Contract updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: ' Contract not updated!',
                })
            })
    })
}

deleteContract = async (req, res) => {
    await  Contract.findOneAndDelete({ _id: req.params.id }, (err,  contract) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!contract) {
            return res
                .status(404)
                .json({ success: false, error: ` Contract not found` })
        }

        return res.status(200).json({ success: true, data:  contract })
    }).catch(err => console.log(err))
}

getContractById = async (req, res) => {
    await  Contract.findOne({ _id: req.params.id }, (err,  contract) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!contract) {
            return res
                .status(404)
                .json({ success: false, error: ` Contract not found` })
        }
        return res.status(200).json({ success: true, data:  contract })
    }).catch(err => console.log(err))
}

getContracts = async (req, res) => {
    await  Contract.find({}, (err,  contracts) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!contracts.length) {
            return res
                .status(404)
                .json({ success: false, error: ` Contract not found` })
        }
        return res.status(200).json({ success: true, data:  contracts })
    }).catch(err => console.log(err))
}

module.exports = {
    createContract,
    updateContract,
    deleteContract,
    getContracts,
    getContractById,
}