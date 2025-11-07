import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface Tarea {
  id: number;
  titulo: string;
  completada: boolean;
  fechaCreacion: Date;
}

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private readonly STORAGE_KEY = 'gestor_tareas';
  private tareas: Tarea[] = [];
  private platformId = inject(PLATFORM_ID);
  private isBrowser: boolean;

  constructor() {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.cargarTareas();
  }

  private cargarTareas(): void {
    if (!this.isBrowser) return;

    const tareasGuardadas = localStorage.getItem(this.STORAGE_KEY);
    if (tareasGuardadas) {
      try {
        const tareasParsed = JSON.parse(tareasGuardadas);
        // Convertir las fechas de string a Date
        this.tareas = tareasParsed.map((tarea: any) => ({
          ...tarea,
          fechaCreacion: new Date(tarea.fechaCreacion)
        }));
      } catch (error) {
        console.error('Error al cargar tareas desde localStorage:', error);
        this.tareas = [];
      }
    }
  }

  private guardarTareas(): void {
    if (!this.isBrowser) return;

    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.tareas));
    } catch (error) {
      console.error('Error al guardar tareas en localStorage:', error);
    }
  }

  getTareas(): Tarea[] {
    return this.tareas;
  }

  agregarTarea(titulo: string): void {
    if (titulo.trim()) {
      const nuevaTarea: Tarea = {
        id: this.tareas.length > 0 ? Math.max(...this.tareas.map(t => t.id)) + 1 : 1,
        titulo: titulo.trim(),
        completada: false,
        fechaCreacion: new Date()
      };
      this.tareas.unshift(nuevaTarea);
      this.guardarTareas();
    }
  }

  eliminarTarea(id: number): void {
    this.tareas = this.tareas.filter(tarea => tarea.id !== id);
    this.guardarTareas();
  }
}

