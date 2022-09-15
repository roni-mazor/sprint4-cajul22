import { MemberPreview } from "./member-preview"

export const BoardHeader = ({ members }) => {


    return (
        <header>
            hello from board's header
            <section className="avatars-container" style={{ display: "flex" }}>
                {members.map(member => <MemberPreview member={member} />)}
            </section>
        </header>
    )
}