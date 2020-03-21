import React from 'react'

const Header = () => {
  return (
    <>
      <nav
        className='navbar is-black'
        role='navigation'
        aria-label='main navigation'
      >
        <div className='navbar-brand'>
          <a className='navbar-item' href='/'>
            <p className='title is-2 has-text-white'>C-RONA</p>
          </a>
        </div>
      </nav>
    </>
  )
}

export default Header
