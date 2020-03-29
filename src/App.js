import React from 'react';
import axios from 'axios';
import Movie from "./Movie";

class App extends React.Component {
  state = {//나중에 쓸 변수 선언, 초기값 설정. 필수는 아님
    isLoading: true,
    movies: []
  };//마운트 되자마자 변수 바꿔주기

  getMovies = async () => {//async = 비동기 함수라고 정의 -> await  기다리길 원하는 함수
    const {
      data: {
        data: {movies}
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");//api 에서 잡아온것을 변수에 넣기!
    this.setState({ movies, isLoading: false })//movies:movies = setstate의 무비스 : axios의 무비스
    //console.log(movies); // movies.data.data.movies
  }
  componentDidMount() {//마운트 처음 되자마자 호출되는 함수(처음만) -> 여기서 api에서 데이터 받아오는 것 함 -> 데이터가 다 로딩되면 받아진 영화 정보 아래 렌더에서 렌더하게!
    this.getMovies();
  }

  render() { //처음 렌더 업데이트시 렌더 매번 하고 ->업데이트 호출
    const {isLoading, movies} = this.state;
    return (
      <div>{isLoading ? "Loading..." : movies.map(movie=> {
        return (
          <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} />
          );
      })}
      </div>
    );
  }
}



export default App;
