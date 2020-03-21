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
              <p className='title is-size-5-mobile'>
                {numberFormatter(confirmed.value)}
              </p>
            </div>
          </div>
          <div className='level-item has-text-centered'>
            <div>
              <p className='heading'>Recovered</p>
              <p className='title is-size-5-mobile'>
                {numberFormatter(recovered.value)}
              </p>
            </div>
          </div>
          <div className='level-item has-text-centered'>
            <div>
              <p className='heading'>Deaths</p>
              <p className='title is-size-5-mobile'>
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
            <p className='title is-size-5-mobile'>
              {numberFormatter(confirmed.value)}
            </p>
          </div>
        </div>
        <div className='level-item has-text-centered'>
          <div>
            <p className='heading'>Recovered</p>
            <p className='title is-size-5-mobile'>
              {numberFormatter(recovered.value)}
            </p>
          </div>
        </div>
        <div className='level-item has-text-centered'>
          <div>
            <p className='heading'>Deaths</p>
            <p className='title is-size-5-mobile'>
              {numberFormatter(deaths.value)}
            </p>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Overview
