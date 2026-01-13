const fs = require("fs");
const path = require("path");
const File_Name = path.join(__dirname, "data.json");

const argumentss = process.argv;
const action = argumentss[2];

const readTask = () => {
    try {
        const content = fs.readFileSync(File_Name, "utf-8");
        return JSON.parse(content);
    } catch {
        return [];
    }
};

const saveTask = (data) => {
    const stringData = JSON.stringify(data, null, 2);
    fs.writeFileSync(File_Name, stringData);
};

if (action === "add") {
    const tasks = readTask();
    const newTask = {
        id: tasks.length > 0 ? Math.max(...tasks.map((t) => t.id)) + 1 : 1,
        description: argumentss[3],
        status: "todo",
        createdAt: new Date().toString(),
        updatedAt: new Date().toString(),
    };
    const description = argumentss[3];

    tasks.push(newTask);
    saveTask(tasks);
    console.log(`Task added successfully ${description}`);
} else if (action === "list") {
    const tasks = readTask();
    const filter = argumentss[3];
    console.log(`----Listing tasks ${filter ? `(${filter})` : "(todas)"}----`);
    tasks.forEach((task) => {
        if (!filter || task.status === filter) {
            console.log(
                `[ID: ${task.id} ${task.description} - Status: ${task.status}]`
            );
        }
    });
    console.log("Show all tasks...");
} else if (action === "delete") {
    const tasks = readTask();
    const idDelete = Number(argumentss[3]);

    const deleteTask = tasks.filter((task) => task.id !== idDelete);
    if (tasks.length === deleteTask.length) {
        console.log(`No task was found with the ID: ${idDelete}`);
    } else {
        saveTask(deleteTask);
        console.log(`Task deleted successfully (ID:${idDelete})`);
    }
} else if (action === "update") {
    const tasks = readTask();
    const idUpdate = Number(argumentss[3]);
    const newDescription = argumentss[4];

    const updateTask = tasks.find((task) => task.id === idUpdate);

    if (updateTask) {
        updateTask.description = newDescription;
        updateTask.updatedAt = new Date().toString();
        saveTask(tasks);
        console.log(`Task ${idUpdate} updated successfully to: ${newDescription}`);
    } else {
        console.log("Task not found");
    }
} else if (action === "mark-in-progress" || action === "mark-done") {
    const tasks = readTask();
    const idUpdate = Number(argumentss[3]);
    const taskToUpdate = tasks.find((t) => t.id === idUpdate);

    if (taskToUpdate) {
        taskToUpdate.status = action === "mark-done" ? "done" : "in-progress";
        taskToUpdate.updatedAt = new Date().toString();
        saveTask(tasks);
        console.log(`Task ${idUpdate} marked as ${taskToUpdate.status}`);
    } else {
        console.log("task not found");
    }
} else {
    console.log("unrecognized command...");
}
