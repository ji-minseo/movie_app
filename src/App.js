import React from 'react';

function Food({name, picture}) {
  return (
    <div>
     <h1>I like {name}</h1>
     <img src ={picture}/>
    </div>
    );
}

const foodILike = [
  {
    name : "ryan",
    image : "https://i.pinimg.com/originals/37/59/0f/37590f3eb78594a9afb6a28a9f294060.gif"
  },
  {
    name : "ryab",
    image : "https://i.pinimg.com/originals/f3/5f/c7/f35fc79be4f53c69182d2c10e078da48.gif"
  },
  {
    name : "ryac",
    image : "http://potsu.net/files/attach/images/285736/680/101/008/17b5d6cf8c96240743209ea57d3bcd4f.gif"
  },
  {
    name : "ryad",
    image : "https://item.kakaocdn.net/do/f557e4c6ccd84cf7ec9e57b2fb6a4d93f43ad912ad8dd55b04db6a64cddaf76d"
  },
  {
    name : "ryat",
    image : "https://t1.daumcdn.net/friends/www/resources/images/pc/global_ryan.gif"
  }
]

function App() {
  return (
    <div className="App">
      {foodILike.map(dish => (
        <Food name={dish.name} picture ={dish.image}/>
      ))}
    </div>
  );
}

export default App;
