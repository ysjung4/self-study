import React, { Component } from 'react';
import './Reset.scss'
import './Test5.scss'
import Data from './Data.json'
import styled from 'styled-components'

class Test5 extends Component {
    state = {
        movies : Data,
        movieItem : {},
        done : false
    }

    // 로드가 된 후 사용하게될 데이터 (기본으로 설정한다.)
    componentDidMount() {
        const {movies}  = this.state
        this.setState({
            movieItem :  movies[0]
        })
    }
    

    handelFind = (id) => {
        const {movies}  = this.state
        this.setState({
            movieItem : movies.find(item => item.rank ===id)
        })

    }

    moviesOut = () => {
        const {movies}  = this.state
        this.setState({
            movieItem :  movies[0]
        })
    }

    handelClick  = () => {
        this.setState({
            done : true
        })
    }

    handelClose = ()=> {
        this.setState({
            done : false
        })
    }


    render() {
        const {movies, movieItem, done} = this.state
        return (
            <div className="Test5">
                <div className="movie-box">
                    <article className="movie-view">
                        <img src={movieItem.thumbUrl} alt=""></img>
                        <div>
                            <h3>{movieItem.movieNm}</h3>
                            <span>Movie List</span>
                            <ul>
                                <li><strong>개봉일</strong>:{movieItem.openDt}</li>
                                <li><strong>제작상태</strong>:{movieItem.moviePrdtStat}</li>
                                <li><strong>일반영화</strong>:{movieItem.movieType}</li>
                                <li><strong>관람등급</strong>:{movieItem.watchGradeNm}</li>
                                <li><strong>상영시간</strong>:{movieItem.showTs}</li>
                                <li><strong>제작국가</strong>:{movieItem.repNationCd}</li>
                                <li><strong>감독</strong>:{movieItem.director}</li>
                                <li><strong>장르</strong>:{movieItem.genre}</li>
                                <li><strong>배급사</strong>:{movieItem.dtNm}</li>
                                <li><strong>영화명</strong>:{movieItem.movieNm}</li>
                            </ul>
                        </div>
                    </article>
                    <article className="movie-list">
                        <table>
                            <colgroup>
                                <col className="w1"/>
                                <col className="w2"/>
                                <col className="w3"/>
                                <col className="w4"/>
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>순위</th>
                                    <th>영화명</th>
                                    <th>관객수</th>
                                    <th>증감률</th>
                                    <th>장르</th>
                                </tr>
                            </thead>
                            <tbody>
                                    {
                                        movies.map(item=> 
                                            <tr key={item.rank} 
                                            onMouseOver= {() => this.handelFind(item.rank)}
                                            onClick= {this.handelClick}
                                            >
                                                <td>{item.rank}</td>
                                                <td>{item.movieNm}</td>
                                                <td>{item.audiCnt}</td>
                                                <td>{item.salesAmt}</td>
                                                <td>{item.genre}</td>
                                            </tr>)
                                    }
                                   
                                </tbody>
                        </table>
                    </article>
                </div>
               
               {
                   done && <Modal movieItem = {movieItem}>
                                <div>
                                    <h2>{movieItem.movieNm}</h2>
                                    <img src={movieItem.thumbUrl} alt=""></img>
                                    <button onClick={this.handelClose}>X</button>
                                </div>
                           </Modal>
               }

            </div>
        );
    }
}

export default Test5;

const Modal = styled.div`
    width:100%; height: 100vh; position:fixed; left:0; top:0;
    background:rgba(0,0,0,0.8);
    div{
        width: 600px; height:600px; background:#fff;
        position:absolute; left:50%; top:50%; transform:translate(-50%, -50%);
        text-align:center;
        h2{
            font-size:30px; padding:15px 0
        }
        button{
            position:absolute; right:0; top:0; padding:30px;
        }
    }
`