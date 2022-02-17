import React from 'react'
import { storesContext } from '../contexts'
//injects the custom object into the react content engine as a hook

export const useStores = () => React.useContext(storesContext)