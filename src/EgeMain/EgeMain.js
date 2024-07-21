import React from 'react';
import styles from './EgeMain.module.css';

function EgeMain() {
  return (
    <div className={styles.container}>

      <h2 className={styles.header}>Menkalinan Chemistry</h2>

      <div className={styles.linkDivContainer}>
        <div className={styles.linkDiv}>Тесты ЕГЭ</div>
        <div className={styles.linkDiv}>Тематические задания</div>
        <div className={styles.linkDiv}>Справочные материалы</div>
      </div>

    </div>
  )
}

export default EgeMain
