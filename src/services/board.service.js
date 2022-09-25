import { storageService } from "./async-storage.service"
import { boards } from "./data.service"
import { httpService } from "./http.service"
import { utilService } from "./util.service"

const STORAGE_KEY = 'boards'


export const boardService = {
    query,
    getById,
    save,
    // getTaskById,
    createTask,
    createGroup,
    // saveTask,
    createLabel,
    createNewAttachment,
    // starBoardFromWorkspace,
    createNewBoard
}

async function query() {
    // console.log('am i getting here?')
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
    // console.log('boards from service:', myBoards)
    return myBoards
    // return await httpService.get('board/')
}



async function getById(boardId) {
    return await storageService.get(STORAGE_KEY, boardId)
    // return await httpService.get(`board/${boardId}`)
}

// async function getTaskById(boardId, groupId, TaskId) {
//     const board = await storageService.get(STORAGE_KEY, boardId)
//     const group = board.groups.find(group => group.id === groupId)
//     const task = group.tasks.find(task => task.id === TaskId)
//     return task

// }

// async function starBoardFromWorkspace(boardId) {
//     await httpService.put(`board/star/${boardId}`)
// }

async function save(board) {
    if (board._id) {
        // return httpService.put(`board/${board._id}`, board)
        return storageService.put(STORAGE_KEY, board)
    } else {
        board.createdAt = Date.now()
        // return httpService.post('board/', board)
        return storageService.post(STORAGE_KEY, board)
    }
}

// async function saveTask(boardId, groupId, task) {
//     const board = await getById(boardId)
//     const groupIdx = board.groups.findIndex(g => g.id === groupId)
//     board.groups[groupIdx].tasks = board.groups[groupIdx].tasks.map(t => {
//         if (t.id === task.id) return task
//         else return t
//     })
//     save(board)

// }

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

function createNewAttachment(url, height, width, name = 'Media url') {
    return {
        id: utilService.makeId(5),
        url,
        name,
        height,
        width,
        createdAt: Date.now()
    }

}

async function createNewBoard(boardInfo) {

    const board = {
        "_id": boardInfo._id,
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

   await storageService.post(STORAGE_KEY, board)
    return board
}


