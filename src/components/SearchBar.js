import React from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

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
  const animatedComponents = makeAnimated()

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
          components={animatedComponents}
        />
      </div>
    </div>
  )
}

export default SearchBar
