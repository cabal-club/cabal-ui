import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import Avatar from './Avatar'

import './Message.scss'

export default function Message ({ message: { nickname, content, time }, repeatedNickname }) {
  time = moment(time)

  const renderDate = (time) => {
    return (
      <span className='date'>
        {time.format('h:mm A')}
        <span className='date--full'>{time.format('LL')}</span>
      </span>
    )
  }

  const enrichText = (content) => {
    // TODO
    return content
  }

  return (
    <div className='message'>
      <div className='avatarContainer'>
        {repeatedNickname ? null : <Avatar name={nickname || 'conspirator'} />}
      </div>
      <div className='content'>
        {repeatedNickname ? null : <div className='name'>{nickname || 'conspirator'}{renderDate(time)}</div>}
        <div className={repeatedNickname ? 'text indent' : 'text'}>
          {enrichText(content)}
        </div>
      </div>
    </div>
  )
}

Message.propTypes = {
  message: PropTypes.shape({
    nickname: PropTypes.string,
    content: PropTypes.string,
    time: PropTypes.object
  }),
  repeatedNickname: PropTypes.bool
}
