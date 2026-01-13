# 📝 Task Tracker CLI

Una aplicación sencilla de línea de comandos (CLI) para gestionar tus tareas diarias, construida con **Node.js**. Este proyecto te permite llevar un control de tus pendientes, actualizarlos y filtrarlos según su estado.

---

## 🚀 Características

- **Añadir tareas:** Crea nuevas tareas con una descripción.
- **Listar tareas:** Visualiza todas tus tareas o fíltralas por estado (`todo`, `in-progress`, `done`).
- **Actualizar tareas:** Cambia la descripción de una tarea existente.
- **Eliminar tareas:** Borra tareas que ya no necesites.
- **Cambiar estado:** Marca tareas como "en progreso" o "terminadas".
- **Persistencia de datos:** Las tareas se guardan automáticamente en un archivo `data.json`.

---

## 📋 Requisitos Previos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) en tu sistema.

---

## 🛠️ Instalación

1. Clona el repositorio o descarga los archivos.
2. Abre una terminal en la carpeta del proyecto.
3. Navega hasta la carpeta donde se encuentra el script:
   ```bash
   cd Task-Tracker-Homework
   ```

---

## 📖 Guía de Uso

Para ejecutar la aplicación, utiliza el siguiente formato en tu terminal:

`node practica.js <comando> [argumentos]`

### 1. Añadir una nueva tarea

```bash
node practica.js add "Comprar leche"
```

### 2. Listar tareas

- **Todas las tareas:**
  ```bash
  node practica.js list
  ```
- **Filtrar por estado (todo, in-progress, done):**
  ```bash
  node practica.js list todo
  node practica.js list in-progress
  node practica.js list done
  ```

### 3. Actualizar una tarea

Necesitarás el ID de la tarea (puedes verlo al listar las tareas).

```bash
node practica.js update 1 "Comprar leche y pan"
```

### 4. Eliminar una tarea

```bash
node practica.js delete 1
```

### 5. Marcar como "En Progreso"

```bash
node practica.js mark-in-progress 1
```

### 6. Marcar como "Terminada"

```bash
node practica.js mark-done 1
```

---

## 🗄️ Almacenamiento

Los datos se almacenan en el archivo `data.json` dentro de la carpeta `Task-Tracker-Homework`. Si el archivo no existe, se creará automáticamente al añadir la primera tarea.

Cada tarea tiene la siguiente estructura:

```json
{
  "id": 1,
  "description": "Ejemplo de tarea",
  "status": "todo",
  "createdAt": "Mon Jan 13 2026...",
  "updatedAt": "Mon Jan 13 2026..."
}
```

---

## ✒️ Autor

- **Jonaf** - _Desarrollo Inicial_
