import { storageService } from './async-storage.service'
// import { httpService } from './http.service'
// import { store } from '../store/store'
// import { getActionSetWatchedUser } from '../store/review.actions'
// import { socketService, SOCKET_EVENT_USER_UPDATED, SOCKET_EMIT_USER_WATCH } from './socket.service'
import guest from '../assets/img/guest-img.svg'
import { showSuccessMsg } from '../services/event-bus.service'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

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
    changeScore,
    createUsers
}

window.userService = userService


function getUsers() {
    return storageService.query('user')
    // return httpService.get(`user`)
}

function onUserUpdate(user) {
    showSuccessMsg(`This user ${user.fullname} just got updated from socket, new score: ${user.score}`)
    //     // store.dispatch(getActionSetWatchedUser(user))
}

async function getById(userId) {
    const user = await storageService.get('user', userId)
    // const user = await httpService.get(`user/${userId}`)
    // socketService.emit(SOCKET_EMIT_USER_WATCH, userId)
    // socketService.off(SOCKET_EVENT_USER_UPDATED, onUserUpdate)
    // socketService.on(SOCKET_EVENT_USER_UPDATED, onUserUpdate)

    return user
}
function remove(userId) {
    return storageService.remove('user', userId)
    // return httpService.delete(`user/${userId}`)
}

async function update(user) {
    await storageService.put('user', user)
    // user = await httpService.put(`user/${user._id}`, user)
    // Handle case in which admin updates other user's details
    if (getLoggedinUser()._id === user._id) saveLocalUser(user)
    return user
}

async function login(userCred) {
    const users = await storageService.query('user')
    const user = users.find(user => user.username === userCred.username)
    // const user = await httpService.post('auth/login', userCred)
    if (user) {
        // socketService.login(user._id)
        return saveLocalUser(user)
    }
}

async function signup(userCred) {
    userCred.score = 10000
    console.log('userCred:', userCred)

    const user = await storageService.post('user', userCred)
    // const user = await httpService.post('auth/signup', userCred)
    // socketService.login(user._id)

    return saveLocalUser(user)
}
async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    // socketService.logout()
    return await storageService.post('auth/logout')
    // return await httpService.post('auth/logout')
}

async function changeScore(by) {
    const user = getLoggedinUser()
    if (!user) throw new Error('Not loggedin')
    user.score = user.score + by || by
    await update(user)
    return user.score
}


function saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}


async function createUsers() {
    await userService.signup({ fullname: 'yoav', username: 'yoav', password: '123', score: 10000, isAdmin: true, imgUrl: 'https://skello.herokuapp.com/static/media/hero.e8878a5487f1b4b94d6f.png' })
    await userService.signup({ fullname: 'roni', username: 'roni', password: '123', score: 10000, isAdmin: true, imgUrl: 'https://skello.herokuapp.com/static/media/hero.e8878a5487f1b4b94d6f.png' })
    await userService.signup({ fullname: 'omer', username: 'omer', password: '123', score: 10000, isAdmin: true, imgUrl: 'https://skello.herokuapp.com/static/media/hero.e8878a5487f1b4b94d6f.png' })
    await userService.signup({ fullname: 'demoguest', username: 'demoguest', password: '123', score: 10000, isAdmin: true, imgUrl: `${guest}` })
}



