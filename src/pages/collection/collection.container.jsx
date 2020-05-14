import React from 'react'

import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

import CollectionPage from './collection.component'
import Spinner from '../../components/spinner/spinner.component'
// import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'

// just like a parameter we use variables to set the title dynamically
const GET_COLLECTION_BY_TITLE = gql`
query getCollectionsByTitle($title: String!){
getCollectionsByTitle(title: $title){
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
const CollectionPageContainer = ({ match }) => (
    <Query query={GET_COLLECTION_BY_TITLE} variables={{ title: match.params.collectionId }}>
       {
           (x)=> {
               console.log(x)
             if(x.loading) return <Spinner></Spinner>
             return <CollectionPage collection={x.data.getCollectionsByTitle}></CollectionPage>
           }
       }
    </Query>
)

export default CollectionPageContainer