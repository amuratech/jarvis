const boat = require('./bot')

const fetchUserInfo = async (req, res) => {
    // fetch user info
    // create an account
    // build a chatroom with session
    // add admin
    // sent help message
    let user = await boat.createChatUser({'userId': '1233NADE', 'name': 'something'})
    res.send({ 'status': 200 })
}

const newUserLogin = async (req, res) => {
    let user = await boat.createChatUser({'userId': '1233NADE', 'name': 'something'})
}

const buildAdminChat = (req, res) => {
    // build an admin user
    // list all chat rooms
}

module.exports = {
    fetchUserInfo,
    newUserLogin
}