import { storageService } from "./async-storage.service"
import { boards } from "./data.service"

const STORAGE_KEY = 'boards'


export const boardService = {
    query,
    getById,
    save
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
<<<<<<< HEAD
        "style": board.style
=======
        "style": board
>>>>>>> 024ff663fb7a21df5987b613abf4195170dd8e63
    }))
    console.log('boards from service:', myBoards)
    return myBoards
}


async function getById(boardId) {
    return await storageService.get(STORAGE_KEY, boardId)
}


async function save(board) {
    if (board._id) {
        return storageService.put(STORAGE_KEY, board)
    } else {
        board.createdAt = Date.now()
        // board.inStock = true
        return storageService.post(STORAGE_KEY, board)
    }
}