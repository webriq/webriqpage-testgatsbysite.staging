import React from 'react'
import _ from 'lodash'
import indexStyles from './index.module.css'

export default ({ users, userId }) => {
  const author = users.find(user => {
    return user.node.id === userId
  })

  return (
    <small className={indexStyles.author}>
      {_.get(author, 'node.profile.firstname')}{' '}
      {_.get(author, 'node.profile.lastname')}
    </small>
  )
}
