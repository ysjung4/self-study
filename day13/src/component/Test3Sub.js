import React from 'react';
const Test3Sub = ({name,age,addr,flag,tel,color}) => {
    return (
        <div>
            <p styled={{color:color}}>이름은 {name}입니다</p>
            <p>{flag===true?<b>**</b>:null}나이는 {age}입니다</p>
          {/* <p>{flag &&<b>@@</b>}주소는 
          {addr}</p> */}
            <p>번호는 {tel}</p>
            <p>{flag ===true?<button>로그인</button>
            :<button>로그아웃</button>}</p>
            <p>{flag&&<button>로그인</button>}  </p>
            <p>{flag||<button>로그아웃</button> }</p>
          
        </div>
    );
};
Test3Sub.defalutProps = {
    name:'dd',age:0, color:'red',flag:false,addr:'주소',tel:'000-000'
}

// const Test3Sub = (props) => {
//     return (
//         <div>
//             <p styled={{color:props.color}}>이름은 {props.name}입니다</p>
//             <p>{props.flag===true?<b>**</b>:null}나이는 {props.age}입니다</p>
//     <p>{props.flag&&<b>@@</b>}주소는 {props.addr}</p>
//             <p>번호는 {props.tel}</p>
//             <p>{props.flag ===true?<button>로그인</button>
//             :<button>로그아웃</button>}</p>
//             <p>{props.flag&&<button>로그인</button>}  </p>
//             <p>{props.flag||<button>로그아웃</button> }</p>
          
//         </div>
//     );
// };

export default Test3Sub;