import React, { useState } from 'react';
import Tooltip from './Tooltip';
import './style1.css'
import './style2.css'
import './style3.css'
import './style4.css'
import './style5.css'

function SolubilityDraft() {

  const [style, setStyle] = useState('style4');

  const handleStyleChange = (event) => {
    setStyle(event.target.value);
  };

  const data = [

// IMPORTANT: we can add specific numbers to the tooltip, not just Soluble/Insoluble

  {
    id: 1,

    anion: { 
      value: '<b>OH<sup>-</sup></b>', 
      url: '',
      tooltip: '' 
    },

    h: { 
      value: 'H<sub>2</sub>O', 
      url: 'https://content.health.harvard.edu/wp-content/uploads/2023/07/b8a1309a-ba53-48c7-bca3-9c36aab2338a.jpg',
      tooltip: 'Water\n<img src="https://content.health.harvard.edu/wp-content/uploads/2023/07/b8a1309a-ba53-48c7-bca3-9c36aab2338a.jpg" alt="Water" width=200 />'
    },

    li: { 
      value: 'S', 
      url: '',
      tooltip: '' 
    },

    na: {
      value: 'S',
      url: 'https://media.licdn.com/dms/image/C4E12AQHNTk_DlltKvA/article-cover_image-shrink_720_1280/0/1628426265063?e=1724889600&v=beta&t=ZxbfN4Tgcrkf9or69ndzzkKEY-L0qQTPAKQRayXksq8',
      tooltip: 'Sodium Hydroxide\nHighly soluble\n<img src="https://media.licdn.com/dms/image/C4E12AQHNTk_DlltKvA/article-cover_image-shrink_720_1280/0/1628426265063?e=1724889600&v=beta&t=ZxbfN4Tgcrkf9or69ndzzkKEY-L0qQTPAKQRayXksq8" alt="Sodium Hydroxide" width=200 />'
    },

    k: {
      value: 'S',
      url: '',
      tooltip: ''
    },

    nh4: {
      value: 'S',
      url: '',
      tooltip: ''
    },

    ba: {
      value: 'S',
      url: '',
      tooltip: ''
    },

    ca: {
      value: 'sS',
      url: '',
      tooltip: ''
    },

    mg: {
      value: 'I',
      url: '',
      tooltip: ''
    },
    
    sr: {
      value: 'sS',
      url: '',
      tooltip: ''
    },
    
    al: {
      value: 'I',
      url: '',
      tooltip: ''
    },
    
    cr: {
      value: 'I',
      url: '',
      tooltip: ''
    },
    
    fe2: {
      value: 'I',
      url: '',
      tooltip: ''
    },
    
    fe3: {
      value: 'I',
      url: '',
      tooltip: ''
    },
    
    mn: {
      value: 'I',
      url: '',
      tooltip: ''
    },
    
    zn: {
      value: 'I',
      url: '',
      tooltip: ''
    },
    
    ag: {
      value: '–',
      url: '',
      tooltip: ''
    },
    
    hg: {
      value: '–',
      url: '',
      tooltip: ''
    },
    
    pb: {
      value: 'I',
      url: '',
      tooltip: ''
    },
    
    sn: {
      value: 'I',
      url: '',
      tooltip: ''
    },
    
    cu: {
      value: 'I',
      url: '',
      tooltip: ''
    }
  },

  {
    id: 2,

    anion: { 
      value: '<b>F<sup>-</sup></b>', 
      url: '',
      tooltip: '' 
    },

    h: { 
      value: '', 
      url: '',
      tooltip: ''
    },

    li: { 
      value: '', 
      url: '',
      tooltip: '' 
    },

    na: {
      value: '',
      url: '',
      tooltip: ''
    },

    k: {
      value: '',
      url: '',
      tooltip: ''
    },

    nh4: {
      value: '',
      url: '',
      tooltip: ''
    },

    ba: {
      value: '',
      url: '',
      tooltip: ''
    },

    ca: {
      value: '',
      url: '',
      tooltip: ''
    },

    mg: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    sr: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    al: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    cr: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    fe2: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    fe3: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    mn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    zn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    ag: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    hg: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    pb: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    sn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    cu: {
      value: '',
      url: '',
      tooltip: ''
    }
  },

  {
    id: 3,

    anion: { 
      value: '<b>Cl<sup>-</sup></b>', 
      url: '',
      tooltip: '' 
    },

    h: { 
      value: '', 
      url: '',
      tooltip: ''
    },

    li: { 
      value: '', 
      url: '',
      tooltip: '' 
    },

    na: {
      value: '',
      url: '',
      tooltip: ''
    },

    k: {
      value: '',
      url: '',
      tooltip: ''
    },

    nh4: {
      value: '',
      url: '',
      tooltip: ''
    },

    ba: {
      value: '',
      url: '',
      tooltip: ''
    },

    ca: {
      value: '',
      url: '',
      tooltip: ''
    },

    mg: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    sr: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    al: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    cr: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    fe2: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    fe3: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    mn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    zn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    ag: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    hg: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    pb: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    sn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    cu: {
      value: '',
      url: '',
      tooltip: ''
    }
  },

  {
    id: 4,

    anion: { 
      value: '<b>Br<sup>-</sup></b>', 
      url: '',
      tooltip: '' 
    },

    h: { 
      value: '', 
      url: '',
      tooltip: ''
    },

    li: { 
      value: '', 
      url: '',
      tooltip: '' 
    },

    na: {
      value: '',
      url: '',
      tooltip: ''
    },

    k: {
      value: '',
      url: '',
      tooltip: ''
    },

    nh4: {
      value: '',
      url: '',
      tooltip: ''
    },

    ba: {
      value: '',
      url: '',
      tooltip: ''
    },

    ca: {
      value: '',
      url: '',
      tooltip: ''
    },

    mg: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    sr: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    al: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    cr: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    fe2: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    fe3: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    mn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    zn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    ag: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    hg: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    pb: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    sn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    cu: {
      value: '',
      url: '',
      tooltip: ''
    }
  },

  {
    id: 5,

    anion: { 
      value: '<b>I<sup>-</sup></b>', 
      url: '',
      tooltip: '' 
    },

    h: { 
      value: '', 
      url: '',
      tooltip: ''
    },

    li: { 
      value: '', 
      url: '',
      tooltip: '' 
    },

    na: {
      value: '',
      url: '',
      tooltip: ''
    },

    k: {
      value: '',
      url: '',
      tooltip: ''
    },

    nh4: {
      value: '',
      url: '',
      tooltip: ''
    },

    ba: {
      value: '',
      url: '',
      tooltip: ''
    },

    ca: {
      value: '',
      url: '',
      tooltip: ''
    },

    mg: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    sr: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    al: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    cr: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    fe2: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    fe3: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    mn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    zn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    ag: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    hg: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    pb: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    sn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    cu: {
      value: '',
      url: '',
      tooltip: ''
    }
  },

  {
    id: 6,

    anion: { 
      value: '<b>S<sup>2-</sup></b>', 
      url: '',
      tooltip: '' 
    },

    h: { 
      value: '', 
      url: '',
      tooltip: ''
    },

    li: { 
      value: '', 
      url: '',
      tooltip: '' 
    },

    na: {
      value: '',
      url: '',
      tooltip: ''
    },

    k: {
      value: '',
      url: '',
      tooltip: ''
    },

    nh4: {
      value: '',
      url: '',
      tooltip: ''
    },

    ba: {
      value: '',
      url: '',
      tooltip: ''
    },

    ca: {
      value: '',
      url: '',
      tooltip: ''
    },

    mg: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    sr: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    al: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    cr: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    fe2: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    fe3: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    mn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    zn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    ag: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    hg: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    pb: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    sn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    cu: {
      value: '',
      url: '',
      tooltip: ''
    }
  },

  {
    id: 7,

    anion: { 
      value: '<b>HS<sup>-</sup></b>', 
      url: '',
      tooltip: '' 
    },

    h: { 
      value: '', 
      url: '',
      tooltip: ''
    },

    li: { 
      value: '', 
      url: '',
      tooltip: '' 
    },

    na: {
      value: '',
      url: '',
      tooltip: ''
    },

    k: {
      value: '',
      url: '',
      tooltip: ''
    },

    nh4: {
      value: '',
      url: '',
      tooltip: ''
    },

    ba: {
      value: '',
      url: '',
      tooltip: ''
    },

    ca: {
      value: '',
      url: '',
      tooltip: ''
    },

    mg: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    sr: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    al: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    cr: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    fe2: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    fe3: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    mn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    zn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    ag: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    hg: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    pb: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    sn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    cu: {
      value: '',
      url: '',
      tooltip: ''
    }
  },

  {
    id: 8,

    anion: { 
      value: '<b>SO<sub>3</sub><sup>2-</sup></b>', 
      url: '',
      tooltip: '' 
    },

    h: { 
      value: '', 
      url: '',
      tooltip: ''
    },

    li: { 
      value: '', 
      url: '',
      tooltip: '' 
    },

    na: {
      value: '',
      url: '',
      tooltip: ''
    },

    k: {
      value: '',
      url: '',
      tooltip: ''
    },

    nh4: {
      value: '',
      url: '',
      tooltip: ''
    },

    ba: {
      value: '',
      url: '',
      tooltip: ''
    },

    ca: {
      value: '',
      url: '',
      tooltip: ''
    },

    mg: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    sr: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    al: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    cr: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    fe2: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    fe3: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    mn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    zn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    ag: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    hg: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    pb: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    sn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    cu: {
      value: '',
      url: '',
      tooltip: ''
    }
  },

  {
    id: 9,

    anion: { 
      value: '<b>HSO<sub>3</sub><sup>-</sup></b>', 
      url: '',
      tooltip: '' 
    },

    h: { 
      value: '', 
      url: '',
      tooltip: ''
    },

    li: { 
      value: '', 
      url: '',
      tooltip: '' 
    },

    na: {
      value: '',
      url: '',
      tooltip: ''
    },

    k: {
      value: '',
      url: '',
      tooltip: ''
    },

    nh4: {
      value: '',
      url: '',
      tooltip: ''
    },

    ba: {
      value: '',
      url: '',
      tooltip: ''
    },

    ca: {
      value: '',
      url: '',
      tooltip: ''
    },

    mg: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    sr: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    al: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    cr: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    fe2: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    fe3: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    mn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    zn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    ag: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    hg: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    pb: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    sn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    cu: {
      value: '',
      url: '',
      tooltip: ''
    }
  },

  {
    id: 10,

    anion: { 
      value: '<b>SO<sub>4</sub><sup>2-</sup></b>', 
      url: '',
      tooltip: '' 
    },

    h: { 
      value: '', 
      url: '',
      tooltip: ''
    },

    li: { 
      value: '', 
      url: '',
      tooltip: '' 
    },

    na: {
      value: '',
      url: '',
      tooltip: ''
    },

    k: {
      value: '',
      url: '',
      tooltip: ''
    },

    nh4: {
      value: '',
      url: '',
      tooltip: ''
    },

    ba: {
      value: '',
      url: '',
      tooltip: ''
    },

    ca: {
      value: '',
      url: '',
      tooltip: ''
    },

    mg: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    sr: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    al: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    cr: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    fe2: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    fe3: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    mn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    zn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    ag: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    hg: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    pb: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    sn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    cu: {
      value: '',
      url: '',
      tooltip: ''
    }
  },

  {
    id: 11,

    anion: { 
      value: '<b>HSO<sub>4</sub><sup>-</sup></b>', 
      url: '',
      tooltip: '' 
    },

    h: { 
      value: '', 
      url: '',
      tooltip: ''
    },

    li: { 
      value: '', 
      url: '',
      tooltip: '' 
    },

    na: {
      value: '',
      url: '',
      tooltip: ''
    },

    k: {
      value: '',
      url: '',
      tooltip: ''
    },

    nh4: {
      value: '',
      url: '',
      tooltip: ''
    },

    ba: {
      value: '',
      url: '',
      tooltip: ''
    },

    ca: {
      value: '',
      url: '',
      tooltip: ''
    },

    mg: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    sr: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    al: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    cr: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    fe2: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    fe3: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    mn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    zn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    ag: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    hg: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    pb: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    sn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    cu: {
      value: '',
      url: '',
      tooltip: ''
    }
  },

  {
    id: 12,

    anion: { 
      value: '<b>NO<sub>3</sub><sup>-</sup></b>', 
      url: '',
      tooltip: '' 
    },

    h: { 
      value: '', 
      url: '',
      tooltip: ''
    },

    li: { 
      value: '', 
      url: '',
      tooltip: '' 
    },

    na: {
      value: '',
      url: '',
      tooltip: ''
    },

    k: {
      value: '',
      url: '',
      tooltip: ''
    },

    nh4: {
      value: '',
      url: '',
      tooltip: ''
    },

    ba: {
      value: '',
      url: '',
      tooltip: ''
    },

    ca: {
      value: '',
      url: '',
      tooltip: ''
    },

    mg: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    sr: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    al: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    cr: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    fe2: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    fe3: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    mn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    zn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    ag: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    hg: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    pb: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    sn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    cu: {
      value: '',
      url: '',
      tooltip: ''
    }
  },

  {
    id: 13,

    anion: { 
      value: '<b>NO<sub>2</sub><sup>-</sup></b>', 
      url: '',
      tooltip: '' 
    },

    h: { 
      value: '', 
      url: '',
      tooltip: ''
    },

    li: { 
      value: '', 
      url: '',
      tooltip: '' 
    },

    na: {
      value: '',
      url: '',
      tooltip: ''
    },

    k: {
      value: '',
      url: '',
      tooltip: ''
    },

    nh4: {
      value: '',
      url: '',
      tooltip: ''
    },

    ba: {
      value: '',
      url: '',
      tooltip: ''
    },

    ca: {
      value: '',
      url: '',
      tooltip: ''
    },

    mg: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    sr: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    al: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    cr: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    fe2: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    fe3: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    mn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    zn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    ag: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    hg: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    pb: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    sn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    cu: {
      value: '',
      url: '',
      tooltip: ''
    }
  },

  {
    id: 14,

    anion: { 
      value: '<b>PO<sub>4</sub><sup>3-</sup></b>', 
      url: '',
      tooltip: '' 
    },

    h: { 
      value: '', 
      url: '',
      tooltip: ''
    },

    li: { 
      value: '', 
      url: '',
      tooltip: '' 
    },

    na: {
      value: '',
      url: '',
      tooltip: ''
    },

    k: {
      value: '',
      url: '',
      tooltip: ''
    },

    nh4: {
      value: '',
      url: '',
      tooltip: ''
    },

    ba: {
      value: '',
      url: '',
      tooltip: ''
    },

    ca: {
      value: '',
      url: '',
      tooltip: ''
    },

    mg: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    sr: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    al: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    cr: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    fe2: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    fe3: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    mn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    zn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    ag: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    hg: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    pb: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    sn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    cu: {
      value: '',
      url: '',
      tooltip: ''
    }
  },

  {
    id: 15,

    anion: { 
      value: '<b>HPO<sub>4</sub><sup>2-</sup></b>', 
      url: '',
      tooltip: '' 
    },

    h: { 
      value: '', 
      url: '',
      tooltip: ''
    },

    li: { 
      value: '', 
      url: '',
      tooltip: '' 
    },

    na: {
      value: '',
      url: '',
      tooltip: ''
    },

    k: {
      value: '',
      url: '',
      tooltip: ''
    },

    nh4: {
      value: '',
      url: '',
      tooltip: ''
    },

    ba: {
      value: '',
      url: '',
      tooltip: ''
    },

    ca: {
      value: '',
      url: '',
      tooltip: ''
    },

    mg: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    sr: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    al: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    cr: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    fe2: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    fe3: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    mn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    zn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    ag: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    hg: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    pb: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    sn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    cu: {
      value: '',
      url: '',
      tooltip: ''
    }
  },

  {
    id: 16,

    anion: { 
      value: '<b>H<sub>2</sub>PO<sub>4</sub><sup>-</sup></b>', 
      url: '',
      tooltip: '' 
    },

    h: { 
      value: '', 
      url: '',
      tooltip: ''
    },

    li: { 
      value: '', 
      url: '',
      tooltip: '' 
    },

    na: {
      value: '',
      url: '',
      tooltip: ''
    },

    k: {
      value: '',
      url: '',
      tooltip: ''
    },

    nh4: {
      value: '',
      url: '',
      tooltip: ''
    },

    ba: {
      value: '',
      url: '',
      tooltip: ''
    },

    ca: {
      value: '',
      url: '',
      tooltip: ''
    },

    mg: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    sr: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    al: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    cr: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    fe2: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    fe3: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    mn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    zn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    ag: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    hg: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    pb: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    sn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    cu: {
      value: '',
      url: '',
      tooltip: ''
    }
  },

  {
    id: 17,

    anion: { 
      value: '<b>CO<sub>3</sub><sup>2-</sup></b>', 
      url: '',
      tooltip: '' 
    },

    h: { 
      value: '', 
      url: '',
      tooltip: ''
    },

    li: { 
      value: '', 
      url: '',
      tooltip: '' 
    },

    na: {
      value: '',
      url: '',
      tooltip: ''
    },

    k: {
      value: '',
      url: '',
      tooltip: ''
    },

    nh4: {
      value: '',
      url: '',
      tooltip: ''
    },

    ba: {
      value: '',
      url: '',
      tooltip: ''
    },

    ca: {
      value: '',
      url: '',
      tooltip: ''
    },

    mg: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    sr: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    al: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    cr: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    fe2: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    fe3: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    mn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    zn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    ag: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    hg: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    pb: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    sn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    cu: {
      value: '',
      url: '',
      tooltip: ''
    }
  },

  {
    id: 18,

    anion: { 
      value: '<b>HCO<sub>3</sub><sup>-</sup></b>', 
      url: '',
      tooltip: '' 
    },

    h: { 
      value: '', 
      url: '',
      tooltip: ''
    },

    li: { 
      value: '', 
      url: '',
      tooltip: '' 
    },

    na: {
      value: '',
      url: '',
      tooltip: ''
    },

    k: {
      value: '',
      url: '',
      tooltip: ''
    },

    nh4: {
      value: '',
      url: '',
      tooltip: ''
    },

    ba: {
      value: '',
      url: '',
      tooltip: ''
    },

    ca: {
      value: '',
      url: '',
      tooltip: ''
    },

    mg: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    sr: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    al: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    cr: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    fe2: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    fe3: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    mn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    zn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    ag: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    hg: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    pb: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    sn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    cu: {
      value: '',
      url: '',
      tooltip: ''
    }
  },

  {
    id: 19,

    anion: { 
      value: '<b>CH<sub>3</sub>COO<sup>-</sup></b>', 
      url: '',
      tooltip: '' 
    },

    h: { 
      value: '', 
      url: '',
      tooltip: ''
    },

    li: { 
      value: '', 
      url: '',
      tooltip: '' 
    },

    na: {
      value: '',
      url: '',
      tooltip: ''
    },

    k: {
      value: '',
      url: '',
      tooltip: ''
    },

    nh4: {
      value: '',
      url: '',
      tooltip: ''
    },

    ba: {
      value: '',
      url: '',
      tooltip: ''
    },

    ca: {
      value: '',
      url: '',
      tooltip: ''
    },

    mg: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    sr: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    al: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    cr: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    fe2: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    fe3: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    mn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    zn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    ag: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    hg: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    pb: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    sn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    cu: {
      value: '',
      url: '',
      tooltip: ''
    }
  },

  {
    id: 20,

    anion: { 
      value: '<b>SiO<sub>3</sub><sup>2-</sup></b>', 
      url: '',
      tooltip: '' 
    },

    h: { 
      value: '', 
      url: '',
      tooltip: ''
    },

    li: { 
      value: '', 
      url: '',
      tooltip: '' 
    },

    na: {
      value: '',
      url: '',
      tooltip: ''
    },

    k: {
      value: '',
      url: '',
      tooltip: ''
    },

    nh4: {
      value: '',
      url: '',
      tooltip: ''
    },

    ba: {
      value: '',
      url: '',
      tooltip: ''
    },

    ca: {
      value: '',
      url: '',
      tooltip: ''
    },

    mg: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    sr: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    al: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    cr: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    fe2: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    fe3: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    mn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    zn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    ag: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    hg: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    pb: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    sn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    cu: {
      value: '',
      url: '',
      tooltip: ''
    }
  },

  {
    id: 21,

    anion: { 
      value: '<b>MnO<sub>4</sub><sup>-</sup></b>', 
      url: '',
      tooltip: '' 
    },

    h: { 
      value: '', 
      url: '',
      tooltip: ''
    },

    li: { 
      value: '', 
      url: '',
      tooltip: '' 
    },

    na: {
      value: '',
      url: '',
      tooltip: ''
    },

    k: {
      value: '',
      url: '',
      tooltip: ''
    },

    nh4: {
      value: '',
      url: '',
      tooltip: ''
    },

    ba: {
      value: '',
      url: '',
      tooltip: ''
    },

    ca: {
      value: '',
      url: '',
      tooltip: ''
    },

    mg: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    sr: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    al: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    cr: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    fe2: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    fe3: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    mn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    zn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    ag: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    hg: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    pb: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    sn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    cu: {
      value: '',
      url: '',
      tooltip: ''
    }
  },

  {
    id: 22,

    anion: { 
      value: '<b>Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup></b>', 
      url: '',
      tooltip: '' 
    },

    h: { 
      value: '', 
      url: '',
      tooltip: ''
    },

    li: { 
      value: '', 
      url: '',
      tooltip: '' 
    },

    na: {
      value: '',
      url: '',
      tooltip: ''
    },

    k: {
      value: '',
      url: '',
      tooltip: ''
    },

    nh4: {
      value: '',
      url: '',
      tooltip: ''
    },

    ba: {
      value: '',
      url: '',
      tooltip: ''
    },

    ca: {
      value: '',
      url: '',
      tooltip: ''
    },

    mg: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    sr: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    al: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    cr: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    fe2: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    fe3: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    mn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    zn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    ag: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    hg: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    pb: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    sn: {
      value: '',
      url: '',
      tooltip: ''
    },
    
    cu: {
      value: '',
      url: '',
      tooltip: ''
    }
  },
]

  const handleCellClick = (url) => {
    if (url) {
      window.open(url, '_blank');
      console.log(`Opened in a new tab: ${url}`);
    }
  };

  return (

    <div className={`app-container ${style}`}>

    <select value={style} onChange={handleStyleChange}>
        <option value="style1">Style 1</option>
        <option value="style2">Style 2</option>
        <option value="style3">Style 3</option>
        <option value="style4">Style 4</option>
        <option value="style5">Style 5</option>
    </select>

      <h1 style={{ textAlign: 'center' }}>
        Solubility Chart
      </h1>

      <table
        border="1"
      >
        <thead>
          <tr>
            <th></th>
            <th>H<sup>+</sup></th>
            <th>Li<sup>+</sup></th>
            <th>Na<sup>+</sup></th>
            <th>K<sup>+</sup></th>
            <th>NH<sub>4</sub><sup>+</sup></th>
            <th>Ba<sup>2+</sup></th>
            <th>Ca<sup>2+</sup></th>
            <th>Mg<sup>2+</sup></th>
            <th>Sr<sup>2+</sup></th>
            <th>Al<sup>3+</sup></th>
            <th>Cr<sup>3+</sup></th>
            <th>Fe<sup>2+</sup></th>
            <th>Fe<sup>3+</sup></th>
            <th>Mn<sup>2+</sup></th>
            <th>Zn<sup>2+</sup></th>
            <th>Ag<sup>+</sup></th>
            <th>Hg<sup>2+</sup></th>
            <th>Pb<sup>2+</sup></th>
            <th>Sn<sup>2+</sup></th>
            <th>Cu<sup>2+</sup></th>
          </tr>
        </thead>

        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              {/* <td>{row.anion.value}</td> */}
              <td dangerouslySetInnerHTML={{ __html: row.anion.value }}></td>
              
              <td className="equal-width clickable" onClick={() => handleCellClick(row.h.url)}>
                <Tooltip text={row.h.tooltip}>
                  <span dangerouslySetInnerHTML={{ __html: row.h.value }}></span>
                </Tooltip>
              </td>
              
              <td className="equal-width clickable" onClick={() => handleCellClick(row.li.url)}>
                <Tooltip text={row.li.tooltip}>
                  <span dangerouslySetInnerHTML={{ __html: row.li.value }}></span>
                </Tooltip>
              </td>

              <td className="equal-width clickable" onClick={() => handleCellClick(row.na.url)}>
                <Tooltip text={row.na.tooltip}>
                  <span dangerouslySetInnerHTML={{ __html: row.na.value }}></span>
                </Tooltip>
              </td>

              <td className="equal-width clickable" onClick={() => handleCellClick(row.k.url)}>
                <Tooltip text={row.k.tooltip}>
                  <span dangerouslySetInnerHTML={{ __html: row.k.value }}></span>
                </Tooltip>
              </td>

              <td className="equal-width clickable" onClick={() => handleCellClick(row.nh4.url)}>
                <Tooltip text={row.nh4.tooltip}>
                  <span dangerouslySetInnerHTML={{ __html: row.nh4.value }}></span>
                </Tooltip>
              </td>

              <td className="equal-width clickable" onClick={() => handleCellClick(row.ba.url)}>
                <Tooltip text={row.ba.tooltip}>
                  <span dangerouslySetInnerHTML={{ __html: row.ba.value }}></span>
                </Tooltip>
              </td>

              <td className="equal-width clickable" onClick={() => handleCellClick(row.ca.url)}>
                <Tooltip text={row.ca.tooltip}>
                  <span dangerouslySetInnerHTML={{ __html: row.ca.value }}></span>
                </Tooltip>
              </td>

              <td className="equal-width clickable" onClick={() => handleCellClick(row.mg.url)}>
                <Tooltip text={row.mg.tooltip}>
                  <span dangerouslySetInnerHTML={{ __html: row.mg.value }}></span>
                </Tooltip>
              </td>

              <td className="equal-width clickable" onClick={() => handleCellClick(row.sr.url)}>
                <Tooltip text={row.sr.tooltip}>
                  <span dangerouslySetInnerHTML={{ __html: row.sr.value }}></span>
                </Tooltip>
              </td>

              <td className="equal-width clickable" onClick={() => handleCellClick(row.al.url)}>
                <Tooltip text={row.al.tooltip}>
                  <span dangerouslySetInnerHTML={{ __html: row.al.value }}></span>
                </Tooltip>
              </td>

              <td className="equal-width clickable" onClick={() => handleCellClick(row.cr.url)}>
                <Tooltip text={row.cr.tooltip}>
                  <span dangerouslySetInnerHTML={{ __html: row.cr.value }}></span>
                </Tooltip>
              </td>

              <td className="equal-width clickable" onClick={() => handleCellClick(row.fe2.url)}>
                <Tooltip text={row.fe2.tooltip}>
                  <span dangerouslySetInnerHTML={{ __html: row.fe2.value }}></span>
                </Tooltip>
              </td>

              <td className="equal-width clickable" onClick={() => handleCellClick(row.fe3.url)}>
                <Tooltip text={row.fe3.tooltip}>
                  <span dangerouslySetInnerHTML={{ __html: row.fe3.value }}></span>
                </Tooltip>
              </td>

              <td className="equal-width clickable" onClick={() => handleCellClick(row.mn.url)}>
                <Tooltip text={row.mn.tooltip}>
                  <span dangerouslySetInnerHTML={{ __html: row.mn.value }}></span>
                </Tooltip>
              </td>

              <td className="equal-width clickable" onClick={() => handleCellClick(row.zn.url)}>
                <Tooltip text={row.zn.tooltip}>
                  <span dangerouslySetInnerHTML={{ __html: row.zn.value }}></span>
                </Tooltip>
              </td>

              <td className="equal-width clickable" onClick={() => handleCellClick(row.ag.url)}>
                <Tooltip text={row.ag.tooltip}>
                  <span dangerouslySetInnerHTML={{ __html: row.ag.value }}></span>
                </Tooltip>
              </td>

              <td className="equal-width clickable" onClick={() => handleCellClick(row.hg.url)}>
                <Tooltip text={row.hg.tooltip}>
                  <span dangerouslySetInnerHTML={{ __html: row.hg.value }}></span>
                </Tooltip>
              </td>

              <td className="equal-width clickable" onClick={() => handleCellClick(row.pb.url)}>
                <Tooltip text={row.pb.tooltip}>
                  <span dangerouslySetInnerHTML={{ __html: row.pb.value }}></span>
                </Tooltip>
              </td>

              <td className="equal-width clickable" onClick={() => handleCellClick(row.sn.url)}>
                <Tooltip text={row.sn.tooltip}>
                  <span dangerouslySetInnerHTML={{ __html: row.sn.value }}></span>
                </Tooltip>
              </td>

              <td className="equal-width clickable" onClick={() => handleCellClick(row.cu.url)}>
                <Tooltip text={row.cu.tooltip}>
                  <span dangerouslySetInnerHTML={{ __html: row.cu.value }}></span>
                </Tooltip>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
}

export default SolubilityDraft
