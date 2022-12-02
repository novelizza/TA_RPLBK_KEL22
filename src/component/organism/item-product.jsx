import React from 'react';
import axios from 'axios';
import { RootContext } from "../../App.jsx";

import ProductDesc from '../molecule/products-desc.jsx'

function ItemProduct(props) {
    async function fetchDataCart(id, value) {
    const data = {
      userId: 1,
      products: [
        {
          id: id,
          quantity: 1,
        },
      ]
    };
    const request = await axios
      .post('https://dummyjson.com/carts/add', JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((res) => {
        alert('Berhasil menambahkan ke cart!')
        value.isiData(res.data.products[0])
      })
      .catch((er) => console.log("Error: ", er));
    return request;
  }
  return(
    <RootContext.Consumer>
        {(value) => {
          return (
    <div style={{width: '25%', maxWidth: '25%', height: 150, backgroundColor: '#a44', marginLeft: 5, marginRight: 5,justifyContent: 'center', borderRadius: 5, display: 'flex', flexDirection: 'column'}}>
      <div style={{display: 'flex', alignItems: 'center', height: 125}}>
        <img
          src={props.data.thumbnail}
          alt={props.data.title}
          style={{width: 100, height: '85%'}}
        />
        <ProductDesc data={props.data} />
      </div>
      {
        props.state === "cart" ? null :
      <button style={{backgroundColor: '#ff1', border: 0,}} onClick={() => fetchDataCart(props.data.id, value)}>Tambah ke Cart</button>
      }
    </div>
            );
        }}
      </RootContext.Consumer>
  )
}

export default ItemProduct;