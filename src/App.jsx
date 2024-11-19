import { useState } from 'react';
import Heading from './components/Heading';
import Content from './components/Content';
import SelectOption from './components/SelectOption';

const App = () => {
  // Initial state for rows
  const [rows, setRows] = useState([
    { id: 1, itemName: '', rate: 0, quantity: 0, total: 0 },
  ]);

  // Function to handle change in row values (itemName, rate, quantity)
  const handleInputChange = (e, index, field) => {
    const updatedRows = [...rows]; // spread all the data
    updatedRows[index][field] = e.target.value; // try to update field based on filed name

    // If rate or quantity changes, recalculate the total for that row
    if (field === 'rate' || field === 'quantity') {
      updatedRows[index].total =
        updatedRows[index].rate * updatedRows[index].quantity;
    }

    setRows(updatedRows);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(rows);
  };

  // Function to add a new row
  const addRow = () => {
    setRows([
      ...rows,
      { id: rows.length + 1, itemName: '', rate: 0, quantity: 0, total: 0 },
    ]);
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
      <Content
        name='Ansh'
        nameTitle='Mrs'
        relationOf='Modei Sarkar'
        relationTitle='Mrs'
        address='Near Guru Dwara , Kand Sahib , Batala, Gurdaspur'
        rate='7000'
      />

      <form onSubmit={handleSubmit}>
        <table className='w-[80%] mx-auto mt-2 text-justify border border-gray-500'>
          {/* Table Heading Part */}
          <thead className='uppercase bg-gray-400 border border-gray-500 dark:text-white p-2'>
            <tr>
              <th>S.No</th>
              <th>Item Name</th>
              <th>Rate</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>

          {/* Table Body Part */}
          <tbody>
            {rows.map((row, index) => {
              return (
                <tr key={row.id}>
                  <td className='border border-gray-600  '>{index + 1}</td>
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
                      max={9000}
                      min={0}
                      value={row.rate}
                      onChange={(e) => handleInputChange(e, index, 'rate')}
                      className='outline-none p-1 hover:bg-gray-100'
                    />
                  </td>

                  <td className='border border-gray-600  '>
                    <input
                      type='number'
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
                {/* {rows[0].rate + rows[1].rate} */}
                rate
              </td>
              <td className='border border-gray-600   '>
                {/* {rows[0].quantity + rows[1].quantity} */}
                quantity
              </td>
              <td className='border border-gray-600   '>
                {/* {rows[0].total + rows[1].total} */}
                total
              </td>
            </tr>
          </tfoot>
        </table>

        <button className='mt-4 ml-2 p-2 bg-gray-500  hover:bg-gray-700 text-white rounded print:hidden'>
          Submit Certifcate
        </button>
      </form>

      <button
        className='mt-4 p-2 bg-green-600 hover:bg-green-700 text-white rounded print:hidden'
        onClick={addRow}
      >
        Add Row
      </button>
      <button
        className='mt-4 ml-2 p-2 bg-gray-500  hover:bg-gray-700 text-white rounded print:hidden'
        onClick={() => printCertificate()}
      >
        Print Certifcate
      </button>
    </div>
  );
};

export default App;
