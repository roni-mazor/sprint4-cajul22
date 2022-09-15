const initialState = {
    board: null,
    boards: null,
    filterBy: null,
    isLoading: false
}
export function boardReducer(state = initialState, action) {
    console.log('setting')
    switch (action.type) {
        case 'SET_BOARDS':
            return { ...state, boards: action.boards }
        case 'SET_BOARD':
            return { ...state, board: { ...action.board } }
        case 'UPDATE_BOARD':
            return { ...state, board: { ...action.board } }

        default:
            return state

    }

}
