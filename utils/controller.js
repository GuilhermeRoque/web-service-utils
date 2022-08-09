const getToken = (req) => {
    const authString = req.get('Authorization')
    const bearerType = "Bearer "
    if (authString && authString.startsWith(bearerType) && authString.length > bearerType.length){
        const token = authString.split(' ')[1]
        return token
    }
    return null
}


module.exports = {
    HttpStatusCodes: HttpStatusCodes,
    getToken: getToken
}