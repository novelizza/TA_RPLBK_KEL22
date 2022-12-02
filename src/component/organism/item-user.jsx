import React from 'react';

import ProductDesc from '../molecule/products-desc.jsx'

function ItemUser(props){
  const [newData, setNewData] = React.useState({
    title: props.data.firstName+" "+props.data.maidenName+" "+props.data.lastName,
    description: props.data.address.address+", "+props.data.address.city+", "+props.data.address.state
  })

  return(
    <div style={{width: '23.85%', height: 150, backgroundColor: '#a44', marginLeft: 5, alignItems: 'center', borderRadius: 5, display: 'flex', flexDirection: 'row', paddingLeft: 5, paddingRight: 5}}>
      <img
          src={props.data.image}
          alt={props.data.firstName}
          style={{width: 90, height: '85%'}}
        />
      <ProductDesc data={newData} />
    </div>
  )
}

export default ItemUser;