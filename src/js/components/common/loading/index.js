import React from 'react'
import style from './index.scss'

export const LoadingCenter = (props) => (
	<div className={style.loader}>
      <div className={style.loaderOutter}></div>
      <div className={style.loaderInner}></div>
    </div>
)
