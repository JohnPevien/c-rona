import React, { Component } from 'react'
import axios from 'axios'

import SearchBar from './SearchBar'
import ResultsOveriew from './shared/ResultsOverview'
import Loader from './shared/Loader'

export class SearchContainer extends Component {
  constructor() {
    super()
    this.state = {
      countries: null,
      countryData: null,
      country: '',
      isLoading: false,
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
      this.setState({ isLoading: true })
      const res = await axios.get(
        `https://covid19.mathdro.id/api/countries/${country}`
      )
      this.setState({ countryData: res.data })
      this.setState({ isLoading: false })
    } catch (e) {
      console.error('No data for selected country')
      this.setState({ countryData: null })
      this.setState({ isLoading: false })
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

  renderSearchbar = () => {
    const { countries } = this.state

    if (countries) {
      return (
        <>
          <div style={{ marginBottom: '1rem' }}>
            <SearchBar
              countries={countries}
              onSelectChange={this.handleCountryChange}
            />
          </div>
        </>
      )
    }
    return <></>
  }

  renderOverview = () => {
    const { countryData, country, isLoading } = this.state

    if (isLoading) {
      return (
        <div className='content has-text-centered'>
          <Loader />
        </div>
      )
    }

    if (countryData) {
      const countryName = this.getCountryName(country)
      return (
        <>
          <ResultsOveriew overview={countryData} title={countryName} />
        </>
      )
    }

    if (country && !countryData) {
      return (
        <>
          <div className='has-text-centered'>
            <p className='is-size-2 is-size-4-mobile'>No data</p>
          </div>
        </>
      )
    }

    return <></>
  }

  render() {
    return (
      <div>
        {this.renderSearchbar()}
        {this.renderOverview()}
      </div>
    )
  }
}

export default SearchContainer
