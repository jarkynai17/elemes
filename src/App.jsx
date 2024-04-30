

import React from 'react'
import Header from './Header'
import { Footer } from './components/Footer/Footer'
import { Main } from './components/Main/Main'
import { Category } from './components/Category/Category'

const App = () => {
  return (
    <div>
      <Header/>
      <Main/>
      <Category/>
      <Footer/>
    </div>
  )
}

export default App