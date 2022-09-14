import { boardService } from "../services/board.service"

export function loadBoard(boardId) {
    return async (dispatch) => {
        const board = boardService.getById(boardId)
        dispatch({ type: 'SET_BOARD', board })
    }
}
