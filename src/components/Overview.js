import React from 'react'

const Overview = ({
  overview: { confirmed, recovered, deaths, lastUpdate },
}) => {
  const numberFormatter = num => {
    const nf = new Intl.NumberFormat()
    return nf.format(num)
  }

  const formatDate = date => {
    return new Date(date).toDateString()
  }

  return (
    <>
      <div className='has-text-centered overview-container'>
        <p className='title is-3'>Overview:</p>
        <p className='subtitle is-5'>As of {formatDate(lastUpdate)}</p>
      </div>

      <nav className='level'>
        <div className='level-item has-text-centered'>
          <div>
            <p className='heading'>Confirmed</p>
            <p className='title'>{numberFormatter(confirmed.value)}</p>
          </div>
        </div>
        <div className='level-item has-text-centered'>
          <div>
            <p className='heading'>Recovered</p>
            <p className='title'>{numberFormatter(recovered.value)}</p>
          </div>
        </div>
        <div className='level-item has-text-centered'>
          <div>
            <p className='heading'>Deaths</p>
            <p className='title'>{numberFormatter(deaths.value)}</p>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Overview
