import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';

ReactDOM.render(
    <Counter onClick={ () => { console.log(1234); } }></Counter>, document.getElementById('app')
);
