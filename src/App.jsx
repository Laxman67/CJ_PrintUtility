import { useContext } from 'react';
import Heading from './components/Heading';
import Content from './components/Content';
import SelectOption from './components/SelectOption';

import { rowContext } from './context/rowContext';

const App = () => {
  const { handleInputChange, rows, rate, addRow ,delRow} = useContext(rowContext);
  console.log(rows);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(rows);
  };

  // Print Form
  const printCertificate = () => {
    window.print();
  };

  return (
    <div className='w-[95%] text-center'>
      {/* Heading */}
      <Heading />



      {/* Content */}
      <Content />

      <form onSubmit={handleSubmit}>
        <table className='w-[80%] mx-auto mt-2 text-justify border border-gray-500'>
          {/* Table Heading Part */}
          <thead className='uppercase bg-gray-400 border border-gray-500 dark:text-white p-2'>
            <tr>
              <th className='border border-gray-600 text-center'>S.No</th>
              <th className='border border-gray-600 text-center'>Item Name</th>
              <th className='border border-gray-600 text-center'>Rate</th>
              <th className='border border-gray-600 text-center'>Quantity</th>
              <th className='border border-gray-600 text-center'>Total</th>
            </tr>
          </thead>

          {/* Table Body Part */}
          <tbody>
            {rows.map((row, index) => {
              return (
                <tr key={row.id}>
                  <td className='border border-gray-600 font-semibold text-center   '>
                    {index + 1}
                  </td>
                  <td className='border border-gray-600  '>
                    <select
                      name='itemName'
                      className='outline-none p-1 hover:bg-gray-100'
                      value={row.itemName}
                      onChange={(e) => handleInputChange(e, index, 'itemName')}
                    >
                      <SelectOption />
                    </select>
                  </td>

                  <td className='border border-gray-600  '>
                    <input
                      type='number'
                      value={rate}
                      min={0}
                      max={rate}
                      onChange={(e) => handleInputChange(e, index, 'rate')}
                      readOnly
                      className='outline-none p-1 hover:bg-gray-100'
                    />
                  </td>

                  <td className='border border-gray-600  '>
                    <input
                      type='number'
                      step='0.001' // Allow three decimal places
                      max={9000}
                      min={0}
                      value={row.quantity}
                      onChange={(e) => handleInputChange(e, index, 'quantity')}
                      className='outline-none p-1 hover:bg-gray-100'
                    />
                  </td>

                  <td className='border border-gray-600  '>
                    <input
                      type='number'
                      max={9000}
                      min={0}
                      value={row.total}
                      onChange={(e) => handleInputChange(e, index, 'total')}
                      className='outline-none p-1 hover:bg-gray-100'
                      readOnly
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr className='uppercase bg-gray-400 border font-bold border-gray-500 dark:text-white p-2'>
              <td className='border border-gray-600   '></td>
              <td className='border border-gray-600   '></td>
              <td className='border border-gray-600   '>
               {rate}
               
              </td>
              <td className='border border-gray-600   '>
              {rows.reduce((acc,curr)=>acc+Number(curr.quantity),0)}
               
              </td>
              <td className='border border-gray-600   '>
                {/* {rows[0].total + rows[1].total} */}
                {rows.reduce((acc,curr)=>acc+curr.total,0)}
               
              </td>
            </tr>
          </tfoot>
        </table>

        <button className='mt-4 ml-2 p-2 bg-gray-500  hover:bg-gray-700 text-white rounded print:hidden'>
          Submit Certifcate
        </button>
        <button
        className='mt-4 ml-2 p-2 bg-gray-500  hover:bg-gray-700 text-white rounded print:hidden'
        onClick={() => printCertificate()}
      >
        Print Certifcate
      </button>
      </form>

      <button
        className='mt-4 p-2 bg-green-600 hover:bg-green-700 text-white rounded print:hidden'
        onClick={addRow}
      >
        Add Row
      </button>
      <button
className={`mt-4 p-2 bg-red-600 hover:bg-red-900 ml-2 text-white rounded print:hidden ${rows && rows.length === 1 ? " hidden" : ""}`}

        onClick={delRow}
        disabled={rows.length===1?true:false}
      >
        Delete Row
      </button>
     
    </div>
  );
};

export default App;
