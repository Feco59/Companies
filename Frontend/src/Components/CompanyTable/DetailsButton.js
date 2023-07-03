import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'

const DetailsButton = ({ID}) => {

  const handleCLick = _ => {
    window.open(`/Company/${ID}`,'_self')
  }
  return (
    <FontAwesomeIcon className="details-button" icon={faInfo} title='Details' onClick={handleCLick} />
  )
}

export default DetailsButton