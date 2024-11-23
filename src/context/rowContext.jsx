import { createContext, useState } from "react";

export const rowContext = createContext();

export const Context = ({ children }) => {
  // Rate of the 22K Jewellery
  const [rate, setRate] = useState(7200);

  // Customer Data
  const [customerData, setCustomerData] = useState({
    name: "Laxman",
    nameTitle: "Mr",
    relationAbrr: "S/O",
    relationOf: "Amarnath",
    relationTitle: "Mr",
    address: "Near Gems School , Batala",
  });



  // Initial state for rows
  const [rows, setRows] = useState([
    { id: 1, itemName: "", rate: 7200, quantity: 0, total: 0 },
  ]);

  // Bil Total
let total = rows.reduce((acc,curr)=>curr.total+0)
const [billTotal, setBillTotal] = useState(total)

  // Function to handle change in row values (itemName, rate, quantity)
  const handleInputChange = (e, index, field) => {
    const updatedRows = [...rows]; // Clone the rows

    updatedRows[index][field] = e.target.value; // Update the field

    // If rate or quantity is updated, recalculate the total
    if (field === "rate" || field === "quantity") {
      updatedRows[index].total =
        updatedRows[index].rate * updatedRows[index].quantity;
    }

    setRows(updatedRows); // Update state
  };

  // Function to add a new row
  const addRow = () => {
    setRows([
      ...rows,
      { id: rows.length + 1, itemName: "", rate, quantity: 0, total: 0 }, // Default rate from state
    ]);
  };

  const delRow = () => {
    setRows(rows.filter((row, index) => index !== rows.length - 1));
  };

  return (
    <rowContext.Provider
      value={{
        rows,
        setRows,
        handleInputChange,
        rate,
        setRate,
        customerData,
        setCustomerData,
        addRow,
        delRow,
        billTotal
      }}
    >
      {children}
    </rowContext.Provider>
  );
};
