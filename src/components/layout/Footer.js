import React from 'react'

const Footer = () => {
  return (
    <footer className='footer has-background-white'>
      <div className='content has-text-centered'>
        <p>
          <strong>C-RONA</strong> by{' '}
          <a href='https://github.com/JohnPevien'>John Pevien Laguindam</a>
        </p>
        <p>
          <strong>Data Source: </strong>
          <a href='https://github.com/mathdroid/covid-19-api'>covid-19-api</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
