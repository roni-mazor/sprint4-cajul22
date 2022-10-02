import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router'
import { useDispatch } from "react-redux"
import { Workspace } from "./views/workspace"
import { BoardDetails } from "./views/board-details"
import { LoginPage } from './views/login-page'
import { Home } from './views/home'
import { TaskDetails } from './views/task-details'
// import { loadUsers } from './store/user.actions'
// import { loadBoards } from './store/board.actions'

import './assets/styles/styles.scss'
import { socketService } from './services/socket.service'
import { userService } from './services/user.service'



export function App() {


  // const dispatch = useDispatch()

  // useEffect(() => {
  //     //dispatch(loadUsers())  
  //     //dispatch(loadBoards())       
  // }, [])
  useEffect(() => {
    socketService.on('user-assignment-notification', (activityDetails) => {
      // console.log('from root', activityDetails)
      if (userService.getLoggedinUser()._id === activityDetails.userId){
        console.log('its me')
      }
    })
  }, [])


  return (
    <div className="App" >
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="workspace" element={<Workspace />} />
        <Route path="login" element={<LoginPage isSignup={false} />} />
        <Route path="signup" element={<LoginPage isSignup={true} />} />
        <Route path="board/:boardId" element={<BoardDetails />} >
          <Route path=":groupId/:taskId" element={<TaskDetails />} />
        </Route>
      </Routes>
    </div >
  )
}

// export default App;
