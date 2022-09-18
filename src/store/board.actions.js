import { boardService } from "../services/board.service"

export function loadBoard(boardId) {
    return async (dispatch) => {
        console.log('boardId:', boardId)
        const board = await boardService.getById(boardId)
        dispatch({ type: 'SET_BOARD', board })
    }
}

export function resetBoard() {
    return (dispatch) => {
        const board = {}

        dispatch({ type: 'SET_BOARD', board })
    }
}

export function loadBoards() {

    return async (dispatch, getState) => {
        const { filterBy } = getState().boardModule
        try {
            const boards = await boardService.query(filterBy)
            // console.log('boards actions:', boards)
            dispatch({ type: 'SET_BOARDS', boards })
        } catch (err) {
            console.log('Couldnt get boards: ', err);
        }

    }
}

export function updateIsStarred(board) {

    return async (dispatch) => {

        // console.log('boards actions:', board)
        try {
            boardService.save(board)
            dispatch({ type: 'SET_STARRED', board })
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

export function saveTask(boardId, groupId, task) {
    return async (dispatch, getState) => {
        boardService.saveTask(boardId, groupId, task)
        const board = getState().boardModule.board
        const groupIdx = board.groups.findIndex(g => g.id === groupId)
        board.groups[groupIdx].tasks = board.groups[groupIdx].tasks.map(t => {
            if (t.id === task.id) return task
            else return t
        })

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


        console.log(board)
        boardService.save(board)
        dispatch({ type: 'SET_BOARD', board })
    }
}