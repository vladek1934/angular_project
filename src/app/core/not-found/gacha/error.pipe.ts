import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'gachaErrorPipe'})
export class gachaErrorPipe implements PipeTransform {
  transform(value: number, chance?: number): number {
    return Math.random() * value / (isNaN(chance) ? 1 : chance);
  }
}