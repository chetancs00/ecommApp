import React, { Component } from 'react';

import SHOP_Data from './shop.data.js'; 

import CollectionPreview from '../../Components/collection-preview/collection-preview.jsx';

export class ShopPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
           collections:SHOP_Data
        }
    }


  render() {
      const {collections} = this.state;
    return (
      <div className='shop-page'>{

      
          collections.map(({id, ...otherCollectionProps}) => (
              <CollectionPreview key={id} {...otherCollectionProps}/>
          ) )
        }
      </div>)
  }
}

export default ShopPage