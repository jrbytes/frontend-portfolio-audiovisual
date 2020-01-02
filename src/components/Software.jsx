import React from 'react'

import { Media, Image } from 'react-bootstrap'

function Software(props) {
  return (
    <Media>
      <Image
        width={64}
        height={64}
        className="mr-3"
        src={props.img}
        alt={props.software}
        rounded
      />
      <Media.Body>
        <h5>{props.software}</h5>
        <p>
          {props.description}
        </p>
      </Media.Body>
    </Media>
  )
}

export default Software