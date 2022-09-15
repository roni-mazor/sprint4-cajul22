import React from 'react';
import { Routes, Route } from 'react-router'
import { Workspace } from "./views/workspace"
import { Board } from "./views/board"
import { LoginPage } from './views/login-page'
import './assets/styles/styles.scss'


export function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/workspace" element={<Workspace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/board/:boardId" element={<Board />} />
      </Routes>
    </div>
  )
}

// export default App;
