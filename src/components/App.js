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
      <div className='has-text-centered' style={{ marginTop: '1.5rem' }}>
        <p className='is-size-5 is-size-6-mobile'>
          <em>*Note: This might not display the most recent data</em>
        </p>
      </div>
    </section>

    <Footer />
  </div>
)

export default App
