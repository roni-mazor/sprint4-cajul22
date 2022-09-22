import { boardService } from "../services/board.service"
import { utilService } from "../services/util.service"

export function loadBoard(boardId) {
    return async (dispatch) => {
        const board = await boardService.getById(boardId)
        console.log(board)
        dispatch({ type: 'SET_BOARD', board })
    }
}

export function resetBoard() {
    return (dispatch) => {
        const board = null

        dispatch({ type: 'SET_BOARD', board })
    }
}

export function loadBoards() {

    console.log('loading')
    return async (dispatch) => {
        try {
            const boards = await boardService.query()

            dispatch({ type: 'SET_BOARDS', boards })
        } catch (err) {
            console.log('Couldnt get boards: ', err);
        }

    }
}


export function updateIsStarred(board) {

    return async (dispatch) => {

        try {
            dispatch({ type: 'SET_STARRED', board })
            await boardService.starBoardFromWorkspace(board._id)
        } catch (err) {
            console.log('Couldnt update board: ', err);
        }
    }
}

export function saveGroup(group) {

    return async (dispatch, getState) => {
        try {
            const board = getState().boardModule.board
            board.groups = board.groups.map(g => {
                if (g.id === group.id) return group
                else return g
            })
            boardService.save(board)
            dispatch({ type: 'SET_BOARD', board })
        } catch (err) {
            console.log('Couldnt update board: ', err);
        }
    }
}
export function saveBoard(board) {

    return async (dispatch,) => {
        try {

            boardService.save(board)
            dispatch({ type: 'SET_BOARD', board })
        } catch (err) {
            console.log('Couldnt update board: ', err);
        }
    }
}

export function saveTask(groupId, task) {
    return async (dispatch, getState) => {
        console.log(groupId)
        const board = getState().boardModule.board
        const groupIdx = board.groups.findIndex(g => g.id === groupId)
        console.log(groupIdx)
        console.log(board.groups)
        // board.groups[groupIdx].tasks = board.groups[groupIdx].tasks.map(t => {
        //     if (t.id === task.id) return task
        //     else return t
        // })
        // const user = getState().userModule.user
        // const addedActivity = {
        //     id: utilService.makeId(6),
        //     byMember: user,
        //     createdAt: Date.now(),
        //     taskId: task.id,
        //     groupId,
        //     txt
        // }

        // board.activities.unshift(addedActivity)
        console.log(board)
        boardService.save(board)
        dispatch({ type: 'SET_BOARD', board })

    }
}

export function toggleLabelTxt() {
    return (dispatch) => {
        dispatch({ type: 'TOGGLE_LABEL_TXT' })
    }
}
export function saveLabels(labels) {
    return (dispatch, getState) => {
        const board = getState().boardModule.board
        board.labels = labels
        boardService.save(board)

        dispatch({ type: 'SET_BOARD', board })
    }
}
export function removeLabel(labels, removedLabelId) {
    return (dispatch, getState) => {
        const board = getState().boardModule.board
        board.labels = labels

        board.groups = board.groups.map((group) => {
            return {
                ...group, tasks: group.tasks.map(task => {
                    return { ...task, labelIds: task.labelIds.filter(id => id !== removedLabelId) }
                })
            }
        })


        boardService.save(board)
        dispatch({ type: 'SET_BOARD', board })
    }
}

export function removeGroup(groupId) {
    return (dispatch, getState) => {
        const board = getState().boardModule.board
        board.groups = board.groups.filter(g => g.id !== groupId)
        boardService.save(board)
        dispatch({ type: 'SET_BOARD', board })
    }
}

export function removeAttachment(groupId, taskId) {
    return (dispatch, getState) => {
        const board = getState().boardModule.board
        board.groups = board.groups.filter(g => g.id !== groupId)
        boardService.save(board)
        dispatch({ type: 'SET_BOARD', board })
    }
}

export function saveActivity(taskId, groupId, txt) {
    return (dispatch, getState) => {
        const board = getState().boardModule.board
        const user = getState().userModule.user
        const addedActivity = {
            id: utilService.makeId(4),
            byMember: user,
            createdAt: Date.now(),
            taskId,
            groupId,
            txt
        }
        console.log('addedActivity:', addedActivity)
        board.activities.unshift(addedActivity)
        boardService.save(board)
        dispatch({ type: 'SET_BOARD', board })
    }
}