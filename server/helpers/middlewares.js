function mustBeInteger(req, res, next) {
    const id = req.params.id
    if (!Number.isInteger(parseInt(id))) {
        res.status(400).json({ message: 'ID must be an integer' })
    } else {
        next()
    }
}

function checkFieldsMessage (req, res, next) {
    const { message } = req.body
    if (message) {
        next()
    } else {
        res.status(400).json({ message: 'wrong field' })
    }
}

module.exports = {
    mustBeInteger,
    checkFieldsMessage
}