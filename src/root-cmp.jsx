import React from 'react';
import { Routes, Route } from 'react-router'
import { Workspace } from "./views/workspace"
import { Board } from "./views/board"


export function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/workspace" element={<Workspace />} />
        <Route path="/board/:boardId" element={<Board />} />
      </Routes>
    </div>
  )
}

// export default App;
