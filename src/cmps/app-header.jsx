import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { MemberPreview } from './member-preview'

export const AppHeader = ({ board }) => {

    const dispatch = useDispatch()
    const member = useSelector(state => state.userModule.user)

  

    return (
        <header className={board ? 'app-header board' : 'app-header'}>
            <Link to="/workspace" className="header-logo flex align-center">
                <img src="https://a.trellocdn.com/prgb/dist/images/header-logo-spirit.d947df93bc055849898e.gif" alt="" />
            </Link>
            <h4 className="log-sig">
                <MemberPreview member={member} infoReq="boardHeader" />
            </h4>
        </header>
    )
}