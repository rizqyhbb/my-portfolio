import React, { HTMLInputTypeAttribute, SyntheticEvent } from 'react';
import styles from './Input.module.css';

interface IInput {
  type?: HTMLInputTypeAttribute
  name: string
  label: string
  id: string
  onChange?: (e: SyntheticEvent) => void
  value?: string

}
const Input = ({
  label, type = 'text', name, id, onChange, value
}: IInput): JSX.Element => {
  return (
    <div className={styles.container}>
      <label id={id}>{label}</label>
      <input id={id} onChange={onChange} type={type} name={name} value={value}/>
    </div>
  );
};

export default Input;
