import React from 'react'

function SolubilityDraft() {

const data = [

  {
    id: 1,
    anion: 'OH-',
    h: '',
    na: 'S'
  },

  {
    id: 2,
    anion: 'Cl-',
    h: 'S',
    na: 'S'
  }
]

  const handleCellClick = (row, column) => {
    console.log(`Clicked on ${column}: ${row[column]}`);
  };

  return (
    <div>
      <table
        border="1"
      >
        <thead>
          <tr>
            <th>Anion/Cation</th>
            <th>H<sup>+</sup></th>
            <th>Na<sup>+</sup></th>
          </tr>
        </thead>

        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td onClick={() => handleCellClick(row, 'anion')}>{row.anion}</td>
              <td>{row.h}</td>
              <td>{row.na}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  )
}

export default SolubilityDraft
