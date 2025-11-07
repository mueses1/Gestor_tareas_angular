import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { SaludoComponent } from '../saludo/saludo.component';
import { ListaTareasComponent } from '../lista-tareas/lista-tareas.component';
import { CrearTareaComponent } from '../crear-tarea/crear-tarea.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [SaludoComponent, ListaTareasComponent, CrearTareaComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements AfterViewInit {
  @ViewChild(ListaTareasComponent) listaTareasComponent!: ListaTareasComponent;

  ngAfterViewInit(): void {
    // ViewChild está disponible después de que la vista se inicializa
  }

  onTareaAgregada(): void {
    if (this.listaTareasComponent) {
      this.listaTareasComponent.refrescarTareas();
    }
  }
}

