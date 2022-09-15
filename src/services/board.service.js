import { storageService } from "./async-storage.service"
import { boards } from "./data.service"

const STORAGE_KEY = 'boards'


export const boardService = {
    query,
    getById,
}


async function query(filterBy) {
    let myBoards = await storageService.query(STORAGE_KEY)

    if (!myBoards || !myBoards.length) {
        storageService.postMany(STORAGE_KEY, boards)
        myBoards = boards
    }
    console.log('boards from service:', boards)
    return boards
}


async function getById(boardId) {
    return await storageService.get(STORAGE_KEY, boardId)
}