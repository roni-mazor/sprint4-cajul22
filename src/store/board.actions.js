import { boardService } from "../services/board.service"

export function loadBoard(boardId) {
    return async (dispatch) => {
        const board = boardService.getById(boardId)
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