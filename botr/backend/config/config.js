
// express port details
const EXPRESS_HOST = "localhost"
const EXPRESS_PORT = 3000
// mongo client detauls
const MONGO_HOST = "localhost"
const MONGO_PORT = 27107
const MONGO_DEFAULT_DB = "labs"
const MONGO_URL = `mongodb://${MONGO_HOST}`
const MONGOOSE_URL = `${MONGO_URL}/${MONGO_DEFAULT_DB}`

const INSTANCE_LOCATOR = 'v1:us1:62879e3a-1330-490d-8e00-56f289b89046'
const CHATKIT_KEY = '8200323e-7584-483b-b715-2678c80dfdb0:sjrmAPftmTwXFnYfmiF5pcpZRHLVvVQkU0uAMhEKY9A='

// module exports
module.exports = {
    EXPRESS_HOST, EXPRESS_PORT,
    MONGO_URL, MONGOOSE_URL,
    INSTANCE_LOCATOR, CHATKIT_KEY
}