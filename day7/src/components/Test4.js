import React, { Component } from 'react';

class Test4 extends Component {
    no = 1
    inputid = React.createRef()
    state = {
        id:'',
        pw:'',
        data : []
    }

    handleChange = e => {
        const {name, value} = e.target
        this.setState({
            [name] : value
        })
    }
    handleInput = (e) => {
        e.preventDefault()
        const {data, id,pw} =this.state
        this.setState({
            data: this.state.data.concat({no:this.no++, id:id, pw:pw}),
            id:'', pw:''
        })
        this.inputid.current.focus()
    }
    /*
    handleInput = () => {
        this.setState({
            data: this.state.data.concat({no:this.no++, id:this.state.id, pw:this.state.pw, id:'', pw:''})
        })
        this.inputid.current.focus()
    }
    */

    render() {
        const {id, pw, data} = this.state
        return (
            <div>
                <form onSubmit={this.handleInput}>
                <input type="text" ref = {this.inputid} name="id" 
                value={id} onChange={this.handleChange}/>
                <input type="" name= "pw"  value={pw} onChange={this.handleChange}/>
                <button type='submit'>입력</button>
                </form>
                <hr/>
                <ul>
                    {
                        data.map(item => <li key={item.no}>
                            {item.no} / {item.id} / {item.pw}
                        </li>)
                    }
                </ul>
            </div>
        );
    }
}

export default Test4;