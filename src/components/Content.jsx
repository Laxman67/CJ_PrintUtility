import { useContext } from 'react';
import { rowContext } from '../context/rowContext';

const Content = () => {
  const { rate, customerData } = useContext(rowContext);
  const { name, nameTitle, relationOf, relationTitle, address, relationAbrr } =
    customerData;

  return (
    <div className='text-1xl w-[80%] mx-auto mt-7 text-justify'>
      It is certified that{' '}
      <strong>
        {nameTitle}. {name} {relationAbrr} {relationTitle}. {relationOf}
      </strong>
      , Resident of Vill: - {address} has shown me some old gold ornaments.{' '}
      <strong>
        According to Wt.: -152.090 Gms of the ornaments its approximate value is
        1064630 /-(Rs: - Ten Lakh Sixty-Four Thousand Six Hundred and Thirty
        Only) @ {rate}/gm.
      </strong>
      <div className='font-bold text-justify mt-8'>
        Details of the ornaments are under shown:-
      </div>
    </div>
  );
};

export default Content;
