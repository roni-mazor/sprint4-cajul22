import React from 'react';
import { Routes, Route } from 'react-router'
import { Workspace } from "./views/workspace"
import { BoardDetails } from "./views/board-details"
import { LoginPage } from './views/login-page'
import { SignupPage } from './views/signup-page'
import { Home } from './views/home'
import {  TaskDetails } from './views/task-details';
import './assets/styles/styles.scss'


export function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workspace" element={<Workspace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/board/:boardId" element={<BoardDetails />} />
        <Route path="/board/:boardId/:groupId/:taskId" element={<TaskDetails />} />
      </Routes>
    </div>
  )
}

// export default App;
