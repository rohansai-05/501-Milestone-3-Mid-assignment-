const todoList = () => {
    let all = []; // Closure variable

    const add = (todoItem) => {
        all.push(todoItem);
    };

    const markAsComplete = (index) => {
        all[index].completed = true;
    };

    const overdue = () => {
        const today = new Date().toISOString().split("T")[0];
        return all.filter(todo => todo.dueDate < today);
    };

    const dueToday = () => {
        const today = new Date().toISOString().split("T")[0];
        return all.filter(todo => todo.dueDate === today);
    };

    const dueLater = () => {
        const today = new Date().toISOString().split("T")[0];
        return all.filter(todo => todo.dueDate > today);
    };

    const toDisplayableList = (list) => {
        return list.map(todo => {
            const checkbox = todo.completed ? "x" : " ";
            const dateDisplay = todo.dueDate === new Date().toISOString().split("T")[0] ? "" : ` ${todo.dueDate}`;
            return `[${checkbox}] ${todo.title}${dateDisplay}`;
        }).join("\n");
    };

    return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
};