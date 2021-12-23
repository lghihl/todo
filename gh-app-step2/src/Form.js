export default function Form ( {handleCreate} ) {
    const onCreate = (e, newTodo) => {
        e.preventDefault();
        handleCreate(newTodo);
        e.target[0].value = '';
    }

    return (
        <form className="form" onSubmit={(e) => onCreate(e, e.target[0].value)} >
            <input type="text" />
            <button type="submit" className="create-btn">+</button>
        </form>
    );
}