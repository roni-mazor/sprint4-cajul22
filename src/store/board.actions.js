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

export function saveGroup(group, task, txt, link, opTxt) {

    return async (dispatch, getState) => {
        try {
            const board = getState().boardModule.board
            const user = getState().userModule.user
            board.groups = board.groups.map(g => {
                if (g.id === group.id) return group
                else return g
            })
            _saveActivity(user, board, group.id, task, txt, link, opTxt)
            boardService.save(board)
            dispatch({ type: 'SET_BOARD', board })
        } catch (err) {
            console.log('Couldnt update board: ', err);
        }
    }
}
export function saveBoard(board, group, task, txt, link, opTxt) {

    return async (dispatch, getState) => {
        try {
            const user = getState().userModule.user
            let groupId = group ? group.id : null
            // board.activities = []
            // console.log('txt:', txt)
            _saveActivity(user, board, groupId, task, txt, link, opTxt)
            boardService.save(board)
            dispatch({ type: 'SET_BOARD', board })
        } catch (err) {
            console.log('Couldnt update board: ', err);
        }
    }
}

export function saveTask(groupId, task, txt, link, opTxt, attachment, comment) {
    return async (dispatch, getState) => {
        // boardService.saveTask(boardId, groupId, task)
        const user = getState().userModule.user
        const board = getState().boardModule.board
        const groupIdx = board.groups.findIndex(g => g.id === groupId)
        board.groups[groupIdx].tasks = board.groups[groupIdx].tasks.map(t => {
            if (t.id === task.id) return task
            else return t
        })
        _saveActivity(user, board, groupId, task, txt, link, opTxt, attachment, comment)
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

export function removeGroup(groupId, txt, link, opTxt) {
    return (dispatch, getState) => {
        const board = getState().boardModule.board
        const user = getState().userModule.user
        board.groups = board.groups.filter(g => g.id !== groupId)
        _saveActivity(user, board, groupId, null, txt, link, opTxt)
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


function _saveActivity(user, board, groupId, task, txt, link, opTxt, attachment, comment = false) {
    if (!txt) return

    const addedActivity = {
        id: utilService.makeId(4),
        byMember: user,
        createdAt: Date.now(),
        task,
        groupId,
        txt,
        link,
        opTxt,
        attachment,
        comment
    }
    // console.log('addedActivity:', addedActivity)
    board.activities = [addedActivity, ...board.activities]
    // return board
}