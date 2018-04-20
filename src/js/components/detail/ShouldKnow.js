import React from 'react'
import style from './index.scss'

export const ShouldKnow = (props) => (
    <div className={style.shouldKnow}>
        <p className={style.boradKnow}>
            购买须知
        </p>
        {renderCell(props.info)}
    </div>
);

const renderCell = (obj) => {
	console.log(obj[0].orderDetail[0])
	let resultJSX = [];
	for (let key in obj[0].orderDetail[0]){
		let template = '';
    let title = '';
        if (key === 'youxiaoqi') {
            title = '有效期';
        }else if(key === 'chuwairiqi'){
            title='除外日期'
        }else if(key === 'shiyongshijian'){
            title='使用时间'
        }else if(key === 'yuyuetixing'){
            title='预约提醒'
        }else if(key === 'guizetixing'){
            title='规则提醒'
        }else if(key === 'baojian'){
            title='包间'
        }else if(key === 'tangshiwaidai'){
            title='堂食外带'
        }else if(key === 'wenxintishi'){
            title='温馨提示'
        }
     template = 
    	<div  key={key} className={style.knowCellContainer}>
     		<p>{title}</p>
     		{ 
     			obj[0].orderDetail[0][key].map((item,index)=>{
     				return (
     					<div key={index}>{item}</div>
     				)
     			})
     		}
			</div>
     resultJSX.push(template)
	}
	return resultJSX;
}
