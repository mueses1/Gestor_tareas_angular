# Gestor de Tareas

Este proyecto es una aplicación web para la gestión de tareas, desarrollada con Angular como practica para aprender Angular. Permite a los usuarios crear, visualizar y eliminar tareas de una lista interactiva. La aplicación está diseñada siguiendo las mejores prácticas de Angular, utilizando una arquitectura basada en componentes y servicios.

## Características Principales

*   **Crear Tareas:** Formulario para añadir nuevas tareas a la lista.
*   **Listar Tareas:** Visualización en tiempo real de todas las tareas pendientes.
*   **Eliminar Tareas:** Funcionalidad para quitar tareas de la lista.
*   **Pipes Personalizados:** Se utiliza un pipe `capitalizar` para dar formato a los títulos de las tareas.
*   **Formato de Fechas Avanzado:** Uso del `DatePipe` integrado de Angular, configurado en español, para mostrar la fecha y hora de creación de cada tarea en un formato legible (ej: "7 de noviembre de 2025, 4:50 p. m.").
*   **Arquitectura Modular:** La lógica está separada en componentes (`ListaTareasComponent`, `CrearTareaComponent`) y servicios (`TareasService`) para una mejor mantenibilidad y escalabilidad.

## Tecnologías Utilizadas

*   **Angular:** Framework principal para el desarrollo de la aplicación.
*   **TypeScript:** Lenguaje de programación para un código más robusto y mantenible.
*   **Vite:** Servidor de desarrollo rápido y moderno.
*   **HTML5 y CSS:** Para la estructura y el estilo de la aplicación.

---

## Comandos del CLI de Angular

Esta sección contiene los comandos originales generados por el CLI de Angular.

### Servidor de Desarrollo

Ejecuta `ng serve` para levantar el servidor de desarrollo. Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias alguno de los archivos fuente.
