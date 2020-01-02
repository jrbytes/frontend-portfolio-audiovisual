import React from 'react'

import { ResponsiveEmbed } from 'react-bootstrap'

function Video(props) {
  return (
    <ResponsiveEmbed aspectRatio="16by9">
      <embed type="image/svg+xml" src={props.src} />
    </ResponsiveEmbed>
  )
}

export default Video