import React from 'react';
import styles from './EgeMaterials.module.css';

function EgeMaterials() {
  return (
    <div className={styles.container}>

    <h2 className={styles.header}>Справочные материалы</h2>

    <div className={styles.linkDivContainer}>
      <a className={styles.linkDivLink} href='https://raw.githubusercontent.com/EranLavan/words-beyond/53128f2023207826ae7b925313b02e1a38334144/images/01-periodic-logic.jpg'>
        <div className={styles.linkDiv}>Закономерности</div>
      </a>

      <a className={styles.linkDivLink} href='https://raw.githubusercontent.com/EranLavan/words-beyond/53128f2023207826ae7b925313b02e1a38334144/images/02-oxides.jpg'>
        <div className={styles.linkDiv}>Оксиды</div>
      </a>

      <a className={styles.linkDivLink} href='https://raw.githubusercontent.com/EranLavan/words-beyond/53128f2023207826ae7b925313b02e1a38334144/images/03-hydroxides.jpg'>
        <div className={styles.linkDiv}>Гидроксиды</div>
      </a>
      
      <a className={styles.linkDivLink} href='https://raw.githubusercontent.com/EranLavan/words-beyond/53128f2023207826ae7b925313b02e1a38334144/images/04-typical-oxidation-states.jpg'>
        <div className={styles.linkDiv}>Типичные степени окисления</div>
      </a>

      <a className={styles.linkDivLink} href='https://raw.githubusercontent.com/EranLavan/words-beyond/53128f2023207826ae7b925313b02e1a38334144/images/05-acidic-oxides.jpg'>
        <div className={styles.linkDiv}>Кислоты</div>
      </a>

      <a className={styles.linkDivLink} href='https://raw.githubusercontent.com/EranLavan/words-beyond/53128f2023207826ae7b925313b02e1a38334144/images/06-reactions-with-alkali.jpg'>
        <div className={styles.linkDiv}>Реакции с щёлочью</div>
      </a>

      <a className={styles.linkDivLink} href='https://raw.githubusercontent.com/EranLavan/words-beyond/53128f2023207826ae7b925313b02e1a38334144/images/07-reaction-rate.jpg'>
        <div className={styles.linkDiv}>Скорость химической реакции</div>
      </a>
    </div>

  </div>
  )
}

export default EgeMaterials
