import React, { FC, useEffect, useState } from 'react';
import styles from './Splash.module.scss';
import logo from '../logo.svg';

const Splash: FC = function () {
  const [visible, setVisible] = useState(false);
  const [invisible, setInvisible] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setVisible(true);
    }, 1000);
  });
  useEffect(() => {
    setInterval(() => {
      setInvisible(true);
    }, 3000);
  });

  return (
    <aside
      className={`
        ${styles.container}
        ${invisible ? styles.turnInvisible : ''}
      `}
    >
      <div
        className={`
          ${styles.innerContainer}
          ${visible ? styles.turnVisible : ''}
       `}
      >
        <img src={logo} className={styles.logo} alt="logo" />
        <p>Powered by React</p>
      </div>
    </aside>
  );
};

export default Splash;
