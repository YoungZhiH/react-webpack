import React from 'react'
import style from './index.scss'
import LazyLoad from 'react-lazyload';

export const AdCell = (props) => (
    <div className={props.indexs == 2 ? style.cellContainers_nomargin : style.cellContainers} >
        	<img className={style.cellImg} src={props.data.thumbnail} />
        <p className={style.cellName}>
            {props.data.name}
        </p>
        <span className={style.price}>{props.data.price}</span>
        {
        	props.types == 1 ? 
         		<span className={style.tag}>{props.data.subtract}</span> 
          :
          <span className={props.data.tag ? style.type2tag : null }>{props.data.tag}</span>
        }
    </div>
);

