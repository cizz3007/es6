import React from 'react';
import style from './Counter.css';

export default function Counter(props) {
    console.log(props);
    return <div onClick={props.onClick}>
        <div className={style.app}>카운터 컴d포넌트</div>
        <div>
            <span>{props.children}</span>
        </div>
    </div>
}