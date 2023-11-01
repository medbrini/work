function Addtask(){
    const handleChange=(e)=>{
let a = e.target.value   
console.log(a) }
    return(
        <div>
            <input onChange={handleChange()} placeHolder='add your task'/>
            <button> add task </button>
        </div>
    )
}
export default Addtask;