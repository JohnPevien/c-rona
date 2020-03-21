import React from 'react'

import 'bulma/css/bulma.min.css'
import '../style.css'

import Header from './Header'
import OverviewContainer from './OverviewContainer'
import SearchContainer from './SearchContainer'

const App = () => (
  <div className='container'>
    <Header />
    <section className='section'>
      <OverviewContainer />
      <SearchContainer />
    </section>
  </div>
)

export default App
