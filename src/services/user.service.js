import { storageService } from "./async-storage.service"
import { users } from "./data.service"
import { httpService } from './http.service'
// import { store } from '../store/store'
// import { getActionSetWatchedUser } from '../store/review.actions'
import { socketService, SOCKET_EVENT_USER_UPDATED, SOCKET_EMIT_USER_WATCH } from './socket.service'
import { showSuccessMsg } from '../services/event-bus.service'
import { utilService } from "./util.service"

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
const STORAGE_KEY = 'users'

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    saveLocalUser,
    getUsers,
    getById,
    remove,
    update,
    addUserNotification
}

window.userService = userService


async function addUserNotification(notification) {
    notification.id = utilService.makeId()
    const userToUpdate = await getById(notification.onUserId)
    if (!userToUpdate.notifications) {
        userToUpdate.notifications = [notification]
    } else {
        userToUpdate.notifications.unshift(notification)
    }
    const user = await httpService.put(`user/${userToUpdate._id}`, userToUpdate)
}

async function getUsers() {

    return httpService.get(`user`)
}

function onUserUpdate(user) {
    // showSuccessMsg(`This user ${user.fullname} just got updated from socket, new score: ${user.score}`)
    //     // store.dispatch(getActionSetWatchedUser(user))
}

async function getById(userId) {
    // const user = await storageService.get('user', userId)
    const user = await httpService.get(`user/${userId}`)
    // socketService.emit(SOCKET_EMIT_USER_WATCH, userId)
    // socketService.off(SOCKET_EVENT_USER_UPDATED, onUserUpdate)
    // socketService.on(SOCKET_EVENT_USER_UPDATED, onUserUpdate)

    return user
}
function remove(userId) {
    // return storageService.remove('user', userId)
    return httpService.delete(`user/${userId}`)
}

async function update(user) {
    // await storageService.put('user', user)
    user = await httpService.put(`user/${user._id}`, user)
    // Handle case in which admin updates other user's details
    if (getLoggedinUser()._id === user._id) saveLocalUser(user)
    return user
}

async function login(userCred) {
    // const users = await storageService.query('users')

    // const user = users.find(currUser => currUser.username.toLowerCase() === userCred.username.toLowerCase())
    const user = await httpService.post('auth/login', userCred)
    if (user) {
        socketService.login(user._id)
        return saveLocalUser(user)
    }
}

async function signup(userCred) {

    // const user = await storageService.post('users', userCred)
    try {
        const user = await httpService.post('auth/signup', userCred)
        socketService.login(user._id)

        return saveLocalUser(user)
    } catch (err) {
    }
}
async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    socketService.logout()
    // return await storageService.post('auth/logout')
    return await httpService.post('auth/logout')
}




function saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}



