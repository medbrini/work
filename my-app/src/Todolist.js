    import Todo from "./Todo";
    function Todolist ({tod}) {
        return(
            <div>

            {tod.map((tod1,index)=>(
                <Todo key={index} {...tod1}/>
                )
                )}
                </div>
        )
    }
    export default Todolist;