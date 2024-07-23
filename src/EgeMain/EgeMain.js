import React from 'react';
import { Link } from 'react-router-dom';
import styles from './EgeMain.module.css';

function EgeMain() {
  return (
    <div className={styles.container}>

      <h2 className={styles.header}>Menkalinan Chemistry</h2>

      <div className={styles.linkDivContainer}>
        
        <div className={styles.linkDiv}>Тесты ЕГЭ</div>
        <div className={styles.linkDiv}>Тематические задания</div>
        <Link to="/materials" className={styles.linkDivLink}><div className={styles.linkDiv}>Справочные материалы</div></Link>
      
      </div>

    </div>
  )
}

export default EgeMain
