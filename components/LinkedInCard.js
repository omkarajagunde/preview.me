import React from 'react'
import LinkedinLogo from '../resources/LinkedinLogo.svg'

export default function LinkedInCard(props) {
  return (
    <div className='linkedinCard'  style={props.style}>
      <img src={ LinkedinLogo.src } className="linkedinCard-logo"/>
      <div className='linkedinCard-img'>
        <img src={ props.postData.imageURL } alt="image" />
      </div>
      <div className='linkedinCard-headline'>
        { props.postData.title }
      </div>
      <div className='linkedinCard-desc'>
        <div>{ props.postData.webDomain }</div>
        <div></div>
        <div>{ props.postData.readTime }</div>
      </div>
    </div>
  )
}
