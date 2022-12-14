const errorHandler = async (err, req, res, next) => {
    if(err.message === 'Route does not exist') {res.status(404).send(err.message)}
    next()
}

module.exports = errorHandler