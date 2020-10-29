import React, { Component } from 'react';

class List extends Component {

    render() {
        const {onData} = this.props
        return (
           <div>
               <ul>
                  {onData.map( item => <li key={item.no}>
                      {item.no} / {item.text}                  
                      </li>
                      )
                      }
               </ul>
           </div> 
        );
    }
}

export default List;