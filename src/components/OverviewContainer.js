import React, { Component } from 'react'
import axios from 'axios'

import ResultsOverview from './shared/ResultsOverview'

class OverviewContainer extends Component {
  constructor() {
    super()
    this.state = {
      overview: null,
    }
  }

  componentDidMount() {
    this.fetchOverview()
  }

  fetchOverview = async () => {
    const res = await axios.get('https://covid19.mathdro.id/api')
    this.setState({ overview: res.data })
  }

  render() {
    const { overview } = this.state
    if (overview) {
      return (
        <>
          <ResultsOverview overview={overview} showDate title='Overview' />
        </>
      )
    }
    return null
  }
}

export default OverviewContainer
