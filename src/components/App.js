import React from 'react'

import 'bulma/css/bulma.min.css'
import '../style.css'

import Header from './layout/Header'
import Footer from './layout/Footer'
import SearchContainer from './SearchContainer'
import OverviewContainer from './OverviewContainer'

const App = () => (
  <div className='container has-background-white has-text-black'>
    <Header />
    <section className='section'>
      <OverviewContainer />
      <div className='content'>
        <div className='is-divider' data-content='test' />
      </div>

      <SearchContainer />
    </section>
    <Footer />
  </div>
)

export default App
