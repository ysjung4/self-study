import React, { Component } from 'react';
import './MusicApp.css'
class  MusicItem extends Component {

    render() {
        const {music} = this.props
        return (
            <>
                <tr key={music.rank}>
                            <td>{music.rank}</td>
                            <td><img src={music.poster} width="50" alt=""/></td>
                            <td>{music.title}</td>
                            <td>{music.singer}</td>
                            <td>{music.state === '유지' && '--'}
                            {music.state === '상승' && ' *'}
                            {music.state === '하강' && '0'}
                            </td>
                        </tr> )
            </>
        );
    }
}

export default  MusicItem;