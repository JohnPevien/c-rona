import React from 'react'
import loadingImage from '../../assets/loading-icon.gif'

const Loader = () => {
  return (
    <div>
      <img src={loadingImage} alt='loading' />
    </div>
  )
}

export default Loader
