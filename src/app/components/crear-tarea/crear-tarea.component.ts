import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TareasService } from '../../services/tareas.service';

@Component({
  selector: 'app-crear-tarea',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './crear-tarea.component.html',
  styleUrl: './crear-tarea.component.css'
})
export class CrearTareaComponent {
  nuevaTarea: string = '';

  @Output() tareaAgregada = new EventEmitter<void>();

  constructor(private tareasService: TareasService) {}

  agregarTarea(): void {
    if (this.nuevaTarea.trim()) {
      this.tareasService.agregarTarea(this.nuevaTarea);
      this.nuevaTarea = '';
      this.tareaAgregada.emit();
    }
  }
}

