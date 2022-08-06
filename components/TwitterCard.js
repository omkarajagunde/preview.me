import React from 'react'
import TwitterLogo from '../resources/TwitterLogo.svg'

export default function TwitterCard(props) {
  return (
    <div className='twitterCard' style={props.style}>
      <img src={ TwitterLogo.src } className="twitterCard-logo"/>
      <div className='twitterCard-img'>
        <img src={ props.postData.imageURL } />
      </div>
      <div className='twitterCard-domain'>
        { props.postData.domain }
      </div>
      <div className='twitterCard-title'>
        { props.postData.title }
      </div>
      <div className='twitterCard-subtitle'>
        { props.postData.subtitle }
      </div>
    </div>
  )
}
