import React from 'react';
import { css } from '@lib/v1/aphrodite';

import styles from './styles';


const Button = ({children}) => (
  <div className={css(styles.container)}>
    {
      (() => {
        switch (typeof children) {
          default:
            return "Foooooo";
        }
      })()
    }
  </div>
);

export default Button;
