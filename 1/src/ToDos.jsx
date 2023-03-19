import styles from './ToDos.module.css';

function ToDos ({todos, changeIsComplete, onTodoStatusChanged}){
    return(
        <div className={styles.container}>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index} className={todo.isComplete ? styles.liComplete : ""}>
                        <input type = "checkbox"  defaultChecked = {todo.isComplete} onChange = {(e) => {changeIsComplete(todo, e.target.checked), onTodoStatusChanged(index, e.target.checked)}}/>
                            {todo.description}
                            {todo.isComplete ? <span>(Done!)</span> : <span></span>}
                    </li>))
                }
            </ul>
        </div>
    )

}
export default ToDos;
