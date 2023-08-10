
import React, { useState } from 'react'

const EditInfo = () => {

  const [user, setuser] = useState('') 
  const [email, setemail] = useState('') 
  const [name, setname] = useState('') 
  const [last_name, setlast_name] = useState('') 
  const [phone, setphone] = useState('') 

  return (
    <article>
      <div>{user}</div>
      <div>{email}</div>
      <div>{name}</div>
      <div>{last_name}</div>
      <div>{phone}</div>
    </article>
  )
}

export default EditInfo