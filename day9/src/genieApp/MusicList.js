import React, { Component } from 'react';
import MusicItem from './MusicItem';
import './MusicList.css'
class  MusicList extends Component {

    render() {
        const {filterData, onOpen} = this.props
        return (
            <div className="MusicList">
                <table>
                    <colgroup>
                    <col className="w1"/>
                    <col className="w2"/>
                    <col className="w3"/>
                    <col className="w4"/>
                    <col className="w5"/>
                    </colgroup>
                    <thead>
                        <tr>
                            <th>순위</th>
                            <th>앨범</th>
                            <th>곡명</th>
                            <th>가수</th>
                            <th>상승</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                            <td>{musicData[0].rank}</td>
                            <td><img src={musicData[0].poster} width="50" alt=""/></td>
                            <td>{musicData[0].title}</td>
                            <td>{musicData[0].singer}</td>
                            <td>{musicData[0].state}</td>
                           
                        </tr> */}
                        { filterData.map( music => <MusicItem key={music.rank}
                        music = {music}
                        onOpen ={ onOpen}
                        /> )
                        } 
                    </tbody>
                </table>
            </div>
        );
    }
}

export default  MusicList;