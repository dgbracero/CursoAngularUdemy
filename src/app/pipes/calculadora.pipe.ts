import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'calculadora'
})

export class CalculadoraPipe implements PipeTransform{
    //dato | calculadora: otroDato
    //param1               param2
    transform(value: any, value_two: any){
        let operaciones = `
            suma: ${value + value_two} 
            resta:  ${value-value_two} 
            Multiplicacion: ${value * value_two} 
            División: ${value/value_two} 
            
        `;

        return operaciones;
    }
}