import React from 'react'
import get from 'lodash/get'
import style from './index.module.css'

export default ({ users, userId }) => {
  const author = users.find(user => {
    return user.node.id === userId
  })

  return (
    <small className={style.author}>
      {get(author, 'node.profile.firstname')}{' '}
      {get(author, 'node.profile.lastname')}
    </small>
  )
}
