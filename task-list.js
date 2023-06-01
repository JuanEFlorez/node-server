
const http = require("http");
const port = 3000;
const host = "127.0.0.1";

const taskList = [
  {
    id: 1,
    taskName: "TASK 1",
    taskDescription: "Task 1 Description",
    taskCompleted: false,
  },
  {
    id: 2,
    taskName: "TASK 2",
    taskDescription: "Task 2 Description",
    taskCompleted: true,
  },
  {
    id: 3,
    taskName: "TASK 3",
    taskDescription: "Task 3 Description",
    taskCompleted: false,
  },
];

const server = http.createServer((req, res) => {
  if (req.url === "/tasks" && req.method === "GET") {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.end(JSON.stringify(taskList));
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(port, host, () => {
  console.log("Servidor funcionando en: ", host, port);
});
