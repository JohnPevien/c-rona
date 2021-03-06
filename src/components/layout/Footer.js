import React from 'react'

const Footer = () => {
  return (
    <footer className='footer has-background-black has-text-white'>
      <div className='content has-text-centered'>
        <p>
          <b>C-RONA by</b>{' '}
          <a className='has-text-grey' href='https://github.com/JohnPevien'>
            John Pevien Laguindam
          </a>
        </p>
        <p>
          <b>Data Source:</b>{' '}
          <a
            className='has-text-grey'
            href='https://github.com/mathdroid/covid-19-api'
          >
            covid-19-api
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
