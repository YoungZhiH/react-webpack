import React from 'react'
import style from './index.scss'
import LazyLoad from 'react-lazyload';

export const ListCell = (props) => (
    <div className={style.listCellContainer}  onClick={()=>props.skipToDetail(new Date().getMilliseconds())}>
        <div className={style.imgBox}>
        	<LazyLoad>
        	 <img className={style.listCellImgStyle} src={props.item.thumbnail} />
        	</LazyLoad>
        </div>
        <div className={style.listCellRightDiv}>
        	<p className={style.listCellName}>{props.item.name}</p>
        	<p className={style.listCellDesc}>{props.item.desc}</p>
        	<div className={style.listCellBottomDiv}>
                <div>
                    <span className={style.listCellPrice}>{props.item.price}</span>
                    <span className={style.listCellExPrice}>{props.item.exPrice}</span>
                </div>
                <span className={style.hasSolied}>已售{props.item.cell}</span>
            </div>
        </div>
    </div>
);

