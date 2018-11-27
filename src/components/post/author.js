import React from 'react'
import get from 'lodash/get'
import style from './index.module.css'

export default ({ users, userId }) => {
  const author = users.find(user => {
    return user.id === userId
  })

  return (
    <small className={style.author}>
      {get(author, 'profile.firstname')} {get(author, 'profile.lastname')}
    </small>
  )
}
