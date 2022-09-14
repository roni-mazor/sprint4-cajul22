

export function loadBoard(boardId) {
    return async (dispatch) => {
        try {
            console.log(boardId)
            // const cars = await carService.query()
            // console.log('Cars from DB:', cars)
            // dispatch({
            //     type: 'SET_BOARD',
            //     cars
            // })

        } catch (err) {
            // showErrorMsg('Cannot load cars')
            // console.log('Cannot load cars', err)
        }
    }
}
