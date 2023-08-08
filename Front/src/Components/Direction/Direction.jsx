import React from 'react'
import style from './Direction.module.css'

const Direction = ({info}) => {
  return (
    <div className={style.Direction}>
        <div className={style.Dicon} />
        <div className={style.DinfoContainer}>
            <h3 style={{textAlign:'left'}}>{info.name}</h3>
            <p style={{textAlign:'left', color:'grey'}}>{info.CP}</p>
            <p >{info.direction}...</p>
        </div>
        <button className={style.Points}>
            ⁝
        </button>
    </div>
  )
}

export default Direction