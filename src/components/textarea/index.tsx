import React, { SyntheticEvent } from 'react';
import styles from './Textarea.module.css';

interface ITextarea {
  name: string
  id: string
  label: string
  onChange?: (e: SyntheticEvent) => void
  value?: string
}

const Textarea = ({
  id, label, name, onChange, value
}: ITextarea): JSX.Element => {
  return (
    <div className={styles.container}>
      <label id={id}>{label}</label>
      <textarea id={id} name={name} rows={5} value={value} onChange={onChange}/>
    </div>
  );
};

export default Textarea;
