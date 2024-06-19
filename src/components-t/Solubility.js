import React from 'react'

function Solubility() {

const data = [

  {
    id: 1,
    anion: 'OH-',
    h: '',
    li: 'S',
    k: 'S',
    na: 'S'
  },

  {
    id: 2,
    anion: 'F-',
    h: 'S',
    li: 'sS',
    k: 'S',
    na: 'S'
  },

  {
    id: 3,
    anion: 'Cl-',
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
            <th>H+</th>
            <th>Li+</th>
            <th>K+</th>
            <th>Na+</th>
            <th>NH4+</th>
            <th>Ba2+</th>
            <th>Ca2+</th>
            <th>Mg2+</th>
            <th>Sr2+</th>
            <th>Al3+</th>
            <th>Cr3+</th>
            <th>Fe2+</th>
            <th>Fe3+</th>
            <th>Mn2+</th>
            <th>Zn2+</th>
            <th>Ag+</th>
            <th>Hg2+</th>
            <th>Pb2+</th>
            <th>Sn2+</th>
            <th>Cu2+</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Solubility
