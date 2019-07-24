import React from 'react'
import PropTypes from 'prop-types'

import './CabalList.scss'

export default function CabalList ({ cabals, currentCabal, loading, onClick }) {
  if (loading) {
    return (
      <div className='cabalList'>
        Loading...
      </div>
    )
  }
  return (
    <div className='cabalList'>
      <div className='collection'>
        {cabals.length && cabals.map((cabal, index) => {
          return (
            <div className='item' key={index} onClick={onClick}>
              {cabal.key.substr(0, 2)}
            </div>
          )
        })}
        <div className='item'>
          <img src='static/images/icon-newchannel.svg' />
        </div>
      </div>
    </div>
  )
}

CabalList.propTypes = {
  cabals: PropTypes.array.isRequired,
  currentCabal: PropTypes.string,
  onClick: PropTypes.func
}
