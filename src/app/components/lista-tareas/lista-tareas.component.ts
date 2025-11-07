import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TareasService, Tarea } from '../../services/tareas.service';
import { CapitalizarPipe } from '../../pipes/capitalizar.pipe';

@Component({
    selector: 'app-lista-tareas',
    standalone: true,
    imports: [CommonModule, CapitalizarPipe],
    templateUrl: './lista-tareas.component.html',
    styleUrl: './lista-tareas.component.css'
})
export class ListaTareasComponent implements OnInit {
    tareas: Tarea[] = [];

    constructor(private tareasService: TareasService) { }

    ngOnInit(): void {
        this.tareas = this.tareasService.getTareas();
    }

    refrescarTareas(): void {
        this.tareas = this.tareasService.getTareas();
    }

    eliminarTarea(id: number): void {
        this.tareasService.eliminarTarea(id);
        this.tareas = this.tareasService.getTareas();
    }

    formatearFecha(fecha: Date): string {
        const date = new Date(fecha);
        const dia = date.getDate().toString().padStart(2, '0');
        const mes = (date.getMonth() + 1).toString().padStart(2, '0');
        const año = date.getFullYear();
        const horas = date.getHours().toString().padStart(2, '0');
        const minutos = date.getMinutes().toString().padStart(2, '0');
        return `${dia}/${mes}/${año} ${horas}:${minutos}`;
    }
}

