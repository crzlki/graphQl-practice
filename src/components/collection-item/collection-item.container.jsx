import React from 'react'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'
import CollectionItem from './collection-item.component'


const ADD_ITEM_TO_CART = gql`
mutation AddItemToCart($item: item!) {
  addItemToCart(item: $item) @client
}
`
const CollectionItemContainer = (props)=>{
  console.log(props)
  return(
    <Mutation mutation={ADD_ITEM_TO_CART}>
       {  
           addItemToCart =>    
       <CollectionItem 
      {...props} 
      // This is a shorthand way so we dont have to pass the variables prop then grab the item
      // pass the proxy wrapper function 
      addItem={ item =>addItemToCart({variables: { item }}) }
      ></CollectionItem>
      
       }
    </Mutation>
)
}
export default CollectionItemContainer