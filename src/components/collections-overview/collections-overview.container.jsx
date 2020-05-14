import React from 'react'
import { Query } from 'react-apollo'
import { gql }from 'apollo-boost'

import CollectionsOverview from './collections-overview.component'
import Spinner from '../spinner/spinner.component'

const GET_COLLECTIONS = gql`
{
    collections {
        id
        title
        items {
            id
            name
            price
            imageUrl
        }
    }
}
`
const CollectionsOverviewContainer = ()=>(
    <Query query={GET_COLLECTIONS}>
{
    (x) => {
       const  {loading,data} = x
       if(loading)  return <Spinner></Spinner>
         return <CollectionsOverview colletions={data.colletions}></CollectionsOverview>
    }
}
</Query>
)

export default CollectionsOverviewContainer