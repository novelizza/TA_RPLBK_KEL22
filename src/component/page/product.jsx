import React from 'react';
import axios from 'axios';

import ItemProduct from '../organism/item-product.jsx'
import Header from '../organism/header.jsx'

function Product() {

  const [page, setPage] = React.useState(0);
  const [data, setData] = React.useState([]);
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    async function fetchDataProduct(url) {
      const request = await axios
        .get(url)
        .then((res) => {
          setData(res.data.products)
        })
        .catch((er) => console.log("Error: ", er));
      return request;
    }
    if (search !== "") {
      const delayRequest = setTimeout(() => {
        fetchDataProduct('https://dummyjson.com/products/search?q=' + search + '&select=thumbnail,title,description,price,id');
      }, 500);

      return () => clearTimeout(delayRequest);
    } else {
      fetchDataProduct('https://dummyjson.com/products?limit=20&skip=' + page + '&select=thumbnail,title,description,price,id');
    }
  }, [page, search]);
  
  return (
    <div style={{ backgroundColor: '#221', flex: 1, width: '100%' }}>
      <Header search={(data) => setSearch(data)} />
      {
        data.length === 0 ? <p style={{fontSize: 30, textAlign: 'center' }}>Loading data</p>:
      <div>
        <div style={{ flex: 1, backgroundColor: '#cbd', width: '100%', display: 'flex', marginBottom: 7, }}>
          {
            data.slice(0, 4).map((item, index) => (
              <ItemProduct data={item} key={index} state="product"/>
            ))
          }
        </div>
        <div style={{ flex: 1, backgroundColor: '#cbd', width: '100%', display: 'flex', marginBottom: 7, }}>
          {
            data.slice(4, 8).map((item, index) => (
              <ItemProduct data={item} key={index} state="product"/>
            ))
          }
        </div>
        <div style={{ flex: 1, backgroundColor: '#cbd', width: '100%', display: 'flex', marginBottom: 7, }}>
          {
            data.slice(8, 12).map((item, index) => (
              <ItemProduct data={item} key={index} state="product"/>
            ))
          }
        </div>
        <div style={{ flex: 1, backgroundColor: '#cbd', width: '100%', display: 'flex', marginBottom: 7, }}>
          {
            data.slice(12, 16).map((item, index) => (
              <ItemProduct data={item} key={index} state="product"/>
            ))
          }
        </div>
        <div style={{ flex: 1, backgroundColor: '#cbd', width: '100%', display: 'flex', marginBottom: 7, }}>
          {
            data.slice(16, 20).map((item, index) => (
              <ItemProduct data={item} key={index} state="product"/>
            ))
          }
        </div>
      </div>
        }
      <div style={{ height: 25, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
        <button style={{ fontSize: 17, backgroundColor: 'transparent', border: 0, color: '#fff', padding: 0, paddingRight: 5, paddingLeft: 5, marginBottom: 6 }} onClick={() => {
          if (page === 0) {
            alert('Ini merupakan page pertama!')
          } else {
            setPage(page - 20)
          }
        }}>Prev</button>
        <button style={{ fontSize: 17, backgroundColor: 'transparent', border: 0, color: '#fff', padding: 0, paddingRight: 5, paddingLeft: 5, marginBottom: 6 }} onClick={() => {
          if (page === 80) {
            alert('Ini merupakan page terakhir!')
          } else {
            setPage(page + 20)
          }
        }}>Next</button>
      </div>
    </div>
  )
}

export default Product;