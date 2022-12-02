import React from 'react';

function Header(props){  
  return(
    <div style={{
        backgroundColor: '#a98',
        alignItems: 'center', display: 'flex', flexDirection: 'column'
      }}>
        <h1>TOKO PALUGADA</h1>
        <input type="text" style={{ width: '25%' }} onChange={(e) => {
          props.search(e.target.value);
        }} placeholder="Cari produk disini!" />
        <br />
      </div>
  )
}

export default Header;