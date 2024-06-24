import React from 'react'

function Gtable() {

const data = [
  { 
    id: 1,
    name: 'John Doe',
    age: 28
  },

  {
    id: 2,
    name: 'Jane Smith',
    age: 34
  },

  {
    id: 3,
    name: 'Sam Johnson',
    age: 45
  },
];

  const handleCellClick = (row, column) => {
    console.log(`Clicked on ${column}: ${row[column]}`);
  };

  return (
    <div>
      <table
        border="1"
        // style={{ width: '100%', textAlign: 'left'}}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td onClick={() => handleCellClick(row, 'id')}>{row.id}</td>
              <td onClick={() => handleCellClick(row, 'name')}>{row.name}</td>
              <td onClick={() => handleCellClick(row, 'age')}>{row.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  )
}

export default Gtable
