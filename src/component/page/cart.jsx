import React from 'react';
import { RootContext } from "../../App.jsx";
import axios from 'axios';

import ItemProduct from '../organism/item-product.jsx'
import Header from '../organism/header.jsx'

function Cart() {
  const [dataCart, setDataCart] = React.useState([]);
  const [dataSearch, setDataSearch] = React.useState([]);
  const [data, setData] = React.useState([]);
  const [search, setSearch] = React.useState('');
  const [isSearch, setIsSearch] = React.useState(false);

  React.useEffect(() => {
    data.map((item) => {
      async function fetchDataProduct() {
        const request = await axios
          .get('https://dummyjson.com/products/'+item.id)
          .then((res) => {
            setDataCart(old => [...old, res.data])
          })
          .catch((er) => console.log("Error: ", er));
        return request;
      }
      fetchDataProduct();
    })
  }, [data]);

  React.useEffect(() => {
    const delaySearch = setTimeout(() => {
        setDataSearch(dataCart.filter(item => item.title === search));
      
        if(search === ""){
          setIsSearch(false);
          setDataSearch([]);
          setSearch("");
        } else {
          setIsSearch(true);
        }
      }, 1000);

      return () => clearTimeout(delaySearch);
  },[search]);

  return(
    <RootContext.Consumer>
        {(value) => {
          setData(value.data);
          return (
            <div style={{ backgroundColor: '#221', flex: 1, width: '100%' }}>
              <Header search={(data) => setSearch(data)} />
              {
        value.data.length === 0 ? <p style={{fontSize: 30, textAlign: 'center' }}>Cart is fvcking empty!<br />Please fill it by adding some fvcking items.</p> :
                !isSearch ?
                <div>
                <div style={{ flex: 1, backgroundColor: '#cbd', width: '100%', display: 'flex', marginBottom: 7, }}>
                  {dataCart.slice(0,4).map((item, index) => {
                    return(
                      <ItemProduct data={item} key={index} state="cart"/>
                    )
                  })}
                </div>
                <div style={{ flex: 1, backgroundColor: '#cbd', width: '100%', display: 'flex', marginBottom: 7, }}>
                  {dataCart.slice(4,8).map((item, index) => {
                    return(
                      <ItemProduct data={item} key={index} state="cart"/>
                    )
                  })}
                </div>
                <div style={{ flex: 1, backgroundColor: '#cbd', width: '100%', display: 'flex', marginBottom: 7, }}>
                  {dataCart.slice(8,12).map((item, index) => {
                    return(
                      <ItemProduct data={item} key={index} state="cart"/>
                    )
                  })}
                </div>
                <div style={{ flex: 1, backgroundColor: '#cbd', width: '100%', display: 'flex', marginBottom: 7, }}>
                  {dataCart.slice(12,16).map((item, index) => {
                    return(
                      <ItemProduct data={item} key={index} state="cart"/>
                    )
                  })}
                </div>
                <div style={{ flex: 1, backgroundColor: '#cbd', width: '100%', display: 'flex', marginBottom: 7, }}>
                  {dataCart.slice(16,20).map((item, index) => {
                    return(
                      <ItemProduct data={item} key={index} state="cart"/>
                    )
                  })}
                </div>
              </div> :
                <div>
                  <div style={{ flex: 1, backgroundColor: '#cbd', width: '100%', display: 'flex', marginBottom: 7, }}>
                    {dataSearch.slice(0,4).map((item, index) => {
                      return(
                        <ItemProduct data={item} key={index} state="cart"/>
                      )
                    })}
                  </div>
                  <div style={{ flex: 1, backgroundColor: '#cbd', width: '100%', display: 'flex', marginBottom: 7, }}>
                    {dataSearch.slice(4,8).map((item, index) => {
                      return(
                        <ItemProduct data={item} key={index} state="cart"/>
                      )
                    })}
                  </div>
                  <div style={{ flex: 1, backgroundColor: '#cbd', width: '100%', display: 'flex', marginBottom: 7, }}>
                    {dataSearch.slice(8,12).map((item, index) => {
                      return(
                        <ItemProduct data={item} key={index} state="cart"/>
                      )
                    })}
                  </div>
                  <div style={{ flex: 1, backgroundColor: '#cbd', width: '100%', display: 'flex', marginBottom: 7, }}>
                    {dataSearch.slice(12,16).map((item, index) => {
                      return(
                        <ItemProduct data={item} key={index} state="cart"/>
                      )
                    })}
                  </div>
                  <div style={{ flex: 1, backgroundColor: '#cbd', width: '100%', display: 'flex', marginBottom: 7, }}>
                  {dataSearch.slice(16,20).map((item, index) => {
                    return(
                      <ItemProduct data={item} key={index} state="cart"/>
                    )
                  })}
                </div>
                </div>
              }
            </div>
            );
        }}
      </RootContext.Consumer>
  )
}

export default Cart;