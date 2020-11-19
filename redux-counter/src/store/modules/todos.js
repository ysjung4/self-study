//액션 생성
const INSERT = 'todos/INSERT' //데이터추가  
const REMOVE = 'todos/REMOVE' //목록삭제
const TOGGLE = 'todos/TOGGLE' //클래스 붙이고 떼기(수정)
const CHANGE_INPUT = 'todos/CHANGE_INPUT' //input 값 처리
//액션 함수 내보내기

export const insert = () => ({type:INSERT})
export const remove = () => ({type:REMOVE})
export const toggle = () => ({type:TOGGLE})
export const changeInput = () => ({type:CHANGE_INPUT})

//리듀서- 순수함수
const initalState = {
    input:'',
    data:[
        {id:1,text:'할일넣어주기'},
        {id:2,text:'종강입니다'}
    ]
}
const reducer = (state = initalState,action) =>{

    switch(action.type){
        case INSERT:
            return{
                ...state,

            }
            case REMOVE:
                return{
                    ...state,
    
                }
                case TOGGLE:
            return{
                ...state,

            }
                case CHANGE_INPUT:
            return{
                ...state,
            }

        default:
            return state
    }
}


export default reducer






// 1.체인지 - 상태변수--input 
// 2.입력 - 데이터 배열객체 [{id:1,text:'할일}]
// 3.삭제 - 해당번호
// 4.토글 수정(addclass.removeclass)