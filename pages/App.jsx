import React from 'react'

import BasicRouting from './components/BasicRouting'

import { BrowserRouter } from "react-router-dom"

export default function App() {
  return (
    <BrowserRouter>
        <BasicRouting />
    </BrowserRouter>
  )
}
