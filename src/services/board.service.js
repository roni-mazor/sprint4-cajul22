import { boards } from "./data.service"


export const boardService = {
    getById,
}



function getById(boardId) {
    const b = boards.find(board => board._id === boardId)
    return b.board
}