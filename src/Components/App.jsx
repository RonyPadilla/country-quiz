import '../Style/app.css'
import { useState } from 'react'
import { Win } from './Win'
import { Start } from './Start'

export const App = () => {
    const [valueFromChild, setValueFromChild] = useState(false);

  const handleChildClick = () => {
    setValueFromChild(!valueFromChild);
  };

  console.log(valueFromChild)
    return(<>
    {valueFromChild ? <Start/> : <Win onChildClick={handleChildClick}/>}
    </>)
}
