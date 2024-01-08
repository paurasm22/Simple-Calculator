
import { useState } from "react";
import styles from "./App.module.css";
import Buttoncont from "./Components/Buttoncont";
import Display from "./Components/Display";
function App(){
  const [calval,setcalval]=useState("")
  const onButtonClick=(btn)=>{
    if (btn==='C'){
      setcalval("");

    }else if (btn==='='){
      const result=eval(calval)
      setcalval(result);

    }
    else{
      const newDisplayval=calval+btn;
      setcalval(newDisplayval);
    }

  }


  return(
    <>
    <center>
    <div className={styles.calculator}>
      <Display value={calval}></Display>
      <Buttoncont onButtonClick={onButtonClick}></Buttoncont>
    
   
    </div>

    </center>
    
    
    
    </>
  )
}


export default App;
