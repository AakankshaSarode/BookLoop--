import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import HeadlineCards from './components/HeadlineCards/HeadlineCards'
import Card from './components/Card/Card'
import Exchange from './components/Exchange/Exchange'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div>
    <Navbar/>
     <Hero/>
     <HeadlineCards/>
  <Card/>
  <Exchange />
  </div>


      
    </>
  )
}

export default App
