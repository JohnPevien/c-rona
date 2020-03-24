import React from 'react'
import Select from 'react-select'

const SearchBar = props => {
  const getCountryOptions = () => {
    const {
      countries: { countries },
    } = props

    const countryLabels = Object.entries(countries).map(
      country => country[1].name
    )
    const options = []

    for (let i = 0; i < countryLabels.length; i += 1) {
      const option = {
        label: countryLabels[i],
        value: countryLabels[i],
      }
      options.push(option)
    }
    return options
  }

  const handleSelectChange = ({ label }) => {
    const { onSelectChange } = props
    onSelectChange(label)
  }

  return (
    <div className='panel-block'>
      <div className='control has-icons-left'>
        <Select
          options={getCountryOptions()}
          onChange={e => handleSelectChange(e)}
          placeholder='Search by country...'
        />
      </div>
    </div>
  )
}

export default SearchBar
