import React from 'react'

import 'bulma/css/bulma.min.css'
import '../style.css'

import Header from './Header'
import OverviewContainer from './OverviewContainer'

const App = () => (
  <div className='container'>
    <Header />
    <section className='section'>
      <OverviewContainer />
    </section>
  </div>
)

export default App
