// import { storageService } from "./async-storage.service"
import { boards } from "./data.service"
import { httpService } from "./http.service"
import { utilService } from "./util.service"

const STORAGE_KEY = 'boards'


export const boardService = {
    query,
    getById,
    save,
    createTask,
    createGroup,
    createLabel,
    createNewAttachment,
    starBoardFromWorkspace,
    createNewBoard
}

async function query() {
    // let myBoards = await storageService.query(STORAGE_KEY)
    let boards = await httpService.get('board/')

    return boards
}



async function getById(boardId) {
    // return await storageService.get(STORAGE_KEY, boardId)
    return await httpService.get(`board/${boardId}`)
}

async function starBoardFromWorkspace(boardId) {
    await httpService.put(`board/star/${boardId}`)
}

async function save(board) {
    if (board._id) {
        return httpService.put(`board/${board._id}`, board)
        // return storageService.put(STORAGE_KEY, board)
    } else {
        board.createdAt = Date.now()
        return httpService.post('board/', board)
        // return storageService.post(STORAGE_KEY, board)
    }
}


function createTask(title) {
    return {
        "id": utilService.makeId(),
        "title": title,
        "labelIds": [],
        "members": [],
    }
}

function createGroup(title) {
    return {
        "id": utilService.makeId(),
        "title": title,
        "archivedAt": 1589983468418,
        "tasks": [],
    }
}

function createLabel({ color, colorName }) {
    return {
        "id": utilService.makeId(),
        "title": "",
        color,
        colorName
    }

}

function createNewAttachment(url, height, width, name = 'Media url',type) {
    return {
        id: utilService.makeId(5),
        url,
        name,
        height,
        width,
        type,
        createdAt: Date.now()
    }

}

async function createNewBoard(boardInfo) {

    const board = {
        // "_id": boardInfo._id,
        "title": boardInfo.title,
        "isStarred": false,
        "createdAt": Date.now(),
        "createBy": {
            "_id": boardInfo.user._id,
            "fullname": boardInfo.user.fullname,
            "imgUrl": boardInfo.user.imgUrl
        },
        "customBackgrounds": [],
        "style": boardInfo.style,
        "labels": [],
        "members": [
            boardInfo.user,
        ],
        "groups": [
            {
                "id": utilService.makeId(5),
                "title": "Start Here",
                "archivedAt": 1589983468418,
                "tasks": [],
                "style": {}
            },
        ],
        "activities": [],
    }

    // await storageService.post(STORAGE_KEY, board)
    const newBoard = await httpService.post('board/', board)
    return newBoard._id
}


