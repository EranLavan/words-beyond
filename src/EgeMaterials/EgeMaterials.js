import React from 'react';
import styles from './EgeMaterials.module.css';
import Tooltip from './EgeMaterialsTooltip';

function EgeMaterials() {
  return (
    <div className={styles.container}>

    <h2 className={styles.header}>Справочные материалы</h2>

    <div className={styles.linkDivContainer}>
      <a className={styles.linkDivLink} href='https://raw.githubusercontent.com/EranLavan/words-beyond/53128f2023207826ae7b925313b02e1a38334144/images/01-periodic-logic.jpg'>
        <Tooltip text='<img src="https://raw.githubusercontent.com/EranLavan/words-beyond/53128f2023207826ae7b925313b02e1a38334144/images/01-periodic-logic.jpg" width=130px>'>
          <div className={styles.linkDiv}>Закономерности</div>
        </Tooltip>
      </a><br />

      <a className={styles.linkDivLink} href='https://raw.githubusercontent.com/EranLavan/words-beyond/53128f2023207826ae7b925313b02e1a38334144/images/02-oxides.jpg'>
        <Tooltip text='<img src="https://raw.githubusercontent.com/EranLavan/words-beyond/53128f2023207826ae7b925313b02e1a38334144/images/02-oxides.jpg" width=130px>'>
          <div className={styles.linkDiv}>Оксиды</div>
        </Tooltip>
      </a><br />

      <a className={styles.linkDivLink} href='https://raw.githubusercontent.com/EranLavan/words-beyond/53128f2023207826ae7b925313b02e1a38334144/images/03-hydroxides.jpg'>
        <Tooltip text='<img src="https://raw.githubusercontent.com/EranLavan/words-beyond/53128f2023207826ae7b925313b02e1a38334144/images/03-hydroxides.jpg" width=130px>'>
          <div className={styles.linkDiv}>Гидроксиды</div>
        </Tooltip>
      </a><br />
      
      <a className={styles.linkDivLink} href='https://raw.githubusercontent.com/EranLavan/words-beyond/53128f2023207826ae7b925313b02e1a38334144/images/04-typical-oxidation-states.jpg'>
        <Tooltip text='<img src="https://raw.githubusercontent.com/EranLavan/words-beyond/53128f2023207826ae7b925313b02e1a38334144/images/04-typical-oxidation-states.jpg" width=130px>'>
          <div className={styles.linkDiv}>Типичные степени окисления</div>
        </Tooltip>
      </a><br />

      <a className={styles.linkDivLink} href='https://raw.githubusercontent.com/EranLavan/words-beyond/53128f2023207826ae7b925313b02e1a38334144/images/05-acidic-oxides.jpg'>
        <Tooltip text='<img src="https://raw.githubusercontent.com/EranLavan/words-beyond/53128f2023207826ae7b925313b02e1a38334144/images/05-acidic-oxides.jpg" width=130px>'>
          <div className={styles.linkDiv}>Кислоты</div>
        </Tooltip>
      </a><br />

      <a className={styles.linkDivLink} href='https://raw.githubusercontent.com/EranLavan/words-beyond/53128f2023207826ae7b925313b02e1a38334144/images/06-reactions-with-alkali.jpg'>
        <Tooltip text='<img src="https://raw.githubusercontent.com/EranLavan/words-beyond/53128f2023207826ae7b925313b02e1a38334144/images/06-reactions-with-alkali.jpg" width=130px>'>
          <div className={styles.linkDiv}>Реакции с щёлочью</div>
        </Tooltip>
      </a><br />

      <a className={styles.linkDivLink} href='https://raw.githubusercontent.com/EranLavan/words-beyond/53128f2023207826ae7b925313b02e1a38334144/images/07-reaction-rate.jpg'>
        <Tooltip text='<img src="https://raw.githubusercontent.com/EranLavan/words-beyond/53128f2023207826ae7b925313b02e1a38334144/images/07-reaction-rate.jpg" width=130px>'>
          <div className={styles.linkDiv}>Скорость химической реакции</div>
        </Tooltip>  
      </a><br />
    </div>

  </div>
  )
}

export default EgeMaterials
