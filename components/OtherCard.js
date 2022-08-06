import React from 'react'

export default function OtherCard(props) {
  return (
    <div className='otherCard' style={props.style}>
        <div className='otherCard-img'>
            <img src={ props.postData.imageURL } />
        </div >
        <div className='otherCard-img'>
        <div className='twitterCard-title'>
            { props.postData.title }
        </div>
        <div>
            <div className='twitterCard-domain'>
            { props.postData.domain }
        </div>
        </div>  
      </div>
    </div>
  )
}
