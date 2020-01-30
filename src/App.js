import React from 'react';
import propTypes from 'prop-types';

const foodILike = [
  {
    id : 1,
    name : "ryan",
    image : "https://i.pinimg.com/originals/37/59/0f/37590f3eb78594a9afb6a28a9f294060.gif",
    rating : 5
  },
  {
    id : 2,
    name : "ryab",
    image : "https://i.pinimg.com/originals/f3/5f/c7/f35fc79be4f53c69182d2c10e078da48.gif",
    rating : 4.9
  },
  {
    id : 3,
    name : "ryac",
    image : "http://potsu.net/files/attach/images/285736/680/101/008/17b5d6cf8c96240743209ea57d3bcd4f.gif",
    rating : 5.5
  },
  {
    id : 4,
    name : "ryad",
    image : "https://item.kakaocdn.net/do/f557e4c6ccd84cf7ec9e57b2fb6a4d93f43ad912ad8dd55b04db6a64cddaf76d",
    rating : 4.6
  },
  {
    id : 5,
    name : "ryat",
    image : "https://t1.daumcdn.net/friends/www/resources/images/pc/global_ryan.gif",
    rating : 5.1
  }
]

function Food({name, picture, rating}) {
  return (
    <div>
     <h1>I like {name}</h1>
     <h2>{rating} / 5.0</h2>
     <img src ={picture} alt={name}/>
    </div>
    );
}

Food.propTypes = {
  name : propTypes.string.isRequired,
  picture : propTypes.string.isRequired,
  rating : propTypes.number.isRequired
}

function App() {
  return (
    <div className="App">
      {foodILike.map(dish => (
        <Food 
          key={dish.id} 
          name={dish.name} 
          rating={dish.rating} 
          picture ={dish.image}/>
      ))}
    </div>
  );
}

export default App;
