const readline = require("readline-sync");

let taskList = [];

const createTask = () => {
  return new Promise((resolve, reject) => {
    const taskName = readline.question(
      "Por favor ingresa el nombre de la nueva tarea: "
    );
    const taskDescription = readline.question(
      "Por favor ingresa la descripcion de la nueva tarea: "
    );

    const newTask = {
      id: taskList.length + 1,
      taskName: taskName,
      taskDescription: taskDescription,
      taskCompleted: false,
    };

    taskList.push(newTask);
    console.log(
      `La tarea "${taskName}" ha sido añadida. El nuevo listado de tareas es:`
    );
    console.log(taskList);

    resolve(taskList);
  });
};

const deleteTask = () => {
  return new Promise((resolve, reject) => {
    console.log("Aquí está el listado actual de tareas:");
    console.log(taskList);

    const taskId = readline.question(
      "Por favor escribe el ID de la tarea que deseas borrar: "
    );
    const taskIndex = taskList.findIndex(
      (task) => task.id === parseInt(taskId)
    );

    if (taskIndex !== -1) {
      taskList.splice(taskIndex, 1);
      console.log(
        "La tarea ha sido borrada con exito. Este es tu nuevo listado de tareas:"
      );
      console.log(taskList);
      resolve(taskList);
    } else {
      console.log("No se encontro ninguna tarea con ese ID.");
      reject(new Error("No se encontró ninguna tarea con ese ID."));
    }
  });
};

const completeTask = () => {
  return new Promise((resolve, reject) => {
    console.log("Aquí esta el listado actual de tareas:");
    console.log(taskList);

    const taskId = readline.question(
      "Por favor escribe el ID de la tarea que deseas marcar como completada: "
    );
    const task = taskList.find((task) => task.id === parseInt(taskId));

    if (task) {
      if (task.taskCompleted) {
        console.log(`La tarea con el ID ${taskId} ya ha sido completada.`);
      } else {
        task.taskCompleted = true;
        console.log(`La tarea con el ID ${taskId} ha sido completada.`);
      }
      console.log("El listado final de tareas es el siguiente:");
      console.log(taskList);
      resolve(taskList);
    } else {
      console.log("No se encontro ninguna tarea con ese ID.");
      reject(new Error("No se encontró ninguna tarea con ese ID."));
    }
  });
};

const main = async () => {
  while (true) {
    console.log("\nBienvenido a tu lista de tareas, escoge que deseas hacer:");
    console.log("1. Crear tarea");
    console.log("2. Completar tarea");
    console.log("3. Borrar tarea");
    console.log("4. Salir");

    const option = readline.question("Escoge una opcion: ");

    switch (option) {
      case "1":
        try {
          await createTask();
        } catch (error) {
          console.log("Error al crear la tarea:", error);
        }
        break;
      case "2":
        try {
          await completeTask();
        } catch (error) {
          console.log("Error al completar la tarea:", error);
        }
        break;
      case "3":
        try {
          await deleteTask();
        } catch (error) {
          console.log("Error al borrar la tarea:", error);
        }
        break;
      case "4":
        console.log("Fin del programa.");
        return;
      default:
        console.log("Opción invalida.");
        break;
    }
  }
};

// main().catch((error) => {
//   console.log("Ocurrió un error en el programa:", error);
// });

// Usando el método then()
main()
  .then(() => {
    console.log("Programa finalizado exitosamente.");
  })
  .catch((error) => {
    console.log("Ocurrió un error en el programa:", error);
  });
