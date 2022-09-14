export const BoardPreview = ({ board }) => {
    console.log('board:', board)
    return (
        <section className="board-preview" >
            <h1>{board.board.title}</h1>
        </section>
    )
}