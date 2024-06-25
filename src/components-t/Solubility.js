import React from 'react'

function Solubility() {

const data = [

  {
    id: 1,
    anion: 'OH-',
    h: '',
    li: 'S',
    k: 'S',
    na: 'S',
    nh4: 'S',
    ba: 'S',
    ca: 'sS',
    mg: 'I',
    sr: 'sS',
    al: 'I',
    cr: 'I',
    fe2: 'I',
    fe3: 'I',
    mn: 'I',
    zn: 'I',
    ag: '?',
    hg: '?',
    pb: 'I',
    sn: 'I',
    cu: 'I'
  },

  {
    id: 2,
    anion: 'F-',
    h: 'S',
    li: 'sS',
    k: 'S',
    na: 'S',
    nh4: 'S',
    ba: 'sS',
    ca: 'I',
    mg: 'I',
    sr: 'I',
    al: 'sS',
    cr: 'I',
    fe2: 'I',
    fe3: 'I',
    mn: 'S',
    zn: 'S',
    ag: 'S',
    hg: '-',
    pb: 'I',
    sn: 'S',
    cu: 'S'
  },

  {
    id: 3,
    anion: 'Cl-',
    h: 'S',
    li: 'S',
    k: 'S',
    na: 'S'
  },
  
  {
    id: 4,
    anion: 'Br-',
    h: 'S',
    li: 'S',
    k: 'S',
    na: 'S'
  },
  
  {
    id: 5,
    anion: 'I-',
    h: 'S',
    li: 'S',
    k: 'S',
    na: 'S'
  },
  
  {
    id: 6,
    anion: 'S2-',
    h: 'S',
    li: 'S',
    k: 'S',
    na: 'S'
  },
  
  {
    id: 7,
    anion: 'HS-',
    h: 'S',
    li: 'S',
    k: 'S',
    na: 'S'
  },
    
  {
    id: 8,
    anion: 'SO32-',
    h: 'S',
    li: 'S',
    k: 'S',
    na: 'S'
  },
    
  {
    id: 9,
    anion: 'HSO3-',
    h: 'S',
    li: '?',
    k: 'S',
    na: 'S'
  },
    
  {
    id: 10,
    anion: 'SO42-',
    h: 'S',
    li: 'S',
    k: 'S',
    na: 'S'
  },
    
  {
    id: 11,
    anion: 'HSO4-',
    h: 'S',
    li: 'S',
    k: 'S',
    na: 'S'
  },
      
  {
    id: 12,
    anion: 'NO3-',
    h: 'S',
    li: 'S',
    k: 'S',
    na: 'S'
  },
      
  {
    id: 13,
    anion: 'NO2-',
    h: 'S',
    li: 'S',
    k: 'S',
    na: 'S'
  },
      
  {
    id: 14,
    anion: 'PO43-',
    h: 'S',
    li: 'I',
    k: 'S',
    na: 'S'
  },
      
  {
    id: 15,
    anion: 'HPO42-',
    h: 'S',
    li: '?',
    k: 'S',
    na: 'S'
  },
        
  {
    id: 16,
    anion: 'H2PO4-',
    h: 'S',
    li: 'S',
    k: 'S',
    na: 'S'
  },
        
  {
    id: 17,
    anion: 'CO32-',
    h: 'S',
    li: 'S',
    k: 'S',
    na: 'S'
  },
        
  {
    id: 18,
    anion: 'HCO3-',
    h: 'S',
    li: 'S',
    k: 'S',
    na: 'S'
  },
        
  {
    id: 19,
    anion: 'CH3COO-',
    h: 'S',
    li: 'S',
    k: 'S',
    na: 'S'
  },

]

  return (
    <div>
      <table
        border="1"
        style={{ width: '100%', textAlign: 'left' }}>
        <thead>
          <tr>
            <th>Anion &#8595; // Cation &#8594;</th>
            <th>H<sup>+</sup></th>
            <th>Li<sup>+</sup></th>
            <th>K<sup>+</sup></th>
            <th>Na<sup>+</sup></th>
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
              <td>{row.anion}</td>
              <td>{row.h}</td>
              <td>{row.li}</td>
              <td>{row.k}</td>
              <td>{row.na}</td>
              <td>{row.nh4}</td>
              <td>{row.ba}</td>
              <td>{row.ca}</td>
              <td>{row.mg}</td>
              <td>{row.sr}</td>
              <td>{row.al}</td>
              <td>{row.cr}</td>
              <td>{row.fe2}</td>
              <td>{row.fe3}</td>
              <td>{row.mn}</td>
              <td>{row.zn}</td>
              <td>{row.ag}</td>
              <td>{row.hg}</td>
              <td>{row.pb}</td>
              <td>{row.sn}</td>
              <td>{row.cu}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Solubility
