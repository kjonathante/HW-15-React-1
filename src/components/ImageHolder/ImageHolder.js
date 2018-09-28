import React from 'react';
import './ImageHolder.css'

const ImageHolder = props => {
  const style = {
    backgroundImage: `url(${props.src})` // "url(" + props.src + ")"
  }

  return (
    <div className="ImageHolder" style={style}/>
  )
}

export default ImageHolder;