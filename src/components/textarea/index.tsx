import React from 'react'
import styles from './Textarea.module.css'

interface ITextarea {
  name: string
  id: string
  label: string
}

const Textarea = ({ id, label, name }: ITextarea) => {
  return (
    <div className={styles.container}>
      <label id={id}>{label}</label>
      <textarea id={id} name={name} rows={2} />
    </div>
  )
}

export default Textarea