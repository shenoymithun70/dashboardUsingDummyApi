import React from 'react'
import './table.styles.css'
import {connect} from 'react-redux'
import {toggleTable} from '../../redux/table/table.actions'
import {selectTableHidden , selectTableItems} from '../../redux/table/table.selector'
import {createStructuredSelector} from 'reselect'


const TablePage = ({employees, headingColumns, title, breakOn = 'medium' , hidden , toggleTable}) => {
  
    const data = employees.map((row, index) => {
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
        <div>
          <button onClick={toggleTable} className={`${hidden ? '' : 'active'} table-container__title`}>
          Employees Data
          </button>
        {hidden ? null : (
          <div className="parentcontainer">
        
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
        )}
        
        </div>
        
      
    );
  }

  const mapStateToProps = createStructuredSelector({
    hidden: selectTableHidden,
    employees: selectTableItems
  });

  

  const mapDispatchToProps = dispatch => ({
    toggleTable: () => dispatch(toggleTable())
  })


export default connect(mapStateToProps , mapDispatchToProps)(TablePage);