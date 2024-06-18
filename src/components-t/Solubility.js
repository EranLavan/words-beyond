import React from 'react'

function Solubility() {

const data = [
  {
    
  }
]

  return (
    <div>
      <table
        border="1"
        style={{ width: '100%', textAlign: 'left' }}>
        <thead>
          <tr>
            <th>H+</th>
            <th>Li+</th>
            <th>K+</th>
            <th>Na+</th>
            {/* <th>NH4+</th>
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
            <th>Cu2+</th> */}
          </tr>
        </thead>

        <tbody>
          {data.map((row) => (
            <tr key={row.anion}>
              <td>{row.anion}</td>
              <td>{row.hydroxide}</td>
              <td>{row.fluoride}</td>
              <td>{row.chloride}</td>
              <td>{row.bromide}</td>
              <td>{row.iodide}</td>
              <td>{row.sulfide}</td>
              <td>{row.hydrosulfide}</td>
              <td>{row.sulfite}</td>
              <td>{row.hydrosulfite}</td>
              <td>{row.sulfate}</td>
              <td>{row.hydrosulfate}</td>
              <td>{row.nitrate}</td>
              <td>{row.nitrite}</td>
              <td>{row.phosphate}</td>
              <td>{row.hydrophosphate}</td>
              <td>{row.dihydrophosphate}</td>
              <td>{row.carbonate}</td>
              <td>{row.hydrocarbonate}</td>
              <td>{row.acetate}</td>
              <td>{row.silicate}</td>
              <td>{row.permanganate}</td>
              <td>{row.dichromate}</td>
              <td>{row.chromate}</td>
              <td>{row.chlorate}</td>
              <td>{row.perchlorate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Solubility
