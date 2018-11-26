import React from 'react'
import ReactJson from 'react-json-view'

export default ({ data }) => {
  if (process.env.NODE_ENV !== 'production') {
    return <ReactJson src={data} collapsed={true} name="DEBUG" />
  }

  return <></>
}
