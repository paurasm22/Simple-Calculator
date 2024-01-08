import styles from "./Buttoncont.module.css"
const Buttoncont=({onButtonClick})=>{
  const buttonNames=["C","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0","."]
  return(
    <div className={styles.butncontainer}>
      {buttonNames.map((btn)=><button className={styles.button} onClick={()=>onButtonClick(btn)}>{btn}</button>)}
    {/* <button className={styles.button}>C</button>
    <button className={styles.button}>C</button>
    <button className={styles.button}>C</button>
    <button className={styles.button}>C</button> */}


  </div>

  )
}
export default Buttoncont;