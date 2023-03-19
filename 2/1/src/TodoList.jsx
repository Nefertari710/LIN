export default function ToDoList({items}){
        return(
            <div>
                <ul>
                    {items && items.length > 0 ? (
                        items.map((item, index)=>(<li key={index}>{item}</li>))
                    ) : (
                        <p>There are no to-do items!</p>
                    )}
                </ul>
            </div>
        )
}
