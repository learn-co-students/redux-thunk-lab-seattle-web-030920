import React, { Component } from 'react';

class CatList extends Component {   
  
    render() {
      return (
            <div>
                {this.props.catPics.map(catPic => <img url={catPic} key={catPic.id}/>)}
            </div>
      );
    }
  }
  
  export default CatList