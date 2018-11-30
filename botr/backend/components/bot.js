const settings =  require('./../config/config')
const Chatkit = require('@pusher/chatkit-server')
const chalk = require('chalk');

const chatkit = new Chatkit.default({
    instanceLocator: settings.INSTANCE_LOCATOR,
    key: settings.CHATKIT_KEY,
})

// create a user instance for new users
const createChatUser = (data) => {
    console.log(data)
    chatkit.createUser({
        id: data.userId,
        name: data.name,
      })
        .then(() => {
          console.log('User created successfully');
          return True
        }).catch((err) => {
          console.log(`[ERR]${chalk.red(err.error)}`)
          return false
    });
}

// update user info once instance gets created
const updateChatUser = (data) => {
    chatkit.updateUser({
        id: data.userId,
        name: data.name,
        avatarURL: 'https://some.url',
        customData: {
          age: 21,
        },
      })
        .then(() => {
          console.log(chalk.red(err.error))
        }).catch((err) => {
          console.log(err.error);
    });
}

// for admin users to see their connected chats
const getChatUser = (req, res) => {
    chatkit.getUserRooms({
        userId: 'user1',
      })
        .then((res) => {
          console.log(res);
        }).catch((err) => {
          console.log(chalk.red(err.error))
    });
}

// session activated when a user login to a new session
const createChatRoom = (req, res) => {
    chatkit.createRoom({
        creatorId: 'userId',
        name: 'my room',
      })
        .then(() => {
          console.log('Room created successfully');
        }).catch((err) => {
          console.log(chalk.red(err.error))
    });
}

module.exports = {
    createChatUser, 
    getChatUser,
    createChatRoom,
    updateChatUser
}