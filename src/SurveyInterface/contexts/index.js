import React from 'react'
import RootStore from '../Stores/rootStore';

//custom root store dependency injection
//injects the rootstore into the content object to be accessed by all React components
export const storesContext = React.createContext({
    rootStore: new RootStore(null),
})