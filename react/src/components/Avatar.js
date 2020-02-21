import React from 'react'
import PropTypes from 'prop-types'
import Identicon from 'react-blockies'
import styled from 'styled-components'

const AvatarContainer = styled.div`
  .identicon {
    overflow: hidden;
    border-radius: 10rem;
  }
`

export default function Avatar ({ name, bgColor, onClick }) {
  return (
    <AvatarContainer>
      <Identicon
        seed={name}
        bgColor={bgColor || '#fff'}
        onClick={onClick}
      />
    </AvatarContainer>
  )
}

Avatar.propTypes = {
  name: PropTypes.string
}
