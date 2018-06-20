import React from 'react';
import ReactDom from 'react-dom';
import app1 from './app.less';
import {Button ,Input } from 'antd';
import { relativeTimeThreshold } from 'moment';
console.log('app1',app1);
class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div className={app1.h1}>
            <Button type="primary">按钮</Button>
            <Button type="primary">按钮</Button>
            <Button type="primary">按钮</Button>
            <Button type="primary">按钮</Button>
            <Button type="primary">按钮</Button>
            <Input style={{'width':'200px'}}/>
        </div>
    }
}
ReactDom.render(<App/>,document.getElementById('app'));