const filename = '../messages/messages.json'
let messages = require(filename)
const helper = require('../helpers/helper')

function getMessages() {

    return new Promise((resolve, reject) => {
        if (messages.length === 0) {
            reject({
                message: 'no messages available',
                status: 202
            })
        }
        resolve(messages)
    })
}


function getMessage(id) {
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(messages, id)
        .then(message => resolve(message))
        .catch(err => reject(err))
    })
}

function insertMessage(newMessage) {
    return new Promise((resolve, reject) => {
        const id = { id: helper.getNewId(messages) }
        const date = { 
            created_at: helper.newDate()
        } 
        newMessage = { ...id, ...date, ...newMessage }
        messages.push(newMessage)
        helper.writeJSONFile(filename, messages)
        resolve(newMessage)
    })
}


function updateMessage(id, newMessage) {
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(messages, id)
        .then(message => {
            const index = messages.findIndex(p => p.id == message.id)
            id = { id: message.id }
            const date = {
                created_at: message.created_at
            } 
            messages[index] = { ...id, ...date, ...newMessage }
            helper.writeJSONFile(filename, messages)
            resolve(messages[index])
        })
        .catch(err => reject(err))
    })
}

function deleteMessage(id) {
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(messages, id)
        .then(() => {
            messages = messages.filter(p => p.id !== id)
            helper.writeJSONFile(filename, messages)
            resolve()
        })
        .catch(err => reject(err))
    })
}

module.exports = {
    insertMessage,
    getMessages,
    getMessage, 
    updateMessage,
    deleteMessage
}