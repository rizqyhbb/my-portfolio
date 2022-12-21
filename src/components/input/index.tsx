import React, { HTMLInputTypeAttribute } from 'react'
import styles from "./Input.module.css"

interface IInput {
  type?: HTMLInputTypeAttribute
  name: string
  label: string
  id: string

}
const Input = ({ label, type = "text", name, id }: IInput) => {
  return (
    <div className={styles.container}>
      <label id={id}>{label}</label>
      <input id={id} type={type} name={name} />
    </div>
  )
}

export default Input