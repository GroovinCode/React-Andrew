import {useState, useEffect} from 'react';
import {Item} from './Item';


     
export function Product(props) {   
  const [pdata, setPdata] = useState([]);

  useEffect(() => {
    async function getpdata() {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setPdata(data);
    }
    getpdata();
  }, [pdata.length]);
      
  return (  
    <>
      {pdata.length > 0 ? (
        <Item pdata={pdata}>
        </Item>
      ) : <p>Loading Data....</p>}
    </>      
  )
}