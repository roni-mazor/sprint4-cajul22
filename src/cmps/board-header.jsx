import { MemberPreview } from "./member-preview"
import { BsThreeDots } from 'react-icons/bs'

export const BoardHeader = ({ members, name }) => {


    return (
        <header className="board-header">
            <span>
            <h1 className="board-title">{name}</h1>
            <section className="avatars-container" style={{ display: "flex" }}>
                {members.map(member => <MemberPreview member={member} />)}
            </section>
            </span>
            <button className="show-menu-btn"><BsThreeDots /> Show menu</button>
        </header>
    )
}
