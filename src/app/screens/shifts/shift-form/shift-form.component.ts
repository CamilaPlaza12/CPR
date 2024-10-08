import { Component, OnInit, Input } from '@angular/core';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-shift-form',
  templateUrl: './shift-form.component.html',
  styleUrl: './shift-form.component.css'
})
export class ShiftFormComponent implements OnInit {
  @Input() psycho: boolean = false; 
  provinciasOptions: string[] = [];
  nombreCompleto: string = '';
  nombre: string = '';
  edad: string = '';
  dni: string = '';
  nacimiento: string = '';
  provincia: string = '';
  localidades: string[] = [];
  localidad: string = '';
  celular: string = '';
  pais: string = '';
  paises: string[] = []
  email: string = '';
  diagnostico: string = '';
  diaNacimiento: string = '';
  mesNacimiento: string = '';
  anioNacimiento: string = '';
  otro: string = '';
  opcion: string = '';
  mostrarModal = false;

  constructor(public addressService: AddressService) {

  }


  ngOnInit() {
    this.paises = this.addressService.getCountries();
    this.getProvincias();

  }
  getProvincias() {
    this.addressService.getProvinciasName().subscribe(
      data => {
        this.provinciasOptions = this.sortStringsAlphabetically(data);
      },
      error => {
        console.error('Error al obtener provincias', error);
      }
    );
  }
  getLocalities(provincia: string) {
    this.localidad = '';
    this.localidades = [];
    this.addressService.getLocalitiesByProvincia(provincia.toLowerCase()).subscribe(
      response => {
        this.localidades = this.sortStringsAlphabetically(response.localidades.map((local: { nombre: any; }) => local.nombre));
      },
      error => {
        console.error('Error al obtener localidades', error);
      }
    )
  }
  sortStringsAlphabetically(strings: string[]): string[] {
    return strings.sort((a, b) => a.localeCompare(b));
  }
  clear() {
    this.provincia = '';
    this.localidad = '';
  }


  onSubmit() {
    if (this.nombre && this.dni && this.celular && this.diaNacimiento &&
      this.mesNacimiento && this.anioNacimiento && this.pais && this.email &&
      (this.pais !== 'Otro' || this.otro) &&
      (this.pais !== 'Argentina' || (this.provincia && this.localidad))) {
      this.mostrarModal = true;
    } else {
      alert('Por favor completa todos los campos.');
    }
  }
}
