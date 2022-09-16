import { MemberPreview } from "./member-preview"

export const BoardHeader = ({ members, name }) => {


    return (
        <header className="board-header">
            <h1>{name}</h1>
            <section className="avatars-container" style={{ display: "flex" }}>
                {members.map(member => <MemberPreview member={member} />)}
            </section>
        </header>
    )
}
