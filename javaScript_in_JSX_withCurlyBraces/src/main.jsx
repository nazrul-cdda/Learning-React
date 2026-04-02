import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Passing_string_with_quotes from './App.jsx'
import TodoList from './new.jsx'
import Object from './object.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Passing_string_with_quotes /> */}
    {/* <TodoList /> */}
    <Object />
  </StrictMode>,
)
