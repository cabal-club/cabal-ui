import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import styled from 'styled-components'

import Avatar from './Avatar'

const MessageContainer = styled.div`
  display: flex;
  margin-bottom: 0.6rem;
  padding-top: 0.3rem;
  width: 100%;

  .date {
    color: rgba(0, 0, 0, 0.33);
    font-size: 0.75rem;
    font-weight: 500;
    margin-left: 0.5rem;
  
    & .date--full {
      margin-left: 0.5rem;
      opacity: 0;
      transition: opacity .2s ease-in-out;
    }
  }
`

const AvatarContainer = styled.div`
  display: flex;
  padding: 0 0.7rem 0 1rem;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem 0 0;
  font-size: 0.875rem;
  line-height: 1.5;

  &:hover .date .date--full {
    opacity: 1;
  }
`

const Text = styled.div`
  margin-left: ${props => props.indent ? '32px;' : 'inherit'};
  margin-top: ${props => props.indent ? '-12px;' : 'inherit'};
`

const Name = styled.div`
  font-weight: 700;
  margin-top: -5px;
  display: flex;
  align-items: flex-end;
`

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
    <MessageContainer>
      <AvatarContainer>
        {repeatedNickname ? null : <Avatar name={nickname || 'conspirator'} />}
      </AvatarContainer>
      <Content>
        {repeatedNickname ? null : <Name>{nickname || 'conspirator'}{renderDate(time)}</Name>}
        <Text indent={!!repeatedNickname}>
          {enrichText(content)}
        </Text>
      </Content>
    </MessageContainer>
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
