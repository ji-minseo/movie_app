import React from 'react';

class App extends React.Component {
  state = {//나중에 쓸 변수 선언, 초기값 설정. 필수는 아님
    isLoading: true,
    movies: []
  };//마운트 되자마자 변수 바꿔주기

  componentDidMount() {//마운트 처음 되자마자 호출되는 함수(처음만) -> 여기서 api에서 데이터 받아오는 것 함 -> 데이터가 다 로딩되면 받아진 영화 정보 아래 렌더에서 렌더하게!
    setTimeout(()=> {
      this.setState({isLoading : false});
    }, 6000);
  }

  render() { //처음 렌더 업데이트시 렌더 매번 하고 ->업데이트 호출
    const {isLoading} = this.state;
    return (
      <div>{isLoading ? "Loading..." : "We are ready"}</div>
    );
  }
}



export default App;
