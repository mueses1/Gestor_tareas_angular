import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fechaPersonalizada',
  standalone: true,
})
export class FechaPersonalizadaPipe implements PipeTransform {

  transform(value: Date | string, formato: 'fecha' | 'hora' = 'fecha'): string {
    if (!value) {
      return '';
    }

    const fecha = typeof value === 'string' ? new Date(value) : value;

    if (formato === 'fecha') {
      // Formato: 7 de noviembre de 2025
      return new Intl.DateTimeFormat('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }).format(fecha);
    }

    if (formato === 'hora') {
      // Formato: 3:50 p. m.
      return new Intl.DateTimeFormat('es-ES', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      }).format(fecha);
    }

    return fecha.toLocaleDateString('es-ES');
  }
}
