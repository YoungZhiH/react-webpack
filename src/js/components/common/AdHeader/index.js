import React from 'react'
import style from './index.scss'

export const AdHeader = (props) => (
    <div className={style.header}>
        <span className={style.title} style={props.type===2?{color:'#f5734b'}:null}>{props.title}</span>
        <div>
            <span className={style.more}>更多优惠</span>
        </div>
    </div>
);

