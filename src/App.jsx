import React from 'react'
import { Cart, FlexContant, Footer, Hero, Navbar, Sales, Stories } from './components'

import {
  heroapi, popularsales,
  topratesales, highlight, sneaker, story, footerAPI
} from './data/data'

const App = () => {
  return (
    <>
      <Navbar />
      <Cart />
      <main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContant endpoint={highlight} ifExists />
        <Sales endpoint={topratesales} />
        <FlexContant endpoint={sneaker} />
        <Stories story={story} />
      </main>
      <Footer footerAPI={footerAPI} />
    </>
  )
}

export default App