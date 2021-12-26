export default function Form ( {handleCreate} ) {
    const onCreate = (e) => {
        e.preventDefault();
        const newTodo = e.target[0].value;
        handleCreate(newTodo);
        e.target[0].value = ''; // ??
    }

    return (
        <form className="form" onSubmit={onCreate} >
            <input type="text" />
            <button type="submit" className="create-btn">+</button>
        </form>
    );
}