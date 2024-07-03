import React, { useState } from 'react';
import Tooltip from './Tooltip';
import './style1.css'
import './style2.css'
import './style3.css'
import './style4.css'
import './style5.css'
import './style6.css'

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
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=water&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Water\n<img src="https://content.health.harvard.edu/wp-content/uploads/2023/07/b8a1309a-ba53-48c7-bca3-9c36aab2338a.jpg" alt="Water" width=200 />'
    },

    li: { 
      value: 'S', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lithium+hydroxide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'LiOH\nLithium Hydroxide\nSoluble\n<img src="https://nukem-isotopes.de/wp-content/uploads/2016/10/Lithium-Hydroxid-Isotopes-2.jpg" width=150 />' 
    },

    na: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=sodium+hydroxide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'NaOH\nSodium Hydroxide\nHighly soluble\n<img src="https://media.licdn.com/dms/image/C4E12AQHNTk_DlltKvA/article-cover_image-shrink_720_1280/0/1628426265063?e=1724889600&v=beta&t=ZxbfN4Tgcrkf9or69ndzzkKEY-L0qQTPAKQRayXksq8" width=200 />'
    },

    k: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=potassium+hydroxide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'KOH\nPotassium Hydroxide\nHighly soluble\n<img src="https://blog.agchemigroup.eu/content/images/2021/11/The-Usefulness-of-Potassium-Hydroxide-KOH-PIC-B.jpg" width=200 />'
    },

    nh4: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ammonia+solution&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'NH<sub>3</sub><sup>.</sup>H<sub>2</sub>O\nAmmonia solution\nHighly soluble\n<img src="https://cdn11.bigcommerce.com/s-bbz4nwgpba/images/stencil/960w/attribute_rule_images/398_source_1653983871.jpg" width=120 />'
    },

    ba: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=barium+hydroxide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Ba(OH)<sub>2</sub>\nBarium Hydroxide\nModerately Soluble\n<img src="http://www.restaurarconservar.com/WebRoot/ce_pt/Shops/298256/5967/EE06/D751/B8BB/5739/C0A8/1911/7E98/Barium_hydroxide_octahydrate_.jpg" width=200 />'
    },

    ca: {
      value: 'sS',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=calcium+hydroxide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Ca(OH)<sub>2</sub>\nCalcium Hydroxide\nSlightly Soluble\n<img src="https://sodimate-inc.com/wp-content/uploads/2017/05/calcium-hydroxide-slurry.jpg" width=120 />'
    },

    mg: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=magnesium+hydroxide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Mg(OH)<sub>2</sub>\nMagnesium Hydroxide\nRelatively insoluble\n<img src="https://www.amsfine.com/images/food-products/magnesium-hydroxide-1.jpg" width=200 />'
    },
    
    sr: {
      value: 'sS',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=strontium+hydroxide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Sr(OH)<sub>2</sub>\nStrontium Hydroxide\nSlightly Soluble\n<img src="https://tiimg.tistatic.com/fp/1/001/797/strontium-hydroxide-442.jpg" width=120 />'
    },
    
    al: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=aluminium+hydroxide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Al(OH)<sub>3</sub>\nAluminium Hydroxide\nRelatively insoluble\n<img src="https://media.sciencephoto.com/image/c0438193/800wm/C0438193-Testing_for_Al3_ions.jpg" width=250 />'
    },
    
    cr: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=chromium+hydroxide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Cr(OH)<sub>3</sub>\nChromium Hydroxide\nRelatively insoluble\n<img src="https://media.sciencephoto.com/image/c0436798/800wm/C0436798-Chromium_III_hydroxide_formation.jpg" width=250 />'
    },
    
    fe2: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ferrous+hydroxide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Fe(OH)<sub>2</sub>\nFerrous Hydroxide\nRelatively insoluble\n<img src="https://media.sciencephoto.com/image/c0430484/800wm/C0430484-Iron_II_hydroxide_precipitate.jpg" width=250 />'
    },
    
    fe3: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ferric+hydroxide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Fe(OH)<sub>3</sub>\nFerric Hydroxide\nRelatively insoluble\n<img src="https://media.sciencephoto.com/image/a5000413/800wm/A5000413-Iron_III_hydroxide_precipitate.jpg" width=100 />'
    },
    
    mn: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=manganese+hydroxide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Mn(OH)<sub>2</sub>\nManganese Hydroxide\nRelatively insoluble\n<img src="https://www.sciencesource.com/pix/243/2438782-manganese-ii-hydroxide-precipitate.jpg" width=200 />'
    },
    
    zn: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=zinc+hydroxide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Zn(OH)<sub>2</sub>\nZinc Hydroxide\nRelatively insoluble\n<img src="https://media.sciencephoto.com/image/c0279455/800wm/C0279455-Zinc_Hydroxide_Precipitate.jpg" width=80 />'
    },
    
    ag: {
      value: '–',
      url: '',
      tooltip: 'Very unstable\nDecomposes into silver oxide upon contact with water'
    },
    
    hg: {
      value: '–',
      url: '',
      tooltip: 'Compound does not exist\nIons decompose into oxide upon contact in the solution'
    },
    
    pb: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lead+hydroxide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Pb(OH)<sub>2</sub>\nLead Hydroxide\nRelatively insoluble\n<img src="https://media.sciencephoto.com/image/a5000409/800wm/A5000409-Lead_hydroxide_precipitate.jpg" width=100 />'
    },
    
    sn: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=tin+hydroxide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Sn(OH)<sub>2</sub>\nTin (II) Hydroxide\nRelatively insoluble\n<img src="https://www.public.asu.edu/~jpbirk/qual/qualanal/SN/Sn3a.gif" width=100 />'
    },
    
    cu: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=copper+hydroxide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Cu(OH)<sub>2</sub>\nCopper (II) Hydroxide\nRelatively insoluble\n<img src="https://media.sciencephoto.com/image/a5000411/800wm/A5000411-Copper_hydroxide_precipitate.jpg" width=80 />'
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
      value: 'S', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=hydrofluoric+acid+glass&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'HF\nHydrofluoric Acid\nWeak acid'
    },

    li: { 
      value: 'sS', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lithium+fluoride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'LiF\nLithium Fluoride\nSlightly soluble' 
    },

    na: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=sodium+fluoride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'NaF\nSodium Fluoride\nSoluble'
    },

    k: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=potassium+fluoride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'KF\nPotassium Fluoride\nSoluble'
    },

    nh4: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ammonium+fluoride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'NH<sub>4</sub>F\nAmmonium Fluoride\nSoluble'
    },

    ba: {
      value: 'sS',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=barium+fluoride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'BaF<sub>2</sub>\nBarium Fluoride\nSlightly soluble'
    },

    ca: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=calcium+fluoride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'CaF<sub>2</sub>\nCalcium Fluoride\nRelatively insoluble'
    },

    mg: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=magnesium+fluoride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'MgF<sub>2</sub>\nMagnesium Fluoride\nRelatively insoluble'
    },
    
    sr: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=strontium+fluoride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'SrF<sub>2</sub>\nStrontium Fluoride\nRelatively insoluble'
    },
    
    al: {
      value: 'sS',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=aluminium+fluoride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'AlF<sub>3</sub>\nAluminium Fluoride\nSlightly soluble'
    },
    
    cr: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=chromium+fluoride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'CrF<sub>3</sub>\nChromium Fluoride\nRelatively insoluble'
    },
    
    fe2: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ferrous+fluoride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'FeF<sub>3</sub>\nFerrous Fluoride\nRelatively insoluble'
    },
    
    fe3: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ferric+fluoride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'FeF<sub>3</sub>\nFerric Fluoride\nRelatively insoluble'
    },
    
    mn: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=manganese+fluoride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'MnF<sub>2</sub>\nManganese Fluoride\nSoluble'
    },
    
    zn: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=zinc+fluoride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'ZnF<sub>2</sub>\nZinc Fluoride\nSoluble'
    },
    
    ag: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=silver+fluoride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'AgF\nSilver Fluoride\nSoluble'
    },
    
    hg: {
      value: '–',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=mercury+fluoride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Mercury Fluoride\nDecomposes in water'
    },
    
    pb: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lead+fluoride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'PbF<sub>2</sub>\nLead Fluoride\nRelatively insoluble'
    },
    
    sn: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=tin+fluoride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'SnF<sub>2</sub>\nTin (II) Fluoride\nSoluble'
    },
    
    cu: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=copper+fluoride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'CuF<sub>2</sub>\nCopper (II) Fluoride\nSoluble'
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
      value: 'S', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=hydrochloric+acid&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'HCl\nHydrochloric Acid\nStrong acid'
    },

    li: { 
      value: 'S', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lithium+chloride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'LiCl\nLithium Chloride\nSoluble' 
    },

    na: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=sodium+chloride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'NaCl\nSodium Chloride\nSoluble'
    },

    k: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=potassium+chloride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'KCl\nPotassium Chloride\nSoluble'
    },

    nh4: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ammonium+chloride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'NH<sub>4</sub>Cl\nAmmonium Chloride\nSoluble'
    },

    ba: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=barium+chloride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'BaCl<sub>2</sub>\nBarium Chloride\nSoluble'
    },

    ca: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=calcium+chloride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'CaCl<sub>2</sub>\nCalcium Chloride\nSoluble'
    },

    mg: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=magnesium+chloride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'MgCl<sub>2</sub>\nMagnesium Chloride\nSoluble'
    },
    
    sr: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=strontium+chloride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'SrCl<sub>2</sub>\nStrontium Chloride\nSoluble'
    },
    
    al: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=aluminium+chloride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'AlCl<sub>3</sub>\nAluminium Chloride\nSoluble'
    },
    
    cr: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=chromium+chloride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'CrCl<sub>3</sub>\nChromium (III) Chloride\nSoluble'
    },
    
    fe2: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ferrous+chloride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'FeCl<sub>2</sub>\nFerrous Chloride\nSoluble'
    },
    
    fe3: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ferric+chloride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'FeCl<sub>3</sub>\nFerric Chloride\nSoluble'
    },
    
    mn: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=manganese+chloride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'MnCl<sub>2</sub>\nManganese Chloride\nSoluble'
    },
    
    zn: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=zinc+chloride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'ZnCl<sub>2</sub>\nZinc Chloride\nSoluble'
    },
    
    ag: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=silver+chloride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'AgCl\nSilver Chloride\nRelatively insoluble'
    },
    
    hg: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=mercury+chloride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'HgCl<sub>2</sub>\nMercury (II) Chloride\nSoluble'
    },
    
    pb: {
      value: 'sS',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lead+chloride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'PbCl<sub>2</sub>\nLead Chloride\nSlightly Soluble'
    },
    
    sn: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=tin+chloride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'SnCl<sub>2</sub>\nTin (II) Chloride\nSoluble'
    },
    
    cu: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=copper+chloride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'CuCl<sub>2</sub>\nCopper (II) Chloride\nSoluble'
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
      value: 'S', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=hydrobromic+acid&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'HBr\nHydrobromic Acid\nStrong acid'
    },

    li: { 
      value: 'S', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lithium+bromide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'LiBr\nLithium Bromide\nSoluble' 
    },

    na: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=sodium+bromide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'NaBr\nSodium Bromide\nSoluble'
    },

    k: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=potassium+bromide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'KBr\nPotassium Bromide\nSoluble'
    },

    nh4: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ammonium+bromide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'NH<sub>4</sub>Br\nAmmonium Bromide\nSoluble'
    },

    ba: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=barium+bromide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'BaBr<sub>2</sub>\nBarium Bromide\nSoluble'
    },

    ca: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=calcium+bromide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'CaBr<sub>2</sub>\nCalcium Bromide\nSoluble'
    },

    mg: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=magnesium+bromide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'MgBr<sub>2</sub>\nMagnesium Bromide\nSoluble'
    },
    
    sr: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=strontium+bromide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'SrBr<sub>2</sub>\nStrontium Bromide\nSoluble'
    },
    
    al: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=aluminium+bromide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'AlBr<sub>3</sub>\nAluminium Bromide\nSoluble'
    },
    
    cr: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=chromium+bromide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'CrBr<sub>3</sub>\nChromium (III) Bromide\nSoluble'
    },
    
    fe2: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ferrous+bromide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'FeBr<sub>2</sub>\nFerrous Bromide\nSoluble'
    },
    
    fe3: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ferric+bromide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'FeBr<sub>3</sub>\nFerric Bromide\nSoluble'
    },
    
    mn: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=manganese+bromide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'MnBr<sub>2</sub>\nManganese Bromide\nSoluble'
    },
    
    zn: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=zinc+bromide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'ZnBr<sub>2</sub>\nZinc Bromide\nSoluble'
    },
    
    ag: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=silver+bromide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'AgBr\nSilver Bromide\nRelatively insoluble'
    },
    
    hg: {
      value: 'sS',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=mercury+bromide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'HgBr2\nMercury bromide\nSlightly soluble'
    },
    
    pb: {
      value: 'sS',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lead+bromide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'PbBr2\nLead (II) bromide\nSlightly soluble'
    },
    
    sn: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=tin+bromide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'SnBr<sub>2</sub>\nTin (II) Bromide\nSoluble'
    },
    
    cu: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=copper+bromide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'CuBr<sub>2</sub>\nCopper (II) Bromide\nSoluble'
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
      value: 'S', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=hydroiodic+acid&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'HI\nHydroiodic acid\nStrong acid'
    },

    li: { 
      value: 'S', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lithium+iodide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'LiI\nLithium Iodide\nSoluble' 
    },

    na: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=sodium+iodide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'NaI\nSodium Iodide\nSoluble'
    },

    k: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=potassium+iodide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'KI\nPotassium Iodide\nSoluble'
    },

    nh4: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ammonium+iodide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'NH<sub>4</sub>I\nAmmonium Iodide\nSoluble'
    },

    ba: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=barium+iodide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'BaI<sub>2</sub>\nBarium Iodide\nSoluble'
    },

    ca: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=calcium+iodide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'CaI<sub>2</sub>\nCalcium Iodide\nSoluble'
    },

    mg: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=magnesium+iodide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'MgI<sub>2</sub>\nMagnesium Iodide\nSoluble'
    },
    
    sr: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=strontium+iodide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'SrI<sub>2</sub>\nStrontium Iodide\nSoluble'
    },
    
    al: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=aluminium+iodide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'AlI<sub>3</sub>\nAluminium Iodide\nSoluble'
    },
    
    cr: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=chromium+iodide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'CrI<sub>3</sub>\nChromium (III) Iodide\nSoluble'
    },
    
    fe2: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ferrous+iodide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'FeI<sub>2</sub>\nFerrous Iodide\nSoluble'
    },
    
    fe3: {
      value: '?',
      url: '',
      tooltip: 'Very unstable'
    },
    
    mn: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=manganese+iodide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'MnI<sub>2</sub>\nManganese (II) Iodide\nSoluble'
    },
    
    zn: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=zinc+iodide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'ZnI<sub>2</sub>\nZinc Iodide\nSoluble'
    },
    
    ag: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=silver+iodide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'AgI\nSilver Iodide\nRelatively Insoluble'
    },
    
    hg: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=mercury+iodide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'HgI<sub>2</sub>\nMercury (II) Iodide\nRelatively insoluble'
    },
    
    pb: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lead+iodide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'PbI<sub>2</sub>\nLead Iodide\nRelatively insoluble'
    },
    
    sn: {
      value: 'sS',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=tin+iodide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'SnI<sub>2</sub>\nTin (II) Iodide\nSlightly Soluble'
    },
    
    cu: {
      value: '?',
      url: '',
      tooltip: 'Compound\ndoes not exist'
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
      value: 'S', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=hydrogen+sulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'H<sub>2</sub>S\nHydrogen Sulfide\nWeak acid'
    },

    li: { 
      value: 'S', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lithium+sulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Li<sub>2</sub>S\nLithium Sulfide\nSoluble' 
    },

    na: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=sodium+sulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Na<sub>2</sub>S\nSodium Sulfide\nSoluble'
    },

    k: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=potassium+sulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'K<sub>2</sub>S\nPotassium Sulfide\nSoluble'
    },

    nh4: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ammonium+sulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: '(NH<sub>4</sub>)<sub>2</sub>S\nAmmonium Sulfide\nSoluble'
    },

    ba: {
      value: '–',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=barium+sulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'BaS\nBarium Sulfide\nStrongly hydrolyzed in water'
    },

    ca: {
      value: '–',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=calcium+sulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'CaS\nCalcium Sulfide\nStrongly hydrolyzed in water'
    },

    mg: {
      value: '–',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=magnesium+sulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'MgS\nMagnesium Sulfide\nDecomposes in water'
    },
    
    sr: {
      value: 'sS',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=strontium+sulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'SrS\nStrontium Sulfide\nSlightly soluble'
    },
    
    al: {
      value: '–',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=aluminium+sulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Al<sub>2</sub>S<sub>3</sub>\nAluminium Sulfide\nDecomposes in water'
    },
    
    cr: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=chromium+sulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Cr<sub>2</sub>S<sub>3</sub>\nChromium (III) Sulfide\nRelatively Insoluble'
    },
    
    fe2: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ferrous+sulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'FeS\nFerrous Sulfide\nRelatively Insoluble'
    },
    
    fe3: {
      value: '–',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ferric+sulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Fe<sub>2</sub>S<sub>3</sub>\nFerric Sulfide\nDecomposes in water to FeS'
    },
    
    mn: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=manganese+sulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'MnS\nManganese (II) Sulfide\nRelatively Insoluble'
    },
    
    zn: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=zinc+sulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'ZnS\nZinc Sulfide\nRelatively Insoluble'
    },
    
    ag: {
      value: 'I*',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=silver+sulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Ag<sub>2</sub>S\nSilver Sulfide\nInsoluble (very low K<sub>sp</sub>)'
    },
    
    hg: {
      value: 'I*',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=mercury+sulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'HgS\nMercury Sulfide\nInsoluble (very low K<sub>sp</sub>)'
    },
    
    pb: {
      value: 'I*',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lead+sulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'PbS\nLead Sulfide\nInsoluble (very low K<sub>sp</sub>)'
    },
    
    sn: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=tin+sulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'SnS\nTin Sulfide\nRelatively insoluble'
    },
    
    cu: {
      value: 'I*',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=copper+sulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'CuS\nCopper Sulfide\nInsoluble (very low K<sub>sp</sub>)'
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
      value: 'S', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=hydrogen+sulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'H<sub>2</sub>S\nHydrogen Sulfide\nWeak acid'
    },

    li: { 
      value: 'S', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lithium+hydrosulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'LiHS\nLithium Hydrosulfide\nSoluble' 
    },

    na: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=sodium+hydrosulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'NaHS\nSodium Hydrosulfide\nSoluble'
    },

    k: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=potassium+hydrosulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'KHS\nPotassium Hydrosulfide\nSoluble'
    },

    nh4: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ammonium+hydrosulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'NH<sub>4</sub>HS\nAmmonium Hydrosulfide\nSoluble'
    },

    ba: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=barium+hydrosulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Ba(HS)<sub>2</sub>\nBarium Hydrosulfide\nSoluble'
    },

    ca: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=calcium+hydrosulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Ca(HS)<sub>2</sub>\nCalcium Hydrosulfide\nSoluble'
    },

    mg: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=magnesium+hydrosulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Mg(HS)<sub>2</sub>\nMagnesium Hydrosulfide\nSoluble'
    },
    
    sr: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=strontium+hydrosulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Sr(HS)<sub>2</sub>\nStrontium Hydrosulfide\nSoluble'
    },
    
    al: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    cr: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    fe2: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    fe3: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    mn: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    zn: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    ag: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    hg: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    pb: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    sn: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    cu: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
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
      value: 'S', 
      url: '',
      tooltip: 'H<sub>2</sub>SO<sub>3</sub>\nSulfurous Acid\nWeak acid'
    },

    li: { 
      value: 'S', 
      url: '',
      tooltip: '' 
    },

    na: {
      value: 'S',
      url: '',
      tooltip: ''
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
      value: 'I',
      url: '',
      tooltip: ''
    },

    ca: {
      value: 'I',
      url: '',
      tooltip: ''
    },

    mg: {
      value: 'sS',
      url: '',
      tooltip: ''
    },
    
    sr: {
      value: 'I',
      url: '',
      tooltip: ''
    },
    
    al: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    cr: {
      value: '–',
      url: '',
      tooltip: ''
    },
    
    fe2: {
      value: 'I',
      url: '',
      tooltip: ''
    },
    
    fe3: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    mn: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    zn: {
      value: 'sS',
      url: '',
      tooltip: ''
    },
    
    ag: {
      value: 'I',
      url: '',
      tooltip: ''
    },
    
    hg: {
      value: 'I',
      url: '',
      tooltip: ''
    },
    
    pb: {
      value: 'I',
      url: '',
      tooltip: ''
    },
    
    sn: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    cu: {
      value: '?',
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
      value: 'S', 
      url: '',
      tooltip: ''
    },

    li: { 
      value: '?', 
      url: '',
      tooltip: '' 
    },

    na: {
      value: 'S',
      url: '',
      tooltip: ''
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
      value: 'S',
      url: '',
      tooltip: ''
    },

    mg: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    sr: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    al: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    cr: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    fe2: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    fe3: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    mn: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    zn: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    ag: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    hg: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    pb: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    sn: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    cu: {
      value: '?',
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
      value: 'S', 
      url: '',
      tooltip: ''
    },

    li: { 
      value: 'S', 
      url: '',
      tooltip: '' 
    },

    na: {
      value: 'S',
      url: '',
      tooltip: ''
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
      value: 'I',
      url: '',
      tooltip: ''
    },

    ca: {
      value: 'sS',
      url: '',
      tooltip: ''
    },

    mg: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    sr: {
      value: 'I',
      url: '',
      tooltip: ''
    },
    
    al: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    cr: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    fe2: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    fe3: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    mn: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    zn: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    ag: {
      value: 'sS',
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
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    cu: {
      value: 'S',
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
      value: 'S', 
      url: '',
      tooltip: ''
    },

    li: { 
      value: 'S', 
      url: '',
      tooltip: '' 
    },

    na: {
      value: 'S',
      url: '',
      tooltip: ''
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
      value: '?',
      url: '',
      tooltip: ''
    },

    ca: {
      value: '?',
      url: '',
      tooltip: ''
    },

    mg: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    sr: {
      value: '–',
      url: '',
      tooltip: ''
    },
    
    al: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    cr: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    fe2: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    fe3: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    mn: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    zn: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    ag: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    hg: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    pb: {
      value: 'I',
      url: '',
      tooltip: ''
    },
    
    sn: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    cu: {
      value: '?',
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
      value: 'S', 
      url: '',
      tooltip: ''
    },

    li: { 
      value: 'S', 
      url: '',
      tooltip: '' 
    },

    na: {
      value: 'S',
      url: '',
      tooltip: ''
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
      value: 'S',
      url: '',
      tooltip: ''
    },

    mg: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    sr: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    al: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    cr: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    fe2: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    fe3: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    mn: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    zn: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    ag: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    hg: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    pb: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    sn: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    cu: {
      value: 'S',
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
      value: 'S', 
      url: '',
      tooltip: ''
    },

    li: { 
      value: 'S', 
      url: '',
      tooltip: '' 
    },

    na: {
      value: 'S',
      url: '',
      tooltip: ''
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
      value: 'S',
      url: '',
      tooltip: ''
    },

    mg: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    sr: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    al: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    cr: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    fe2: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    fe3: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    mn: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    zn: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    ag: {
      value: 'sS',
      url: '',
      tooltip: ''
    },
    
    hg: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    pb: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    sn: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    cu: {
      value: '?',
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
      value: 'S', 
      url: '',
      tooltip: ''
    },

    li: { 
      value: 'I', 
      url: '',
      tooltip: '' 
    },

    na: {
      value: 'S',
      url: '',
      tooltip: ''
    },

    k: {
      value: 'S',
      url: '',
      tooltip: ''
    },

    nh4: {
      value: '–',
      url: '',
      tooltip: ''
    },

    ba: {
      value: 'I',
      url: '',
      tooltip: ''
    },

    ca: {
      value: 'I',
      url: '',
      tooltip: ''
    },

    mg: {
      value: 'I',
      url: '',
      tooltip: ''
    },
    
    sr: {
      value: 'I',
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
      value: 'I',
      url: '',
      tooltip: ''
    },
    
    hg: {
      value: 'I',
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
    id: 15,

    anion: { 
      value: '<b>HPO<sub>4</sub><sup>2-</sup></b>', 
      url: '',
      tooltip: '' 
    },

    h: { 
      value: 'S', 
      url: '',
      tooltip: ''
    },

    li: { 
      value: '?', 
      url: '',
      tooltip: '' 
    },

    na: {
      value: 'S',
      url: '',
      tooltip: ''
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
      value: 'I',
      url: '',
      tooltip: ''
    },

    ca: {
      value: 'I',
      url: '',
      tooltip: ''
    },

    mg: {
      value: 'sS',
      url: '',
      tooltip: ''
    },
    
    sr: {
      value: 'I',
      url: '',
      tooltip: ''
    },
    
    al: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    cr: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    fe2: {
      value: 'I',
      url: '',
      tooltip: ''
    },
    
    fe3: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    mn: {
      value: 'I',
      url: '',
      tooltip: ''
    },
    
    zn: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    ag: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    hg: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    pb: {
      value: 'sS',
      url: '',
      tooltip: ''
    },
    
    sn: {
      value: 'I',
      url: '',
      tooltip: ''
    },
    
    cu: {
      value: '?',
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
      value: 'S', 
      url: '',
      tooltip: ''
    },

    li: { 
      value: 'S', 
      url: '',
      tooltip: '' 
    },

    na: {
      value: 'S',
      url: '',
      tooltip: ''
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
      value: 'S',
      url: '',
      tooltip: ''
    },

    mg: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    sr: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    al: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    cr: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    fe2: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    fe3: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    mn: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    zn: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    ag: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    hg: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    pb: {
      value: '–',
      url: '',
      tooltip: ''
    },
    
    sn: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    cu: {
      value: '?',
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
      value: 'S', 
      url: '',
      tooltip: ''
    },

    li: { 
      value: 'S', 
      url: '',
      tooltip: '' 
    },

    na: {
      value: 'S',
      url: '',
      tooltip: ''
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
      value: 'I',
      url: '',
      tooltip: ''
    },

    ca: {
      value: 'I',
      url: '',
      tooltip: ''
    },

    mg: {
      value: 'I',
      url: '',
      tooltip: ''
    },
    
    sr: {
      value: 'I',
      url: '',
      tooltip: ''
    },
    
    al: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    cr: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    fe2: {
      value: 'I',
      url: '',
      tooltip: ''
    },
    
    fe3: {
      value: '–',
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
      value: 'I',
      url: '',
      tooltip: ''
    },
    
    hg: {
      value: 'I',
      url: '',
      tooltip: ''
    },
    
    pb: {
      value: 'I',
      url: '',
      tooltip: ''
    },
    
    sn: {
      value: '?',
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
    id: 18,

    anion: { 
      value: '<b>HCO<sub>3</sub><sup>-</sup></b>', 
      url: '',
      tooltip: '' 
    },

    h: { 
      value: 'S', 
      url: '',
      tooltip: ''
    },

    li: { 
      value: 'S', 
      url: '',
      tooltip: '' 
    },

    na: {
      value: 'S',
      url: '',
      tooltip: ''
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
      value: 'S',
      url: '',
      tooltip: ''
    },

    mg: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    sr: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    al: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    cr: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    fe2: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    fe3: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    mn: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    zn: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    ag: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    hg: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    pb: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    sn: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    cu: {
      value: '?',
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
      value: 'S', 
      url: '',
      tooltip: ''
    },

    li: { 
      value: 'S', 
      url: '',
      tooltip: '' 
    },

    na: {
      value: 'S',
      url: '',
      tooltip: ''
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
      value: 'S',
      url: '',
      tooltip: ''
    },

    mg: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    sr: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    al: {
      value: '–',
      url: '',
      tooltip: ''
    },
    
    cr: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    fe2: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    fe3: {
      value: '–',
      url: '',
      tooltip: ''
    },
    
    mn: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    zn: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    ag: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    hg: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    pb: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    sn: {
      value: '–',
      url: '',
      tooltip: ''
    },
    
    cu: {
      value: 'S',
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
      value: 'I', 
      url: '',
      tooltip: ''
    },

    li: { 
      value: 'I', 
      url: '',
      tooltip: '' 
    },

    na: {
      value: 'S',
      url: '',
      tooltip: ''
    },

    k: {
      value: 'S',
      url: '',
      tooltip: ''
    },

    nh4: {
      value: '?',
      url: '',
      tooltip: ''
    },

    ba: {
      value: 'I',
      url: '',
      tooltip: ''
    },

    ca: {
      value: 'I',
      url: '',
      tooltip: ''
    },

    mg: {
      value: 'I',
      url: '',
      tooltip: ''
    },
    
    sr: {
      value: 'I',
      url: '',
      tooltip: ''
    },
    
    al: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    cr: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    fe2: {
      value: 'I',
      url: '',
      tooltip: ''
    },
    
    fe3: {
      value: '?',
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
      value: '?',
      url: '',
      tooltip: ''
    },
    
    hg: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    pb: {
      value: 'I',
      url: '',
      tooltip: ''
    },
    
    sn: {
      value: '?',
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
    id: 21,

    anion: { 
      value: '<b>MnO<sub>4</sub><sup>-</sup></b>', 
      url: '',
      tooltip: '' 
    },

    h: { 
      value: 'S', 
      url: '',
      tooltip: ''
    },

    li: { 
      value: 'S', 
      url: '',
      tooltip: '' 
    },

    na: {
      value: 'S',
      url: '',
      tooltip: ''
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
      value: 'S',
      url: '',
      tooltip: ''
    },

    mg: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    sr: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    al: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    cr: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    fe2: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    fe3: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    mn: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    zn: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    ag: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    hg: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    pb: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    sn: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    cu: {
      value: '?',
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
      value: 'S', 
      url: '',
      tooltip: ''
    },

    li: { 
      value: 'S', 
      url: '',
      tooltip: '' 
    },

    na: {
      value: 'S',
      url: '',
      tooltip: ''
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
      value: 'sS',
      url: '',
      tooltip: ''
    },

    ca: {
      value: 'S',
      url: '',
      tooltip: ''
    },

    mg: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    sr: {
      value: 'I',
      url: '',
      tooltip: ''
    },
    
    al: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    cr: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    fe2: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    fe3: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    mn: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    zn: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    ag: {
      value: 'I',
      url: '',
      tooltip: ''
    },
    
    hg: {
      value: 'I',
      url: '',
      tooltip: ''
    },
    
    pb: {
      value: 'sS',
      url: '',
      tooltip: ''
    },
    
    sn: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    cu: {
      value: 'S',
      url: '',
      tooltip: ''
    }
  },

  {
    id: 23,

    anion: { 
      value: '<b>CrO<sub>4</sub><sup>2-</sup></b>', 
      url: '',
      tooltip: '' 
    },

    h: { 
      value: 'S', 
      url: '',
      tooltip: ''
    },

    li: { 
      value: 'S', 
      url: '',
      tooltip: '' 
    },

    na: {
      value: 'S',
      url: '',
      tooltip: ''
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
      value: 'I',
      url: '',
      tooltip: ''
    },

    ca: {
      value: 'S',
      url: '',
      tooltip: ''
    },

    mg: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    sr: {
      value: 'I',
      url: '',
      tooltip: ''
    },
    
    al: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    cr: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    fe2: {
      value: '?',
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
      value: 'I',
      url: '',
      tooltip: ''
    },
    
    hg: {
      value: 'I',
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
    id: 24,

    anion: { 
      value: '<b>ClO<sub>4</sub><sup>-</sup></b>', 
      url: '',
      tooltip: '' 
    },

    h: { 
      value: 'S', 
      url: '',
      tooltip: ''
    },

    li: { 
      value: 'S', 
      url: '',
      tooltip: '' 
    },

    na: {
      value: 'S',
      url: '',
      tooltip: ''
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
      value: 'S',
      url: '',
      tooltip: ''
    },

    mg: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    sr: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    al: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    cr: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    fe2: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    fe3: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    mn: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    zn: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    ag: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    hg: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    pb: {
      value: 'S',
      url: '',
      tooltip: ''
    },
    
    sn: {
      value: '?',
      url: '',
      tooltip: ''
    },
    
    cu: {
      value: 'S',
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

    <p>Choose your style:</p>
    <select value={style} onChange={handleStyleChange}>
        <option value="style1">Style 1</option>
        <option value="style2">Style 2</option>
        <option value="style3">Style 3</option>
        <option value="style4">Style 4</option>
        <option value="style5">Style 5</option>
        <option value="style6">Style 6</option>
    </select>

      <h1 style={{ textAlign: 'center' }}>
        Clickable Solubility Chart
      </h1>
      <h3 style={{ textAlign: 'center' }}>(Just click to see the pictures of the substance!)</h3>

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
              <td className="anion-column" dangerouslySetInnerHTML={{ __html: row.anion.value }}></td>
              
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
