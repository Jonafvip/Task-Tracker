# 📝 Task Tracker CLI

[English](#english) | [Español](#español)

---

<a name="english"></a>

## 🇬🇧 English

A simple Command Line Interface (CLI) application to manage your daily tasks, built with **Node.js**. This project allows you to track your pending tasks, update them, and filter them by status.

### 🚀 Features

- **Add tasks:** Create new tasks with a description.
- **List tasks:** View all tasks or filter them by status (`todo`, `in-progress`, `done`).
- **Update tasks:** Change the description of an existing task.
- **Delete tasks:** Remove tasks you no longer need.
- **Change status:** Mark tasks as "in-progress" or "done".
- **Data persistence:** Tasks are automatically saved to a `data.json` file.

### 📋 Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your system.

### 🛠️ Installation

1. Clone the repository or download the files.
2. Open a terminal in the project folder.
3. Navigate to the homework folder:
   ```bash
   cd Task-Tracker-Homework
   ```

### 📖 Usage Guide

To run the application, use the following format in your terminal:
`node practica.js <command> [arguments]`

#### 1. Add a new task

```bash
node practica.js add "Buy milk"
```

#### 2. List tasks

- **All tasks:** `node practica.js list`
- **Filter by status:**
  ```bash
  node practica.js list todo
  node practica.js list in-progress
  node practica.js list done
  ```

#### 3. Update a task

```bash
node practica.js update 1 "Buy milk and bread"
```

#### 4. Delete a task

```bash
node practica.js delete 1
```

#### 5. Mark as In-Progress / Done

```bash
node practica.js mark-in-progress 1
node practica.js mark-done 1
```

---

<a name="español"></a>

## 🇪🇸 Español

Una aplicación sencilla de línea de comandos (CLI) para gestionar tus tareas diarias, construida con **Node.js**. Este proyecto te permite llevar un control de tus pendientes, actualizarlos y filtrarlos según su estado.

### 🚀 Características

- **Añadir tareas:** Crea nuevas tareas con una descripción.
- **Listar tareas:** Visualiza todas tus tareas o fíltralas por estado (`todo`, `in-progress`, `done`).
- **Actualizar tareas:** Cambia la descripción de una tarea existente.
- **Eliminar tareas:** Borra tareas que ya no necesites.
- **Cambiar estado:** Marca tareas como "en progreso" o "terminadas".
- **Persistencia de datos:** Las tareas se guardan automáticamente en un archivo `data.json`.

### 📋 Requisitos Previos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) en tu sistema.

### 🛠️ Instalación

1. Clona el repositorio o descarga los archivos.
2. Abre una terminal en la carpeta del proyecto.
3. Navega hasta la carpeta del ejercicio:
   ```bash
   cd Task-Tracker-Homework
   ```

### 📖 Guía de Uso

Para ejecutar la aplicación, utiliza el siguiente formato en tu terminal:
`node practica.js <comando> [argumentos]`

#### 1. Añadir una nueva tarea

```bash
node practica.js add "Comprar leche"
```

#### 2. Listar tareas

- **Todas las tareas:** `node practica.js list`
- **Filtrar por estado:**
  ```bash
  node practica.js list todo
  node practica.js list in-progress
  node practica.js list done
  ```

#### 3. Actualizar una tarea

```bash
node practica.js update 1 "Comprar leche y pan"
```

#### 4. Eliminar una tarea

```bash
node practica.js delete 1
```

#### 5. Marcar como En Progreso / Terminada

```bash
node practica.js mark-in-progress 1
node practica.js mark-done 1
```

---

## 🗄️ Storage / Almacenamiento

The data is stored in `data.json` inside the `Task-Tracker-Homework` folder.

## ✒️ Author / Autor

- **Jonaf**

- ## Project URL
Puedes encontrar el código fuente y las actualizaciones aquí:
[https://github.com/jonafvip/Task-Tracker](https://github.com/jonafvip/Task-Tracker)
Ejercicio desde: https://roadmap.sh/projects/task-tracker
