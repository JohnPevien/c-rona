import React from 'react'

import 'bulma/css/bulma.min.css'
import '../style.css'

import Header from './layout/Header'
import Footer from './layout/Footer'
import OverviewContainer from './OverviewContainer'
import SearchContainer from './SearchContainer'

const App = () => (
  <div className='container has-background-light'>
    <Header />
    <section className='section'>
      <OverviewContainer />
      <SearchContainer />
    </section>
    <Footer />
  </div>
)

export default App
