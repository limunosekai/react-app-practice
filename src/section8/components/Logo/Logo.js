import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import styles from './Logo.module.css';

const logo = (props) => (
  <div className={styles.Logo}>
    <img src={burgerLogo} alt='버거' />
  </div>
);

export default logo;
