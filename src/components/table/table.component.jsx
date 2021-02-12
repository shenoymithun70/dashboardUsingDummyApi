import React from 'react'
import './table.styles.scss'


const TablePage = ({tableData, headingColumns, title, breakOn = 'medium'}) => {
  
    const data = tableData.map((row, index) => {
      let rowData = [];
      let i = 0;
  
      for(const key in row) {
        rowData.push({
          key: headingColumns[i],
          val: row[key]
        });
        i++;
      }
  
      return <tr key={index}>
        {rowData.map((data, index) => <td key={index} data-heading={data.key}>{data.val}</td>)}
      </tr>
    });
  
    return(
        <div className="parentcontainer">
        {/* <div className="table-container__title">
          <h2>{title}</h2>
        </div> */}
        <table className="table-class">
          <thead>
            <tr>
              {headingColumns.map((col, index) => (
                <th key={index}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data}
          </tbody>
        </table>
        </div>
        
      
    );
  }

export default TablePage;