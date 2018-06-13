import React from 'react';
import style from './Shift.css';

class Shift extends React.Component{
    render(){
        return (
            <h3 className={style.shift_title}>Shift연산자</h3>
        );
    }
}

export default Shift;

/*함수*/
//인자 x를 부호가 붙은 32비트 정수로 변환한다.


export function ToInt32(x){
    return x << 0;
};


