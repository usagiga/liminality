import React, { FC } from 'react';
import styles from './Top.module.css';
import Splash from '../components/Splash';

const Top: FC = function () {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <h1>Liminality</h1>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#lipsum">Lorem Ipsum</a>
          </li>
          <li>
            <a href="#night-on-the-galactic-railroad">銀河鉄道の夜</a>
          </li>
        </ul>
      </header>
      <article>
        <section>
          <h2 id="about">About</h2>
          <p>Liminality is iikanji design portfolio.</p>
        </section>
        <section>
          <h2 id="lipsum">Lorem Ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
        <section>
          <h2 id="night-on-the-galactic-railroad">銀河鉄道の夜</h2>
          <p>
            「ではみなさんは、そういうふうに川だと云われたり、乳の流れたあとだと云われたりしていたこのぼんやりと白いものがほんとうは何かご承知ですか。」先生は、黒板に吊した大きな黒い星座の図の、上から下へ白くけぶった銀河帯のようなところを指しながら、みんなに問をかけました。
            カムパネルラが手をあげました。それから四五人手をあげました。ジョバンニも手をあげようとして、急いでそのままやめました。たしかにあれがみんな星だと、いつか雑誌で読んだのでしたが、このごろはジョバンニはまるで毎日教室でもねむく、本を読むひまも読む本もないので、なんだかどんなこともよくわからないという気持ちがするのでした。
          </p>
        </section>
      </article>
      <Splash />
    </div>
  );
};

export default Top;
