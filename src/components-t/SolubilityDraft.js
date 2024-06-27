import React from 'react';
import Tooltip from './Tooltip';
import './SolubilityDraftStyle.css'

function SolubilityDraft() {

const data = [

// IMPORTANT: we can add specific numbers to the tooltip, not just Soluble/Insoluble

  {
    id: 1,

    anion: { 
      value: 'OH-', 
      url: '',
      tooltip: '' 
    },

    h: { 
      value: '', 
      url: 'https://example.com/water',
      tooltip: 'Water'
    },

    na: { 
      value: 'S', 
      url: 'https://example.com/naoh',
      tooltip: 'Sodium Hydroxide\nHighly soluble ' 
    }
  },

  {
    id: 2,
    anion: {
      value: 'Cl-',
      url: '',
      tooltip: '' 
    },

    h: { 
      value: 'S', 
      url: '',
      tooltip: '' 
    },

    na: { 
      value: 'S', 
      url: '',
      tooltip: '' 
    },
  }
]

  const handleCellClick = (url) => {
    console.log(`Redirecting to ${url}`);
    window.location.href = url;
  };

  return (
    <div>
      <table
        border="1"
      >
        <thead>
          <tr>
            <th>Anion &#8595; // Cation &#8594;</th>
            <th>H<sup>+</sup></th>
            <th>Na<sup>+</sup></th>
          </tr>
        </thead>

        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.anion.value}</td>
              
              <td className="clickable" onClick={() => handleCellClick(row.h.url)}>
                <Tooltip text={row.h.tooltip}>
                  {row.h.value}
                </Tooltip>
              </td>
              
              <td className="clickable" onClick={() => handleCellClick(row.na.url)}>
                <Tooltip text={row.na.tooltip}>
                  {row.na.value}
                </Tooltip>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  )
}

export default SolubilityDraft
