import React from 'react'
import ReactJson from 'react-json-view'
import style from './index.module.css'

export default ({ data }) => {
  if (process.env.NODE_ENV !== 'production') {
    return (
      <div className={style.debug}>
        <ReactJson src={data} collapsed={true} name="DEBUG" />
      </div>
    )
  }

  return <></>
}
