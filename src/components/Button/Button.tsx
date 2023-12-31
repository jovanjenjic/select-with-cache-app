import React from 'react';
import { ButtonProps } from './types';
import styles from './Button.module.scss';

const Button: React.FC<ButtonProps> = ({ type, text, onClick, isLoading }) => {
  const onClickHandler = () => {
    if (!isLoading) {
      onClick();
    }
  };

  return (
    <button
      className={`
      ${styles['button']}  
      ${styles[`button${type === 'primary' ? '__primary' : '__secondary'}`]}`}
      onClick={onClickHandler}
    >
      {text}
    </button>
  );
};

export default React.memo(Button);
