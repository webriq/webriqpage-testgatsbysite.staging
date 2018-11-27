import React from 'react'
import style from './index.module.css'
import JSONTree from 'react-json-tree'

export default ({ data }) => {
  if (process.env.NODE_ENV !== 'production' && typeof window !== `undefined`) {
    return (
      <div className={style.debug}>
        <JSONTree data={data} />
      </div>
    )
  }

  return <></>
}
