import React, { FC, useEffect, useState } from 'react';
import styles from './Splash.module.css';
import logo from '../logo.svg';

const Splash: FC = function () {
  const [invisible, setInvisible] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setInvisible(true);
    }, 2000);
  });

  return (
    <aside
      className={`
      ${styles.container}
      ${invisible ? styles.turnInvisible : ''}`}
    >
      <div className={styles.turnVisible}>
        <img src={logo} className={styles.logo} alt="logo" />
        <p>Powered by React</p>
      </div>
    </aside>
  );
};

export default Splash;
