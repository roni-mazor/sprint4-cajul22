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
    myBoards = myBoards.map(board => ({
        "_id": board._id,
        "title": board.title,
        "isStarred": board.isStarred,
        "style":board
    }))
    console.log('boards from service:', myBoards)
    return myBoards
}


function getById(boardId) {
    const b = boards.find(board => board._id === boardId)
    return b
}