import React, { useState } from 'react';
import './Tooltip1.css';

const Tooltip = ({ children, text }) => {
  const [visible, setVisible] = useState(false);

  return (
      <div
        className='tooltip-container'
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        {children}

        {visible && ( 
          <div 
            className='tooltip-text' 
            dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, '<br>') }} 
          />
        )}
      </div>
    );
};

export default Tooltip;