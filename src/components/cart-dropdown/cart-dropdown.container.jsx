import React from 'react'
import { Mutation,Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import CartDropdown from './cart-dropdown.component'

const TOGGLE_CART_HIDEEN = gql`
mutation ToggleCartHidden {
  toggleCartHidden @client
}
`
const GET_CART_ITEMS = gql`
{
    cartItems @client
}`

const CartDropdownContainer = ()=> (
    // double wrap to get access to both mutation and query data
    <Mutation mutation={TOGGLE_CART_HIDEEN}>
        {
            toggleCartHidden => (
                <Query query={GET_CART_ITEMS}>
                    {
                        ({data: {cartItems}})=>(
                            <CartDropdown 
                            cartItems={cartItems} 
                            toggleCartHidden={toggleCartHidden}
                            ></CartDropdown>
                        )
                    }
                </Query>
            )
        }
    </Mutation>
)

export default CartDropdownContainer