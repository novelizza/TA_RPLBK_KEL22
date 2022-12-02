import React from 'react';

function ProductDesc(props){
  return(
    <div style={{marginLeft: 5, marginRight: 5}}>
          <span style={{fontSize: 20, fontWeight: 'bold'}}>{props.data.title}</span>
          <p style={{fontSize: 12}}>{props.data.description}</p>
        </div>
  )
}

export default ProductDesc;