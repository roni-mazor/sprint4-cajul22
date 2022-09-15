import { storageService } from "./async-storage.service"
import { boards } from "./data.service"
import { utilService } from "./util.service"

const STORAGE_KEY = 'boards'


export const boardService = {
    query,
    getById,
    save,
    createTask
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
        "style": board.style
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

function createTask(title) {
    return {
        "id": utilService.makeId(),
        "title": title
    }
}