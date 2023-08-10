
import React from 'react'

const EditInfo = () => {

  const info_user = {
                     user:'user',
                     email:'email',
                     name:'name',
                     last_name:'last_name',
                     phone:'phone',
                    } 

  return (
    <article>
      <div>{info_user.user}</div>
      <div>{info_user.email}</div>
      <div>{info_user.name}</div>
      <div>{info_user.last_name}</div>
      <div>{info_user.phone}</div>
    </article>
  )
}

export default EditInfo