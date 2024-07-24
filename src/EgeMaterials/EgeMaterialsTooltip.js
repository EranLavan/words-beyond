import React, { useState } from 'react';
import styles from './EgeMaterialsTooltip.module.css';

const EgeMaterialsTooltip = ({ children, text }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className={styles.tooltipContainer}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}

      {visible && (
        <div
          className={styles.tooltipText}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      )}

    </div>
  );
};

export default EgeMaterialsTooltip;