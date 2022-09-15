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

    
}

export function updateBoard(board) {

    return async (dispatch) => {

        // console.log('boards actions:', board)
        try {
            boardService.save(board)
            dispatch({ type: 'UPDATE_BOARD', board })
        } catch (err) {
            console.log('Couldnt update board: ', err);
        }
    }
}