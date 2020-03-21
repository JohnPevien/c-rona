import React from 'react'

const Overview = ({
  title,
  showDate,
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

  if (showDate) {
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
      </>
    )
  }

  return (
    <>
      <div className='has-text-centered overview-container'>
        <p className='title is-3'>{title}</p>
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
      <article className='message is-dark has-text-black'>
        <div className='message-body has-text-centered'>
          <p>
            <strong>Recovery Rate: {getRecoveryRate()}%</strong>
          </p>
          <p>
            <strong>Fatality Rate: {getFatalityRate()}%</strong>
          </p>
        </div>
      </article>
    </>
  )
}

export default Overview
