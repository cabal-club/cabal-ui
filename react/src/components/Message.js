import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import Avatar from './Avatar'

export default function Message ({ message: { nickname, content, time }, repeatedNickname }) {
  const renderDate = (time) => {
    const t = moment(time)
    return (
      <span>
        {t.format('h:mm A')}
        <span className='messages__item__metadata__date'>{t.format('LL')}</span>
      </span>
    )
  }

  const enrichText = (content) => {
    // TODO
    return content
  }

  return (
    <div className='messages__item'>
      <div className='messages__item__avatar'>
        {repeatedNickname ? null : <Avatar name={nickname || 'conspirator'} />}
      </div>
      <div className='messages__item__metadata'>
        {repeatedNickname ? null : <div className='messages__item__metadata__name'>{nickname || 'conspirator'}{renderDate(time)}</div>}
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
    time: PropTypes.string
  }),
  repeatedNickname: PropTypes.bool
}
