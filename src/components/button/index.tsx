import React, { ReactNode } from 'react';
import styles from './Button.module.css';

interface IButton {
  children: ReactNode
  type?: 'button' | 'submit' | 'reset' | undefined
  onClick?: (e: React.SyntheticEvent) => void
  disabled?: boolean
}
const Button = ({
  children, disabled = false, onClick, type = 'button'
}: IButton): JSX.Element => {
  return (
    <div className={styles.container}>
      <button disabled={disabled} type={type} onClick={onClick}>{children}</button>
    </div>
  );
};

export default Button;
