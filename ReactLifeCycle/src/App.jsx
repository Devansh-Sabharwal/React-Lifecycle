import React, { useState } from 'react'
import ClassComponent from './components/MountingClassComponent'
import UpdatingClassComponent from './components/UpdatingClassComponent'
import UnmountClassComponent from './components/UnmountClassComponent'

export default function App() {
  const [show,setShow] = useState(true);
  return (
    <div>
      {/* <ClassComponent defaultName="Hello World"/> */}
      {/* <UpdatingClassComponent/> */}
      {show &&<UnmountClassComponent/>}
      <button onClick={()=>{setShow(!show)}}>Toggle Show</button>
    </div>
  )
}