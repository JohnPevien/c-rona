import React, { Component } from 'react'
import axios from 'axios'

import SearchBar from './SearchBar'
import ResultsOveriew from './shared/ResultsOverview'

export class SearchContainer extends Component {
  constructor() {
    super()
    this.state = {
      countries: null,
      countryData: null,
      country: '',
    }
  }

  componentDidMount() {
    this.fetchCountries()
  }

  fetchCountries = async () => {
    const res = await axios.get('https://covid19.mathdro.id/api/countries')
    this.setState({ countries: res.data })
  }

  fetchCountryData = async country => {
    try {
      const res = await axios.get(
        `https://covid19.mathdro.id/api/countries/${country}`
      )
      this.setState({ countryData: res.data })
    } catch (e) {
      console.error('No data for selected country')
      this.setState({ countryData: null })
    }
  }

  handleCountryChange = country => {
    this.setState({ country })
    this.fetchCountryData(country)
  }

  getCountryName = countryCode => {
    const {
      countries: { countries },
    } = this.state
    return Object.keys(countries).find(key => countries[key] === countryCode)
  }

  renderContent = () => {
    const { countries, countryData, country } = this.state

    if (countries && countryData) {
      const countryName = this.getCountryName(country)
      return (
        <>
          <div style={{ marginBottom: '1rem' }}>
            <SearchBar
              countries={countries}
              onSelectChange={this.handleCountryChange}
            />
          </div>

          <ResultsOveriew overview={countryData} title={countryName} />
        </>
      )
    }
    if (country && !countryData) {
      return (
        <>
          <div style={{ marginBottom: '1rem' }}>
            <SearchBar
              countries={countries}
              onSelectChange={this.handleCountryChange}
            />
          </div>
          <div className='has-text-centered'>
            <p className='is-size-2 is-size-4-mobile'>No data</p>
          </div>
        </>
      )
    }
    if (countries) {
      return (
        <>
          <SearchBar
            countries={countries}
            onSelectChange={this.handleCountryChange}
          />
        </>
      )
    }

    return <>Loading..</>
  }

  render() {
    return <div>{this.renderContent()}</div>
  }
}

export default SearchContainer
