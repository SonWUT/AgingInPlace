import React /*,{Component}*/ from "react";
import {observer} from 'mobx-react';
import "../sass/Sample.scss"
import { useStores } from '../hooks/use-stores'
// import { _allowStateChangesInsideComputed } from "mobx";

const SamplePage = observer((props) => {
  const { rootStore } = useStores();
  let slug= props.match.params.slug;
  
  return (
    <>
      <div>{slug}</div>
      <div>{rootStore.value}</div>
      <button onClick={() => rootStore.increment()}>++</button>
      <button onClick={() => rootStore.decrement()}>--</button>
    </>
  )
})

export default SamplePage;
