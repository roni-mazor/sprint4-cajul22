const initialState = {
    board: null,
    boards: null,
    filterBy: null,
    isLoading: false
}
export function boardReducer(state = initialState, action) {

    switch (action.type) {
        case 'SET_BOARDS':
            return { ...state, boards: action.boards }
        case 'SET_BOARD':
            return { ...state, board: action.board }
        case 'UPDATE_BOARD':
            return {
                ...state,
                boards: state.boards.map(board => board._id === action.board._id ? action.board : board)
            }

        default:
            return state

    }

}
