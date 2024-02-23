import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoFecha'
})
export class formatDatePipe implements PipeTransform {
  transform(fechaString: string): string {
    const opciones = { month: 'long', day: 'numeric', year: 'numeric' } as Intl.DateTimeFormatOptions;
    const fecha = new Date(fechaString);
    return fecha.toLocaleDateString('en-US', opciones).toUpperCase();
  }
}