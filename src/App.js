import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import image0 from './assets/images/71021_cedric_336x448.jpeg'
import image1 from './assets/images/71021_dumbledore_336x448.jpeg'
import image2 from './assets/images/71021_flitwick_336x448.jpeg'
import image3 from './assets/images/71021_graves_336x448.jpeg'
import image4 from './assets/images/71021_longbottom_336x448.jpeg'
import image5 from './assets/images/71021_lovegood_336x448.jpeg'
import image6 from './assets/images/71021_malfoy_336x448.jpeg'
import image7 from './assets/images/71021_ron_weasly_336x448.jpeg'
import image8 from './assets/images/71021_scamander_336x448.jpeg'
import image9 from './assets/images/71021_thomas_336x448.jpeg'
import image10 from './assets/images/71021_tina_336x448.jpeg'
import image11 from './assets/images/71021_trelawney_336x448.jpeg'

import ImageHolder from './components/ImageHolder/ImageHolder'

class App extends Component {
  state = {
    images : [
      image0,image1,image2,image3,image4,image5,
      image6,image7,image8,image9,image10,image11
    ]
  }

  clickHandler = () => {
    console.log('click me')
    const arr = [...this.state.images]
    // for(let i=0; i<13; i++) {
    //   arr[i] = i
    // }

    for(let i=0; i<12; i++) {
      const rnum = getRandomIntInclusive(0,11)
      const temp = arr[i]
      arr[i] = arr[rnum]
      arr[rnum] = temp
    }
  
    this.setState( {images: arr})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="App-container">
          {this.state.images.map( (img,index) => {
            return <ImageHolder key={index} src={img} clicked={this.clickHandler}/>
          })}
        </div>
      </div>
    );
  }
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

export default App;
