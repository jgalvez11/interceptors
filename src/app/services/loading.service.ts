import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  /**
   * Constructor
   *
   * @param spinner Servicio Spinner
   */
  constructor(private spinner: NgxSpinnerService) {}

  /**
   * Mostrar Spinner
   */
  show() {
    this.spinner.show();
  }

  /**
   * Ocultar Spinner
   */
  hide() {
    this.spinner.hide();
  }
}
