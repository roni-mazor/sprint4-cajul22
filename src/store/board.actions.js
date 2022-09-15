import { boardService } from "../services/board.service"

export function loadBoard(boardId) {
    return async (dispatch) => {
        const board = await boardService.getById(boardId)
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