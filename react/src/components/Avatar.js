import React from 'react'
import PropTypes from 'prop-types'
import Identicon from 'react-blockies'

export default function Avatar ({ name, bgColor, onClick }) {
  return (
    <Identicon
      seed={name}
      bgColor={bgColor || '#fff'}
      onClick={onClick}
    />
  )
}

Avatar.propTypes = {
  name: PropTypes.string
}
