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


class App extends React.Component {
  constructor(props){//컴포넌트가 스크린에 표시될때 호출 -> 그리고 렌더
    super(props);
    console.log("hello");
  }
  state = {
    count : 0
  };

  add = () => {
    this.setState(current => ({count: current.count + 1}));
  };
  minus = () => {
    this.setState(current => ({count: current.count - 1}));

  };

  componentDidMount(){//페이지에서 제일 처음처음에 렌더 끝낫을때 호출
    console.log("component rendered");
  }

  componentDidUpdate(){//state 바뀔때 컴포넌트 업데이트 될때
    console.log("updated");
  }

  componentWillUnmount(){//컴포넌트 끝날때 -> e다른 페이지로 갈때
    console.log("bye");

  }
  render() { //처음 렌더 업데이트시 렌더 매번 하고 ->업데이트 호출
    console.log("i am rendering");
    return (
      <div>
        <img src ="https://t1.daumcdn.net/friends/www/resources/images/pc/global_ryan.gif"/>
        <h1>Ryan is : {this.state.count}</h1>
        <button onClick = {this.add}>Add</button>
        <button onClick = {this.minus} >Minus</button>
      </div>
    );
  }
}



export default App;
