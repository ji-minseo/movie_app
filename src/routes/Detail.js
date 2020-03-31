import React from 'react';

class Detail extends React.Component {
    componentDidMount() {//이 함수 쓰기위해 클래스로 변경!
        const { location, history } = this.props;
        if(location.state === undefined){
            history.push("/");
        }
        console.log(location.state);
    }
    render() {
        const { location } = this.props;
        if (location.state) {
            return <span>{location.state.title}</span>;
        }
        else {
            return null;
        }
    }
}

export default Detail;