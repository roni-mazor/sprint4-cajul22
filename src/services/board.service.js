import { storageService } from "./async-storage.service"
import { boards } from "./data.service"

const STORAGE_KEY = 'boards'


export const boardService = {
    query,
    getById,
}


async function query(filterBy) {
    const myBoards = await storageService.query(STORAGE_KEY)

    if (!myBoards || !myBoards.length) {
        storageService.postMany(STORAGE_KEY, boards)
        myBoards = boards
    }
    console.log('boards from service:', boards)
    return boards
}


function getById(boardId) {
    const b = boards.find(board => board._id === boardId)
    return b.board
}