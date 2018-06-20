import React from 'react';
import ReactDom from 'react-dom';
import app1 from './app.less';
import {Button} from 'antd';
import { relativeTimeThreshold } from 'moment';
console.log('app1',app1);

ReactDom.render(<div><Button type="primary" onClick={()=>{
    console.log(this);
}}>HYDL</Button><h1 className={app1.h1}>react write once</h1></div>,document.getElementById('app'));