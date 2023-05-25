import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCpfFormat]'
})
export class CpfFormatDirective {

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInputChange(event: any) {
    // Remove todos os caracteres não numéricos
    let document = event.target.value.replace(/\D/g, '');

    // Verifica se o CPF possui 11 dígitos
    if (document.length === 11) {
      document = document.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }

    // Atualiza o valor do campo de input com o CPF formatado
    event.target.value = document;
  }

}
