import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import {
  focusCabal,
  showScreen
} from '../features/cabals/cabalsSlice'

const CabalListContainer = styled.div`
  background-color: #16161d;
  color: #fff;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: hidden;
`

const List = styled.div`
  padding: 0 1rem;
  overflow-x: hidden;
  overflow-y: auto;
`

const Item = styled.div`
  align-items: center;
  border-radius: 100rem;
  border: 2px solid rgba(255, 255, 255, 0.75);
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  display: flex;
  font-size: 0.75rem;
  font-weight: 700;
  height: 2rem;
  justify-content: center;
  margin: 0 0 0.75rem 0;
  transition: all 0.05s ease-in-out;
  width: 2rem;
  opacity: 0.7;

  &:hover {
    opacity: 1;
    transform: scale(1.05);
  }

  &.active {
    background-color: #693AFA;
    border: none;
    color: white !important;
  }
`

export default function CabalList ({ cabals, currentCabal, loading }) {
  const dispatch = useDispatch()

  const onClickCabalListItem = (cabalKey) => {
    dispatch(focusCabal({ cabalKey }))
  }

  const onClickAddCabalButton = () => {
    dispatch(showScreen('addCabal'))
  }

  const onClickAppSettingsButton = () => {
    dispatch(showScreen('settings'))
  }

  if (loading) {
    return (
      <CabalListContainer>
        Loading...
      </CabalListContainer>
    )
  }
  return (
    <CabalListContainer>
      <List>
        {cabals.length && cabals.map((cabal, index) => {
          return (
            <Item key={index} onClick={() => onClickCabalListItem(cabal.key)}>
              {cabal.key.substr(0, 2)}
            </Item>
          )
        })}
        <Item onClick={onClickAddCabalButton}>
          <img src='static/images/icon-newchannel.svg' />
        </Item>
      </List>
      <Item onClick={onClickAppSettingsButton}>
        <img src='static/images/icon-newchannel.svg' />
      </Item>
    </CabalListContainer>
  )
}

CabalList.propTypes = {
  cabals: PropTypes.array.isRequired,
  currentCabal: PropTypes.string,
  onClick: PropTypes.func
}
