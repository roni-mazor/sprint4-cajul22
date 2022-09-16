const initialState = {
    board: null,
    boards: null,
    filterBy: null,
    isLoading: false,
    isLabelTxtOpen: false,
}

export function boardReducer(state = initialState, action) {

    switch (action.type) {
        case 'SET_BOARDS':
            return { ...state, boards: action.boards }
        case 'SET_BOARD':
            return { ...state, board: { ...action.board } }
        case 'SET_STARRED':
            return {
                ...state,
                boards: state.boards.map(board => board._id === action.board._id ? action.board : board)
            }
        case 'TOGGLE_LABEL_TXT':
            return { ...state, isLabelTxtOpen: !state.isLabelTxtOpen }

        default:
            return state
    }
}
