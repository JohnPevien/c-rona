import React from 'react'

const Overview = ({
  title,
  isOverview,
  overview: { confirmed, recovered, deaths, lastUpdate },
}) => {
  const numberFormatter = num => {
    const nf = new Intl.NumberFormat()
    return nf.format(num)
  }

  const formatDate = date => {
    return new Date(date).toDateString()
  }

  const getRecoveryRate = () => {
    const recoveryRate = (recovered.value / confirmed.value) * 100
    return recoveryRate.toFixed(2)
  }

  const getFatalityRate = () => {
    const fatalityRate = (deaths.value / confirmed.value) * 100
    return fatalityRate.toFixed(2)
  }

  if (isOverview) {
    return (
      <>
        <div className='has-text-centered overview-container'>
          <p className='title is-3'>{title}</p>
          <p className='subtitle is-5'>As of {formatDate(lastUpdate)}</p>
        </div>
        <nav className='level is-mobile'>
          <div className='level-item has-text-centered'>
            <div>
              <p className='heading'>Confirmed</p>
              <p className='title is-size-4-mobile'>
                {numberFormatter(confirmed.value)}
              </p>
            </div>
          </div>
          <div className='level-item has-text-centered'>
            <div>
              <p className='heading'>Recovered</p>
              <p className='title is-size-4-mobile'>
                {numberFormatter(recovered.value)}
              </p>
            </div>
          </div>
          <div className='level-item has-text-centered'>
            <div>
              <p className='heading'>Deaths</p>
              <p className='title is-size-4-mobile'>
                {numberFormatter(deaths.value)}
              </p>
            </div>
          </div>
        </nav>
        <div className='level is-mobile' style={{ marginTop: '2rem' }}>
          <div className='level-item has-text-centered'>
            <div>
              <p className='heading'>Recovery Rate</p>
              <p className='title is-size-5 is-size-6-mobile'>
                {getRecoveryRate()}%
              </p>
            </div>
          </div>
          <div className='level-item has-text-centered'>
            <div>
              <p className='heading'>Fatality Rate</p>
              <p className='title is-size-5 is-size-6-mobile'>
                {getFatalityRate()}%
              </p>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className='container'>
      <div className='card'>
        <div
          className='card-content has-background-dark'
          style={{ borderRadius: '2rem' }}
        >
          <div className='has-text-centered overview-container'>
            <p className='is-size-3 has-text-white'>{title}</p>
          </div>
          <nav className='level is-mobile has-text-white'>
            <div className='level-item has-text-centered'>
              <div>
                <p className='heading'>Confirmed</p>
                <p className='title is-size-4-mobile has-text-white'>
                  {numberFormatter(confirmed.value)}
                </p>
              </div>
            </div>
            <div className='level-item has-text-centered'>
              <div>
                <p className='heading'>Recovered</p>
                <p className='title is-size-4-mobile has-text-white'>
                  {numberFormatter(recovered.value)}
                </p>
              </div>
            </div>
            <div className='level-item has-text-centered'>
              <div>
                <p className='heading'>Deaths</p>
                <p className='title is-size-4-mobile has-text-white'>
                  {numberFormatter(deaths.value)}
                </p>
              </div>
            </div>
          </nav>
          <div className='has-text-centered has-text-white'>
            <p>
              Recovery Rate: <em>{getRecoveryRate()}%</em>
            </p>
            <p>
              Fatality Rate: <em>{getFatalityRate()}%</em>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview
