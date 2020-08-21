import React from 'react'
import ReactPlayer from 'react-player/youtube'
 
export default function Video () {
  return ( 
<div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://youtu.be/h-zGhhRZ_Eo'
          width='100%'
          height='100%'
        />
      </div>
  )
}
// Only loads the YouTube player
