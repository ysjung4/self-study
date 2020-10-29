import { data } from 'jquery';
import React, { Component } from 'react';
import $ from 'jquery'


class Test1 extends Component {
    state = {
        data : [
            {no:1, name:'홍길동', age:20},
            {no:2, name:'aBc', age:20},
            {no:3, name:'강호동', age:20},
            {no:4, name:'김철수', age:20},
            {no:5, name:'DD', age:20},
            {no:6, name:'이효리', age:20},
            {no:7, name:'mmKKS', age:20},
            {no:8, name:'유재석', age:20},
            {no:9, name:'이수근', age:20},
        ]
    }
componentDidMount() {
    var msg = '';
    var $li = $('ul li')
    $('#text').keyup(function(){
        msg = $(this).val();
        $li.hide()
        var txt = $li.find('span:container('+msg+')')
        $(txt).parent().show()
    })
    
}

    render() {
        const {data} =this.state
        return (
            <div>
                <input type="text"/>
                <hr/>
            <ul>
                {
                data.map(item =><li key={item.no}>
                    {item.no}/<span>{item.name}</span>
                </li>)
                }
            </ul>
                
                </div>
        );
    }
}

export default Test1;