const todoList = () => {
    let tasks = [];

    const addTask = (task) => {
        tasks.push(task);
    };

    const markTaskComplete = (index) => {
        tasks[index].completed = true;
    };

    const getTasksByCondition = (condition) => {
        const today = new Date().toISOString().split("T")[0];
        return tasks.filter(task => condition(task, today));
    };

    const overdueTasks = () => getTasksByCondition((task, today) => task.dueDate < today);
    const tasksDueToday = () => getTasksByCondition((task, today) => task.dueDate === today);
    const tasksDueLater = () => getTasksByCondition((task, today) => task.dueDate > today);

    const formatTaskList = (taskList) => {
        const today = new Date().toISOString().split("T")[0];
        return taskList.map(task => {
            const checkbox = task.completed ? "x" : " ";
            const datePart = task.dueDate === today ? "" : ` ${task.dueDate}`;
            return `[${checkbox}] ${task.title}${datePart}`;
        }).join("\n");
    };

    return { tasks, addTask, markTaskComplete, overdueTasks, tasksDueToday, tasksDueLater, formatTaskList };
};

const formatDate = (date) => date.toISOString().split("T")[0];

const todos = todoList();
const today = formatDate(new Date());
const yesterday = formatDate(new Date(new Date().setDate(new Date().getDate() - 1)));
const tomorrow = formatDate(new Date(new Date().setDate(new Date().getDate() + 1)));

todos.addTask({ title: '501 Assignment', dueDate: today, completed: false });
todos.addTask({ title: 'CRT Session', dueDate: tomorrow, completed: false });
todos.addTask({ title: 'ML Assignment', dueDate: yesterday, completed: false });
todos.addTask({ title: 'Group Project', dueDate: today, completed: true });
todos.addTask({ title: 'Python Lab', dueDate: tomorrow, completed: false });

console.log("My Todo-list\n\n");

console.log("Overdue");
console.log(todos.formatTaskList(todos.overdueTasks()));
console.log("\n\n");

console.log("Due Today");
console.log(todos.formatTaskList(todos.tasksDueToday()));
console.log("\n\n");

console.log("Due Later");
console.log(todos.formatTaskList(todos.tasksDueLater()));
console.log("\n\n");
