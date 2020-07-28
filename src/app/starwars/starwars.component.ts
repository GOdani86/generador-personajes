import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import * as constants from '../utils/constants';

const Personaje = [];

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.scss']
})

export class StarwarsComponent implements OnInit {

  public generadorTiradas: boolean;

  // TODO: Crear modelo
  public personaje = {
    tasfondo: '',
    oblicacionInicial: '',
    especie: '',
    profesion: '',
    especializaciones: '',
    //
    pExp: [],
    atrDerivados: [],
    motivacionesIniciales:'',
    equipo:'',
    descripcion:'',
    naveInicial:'',
  }

  public paso1 = true;
  public paso2 = true;
  public paso3 = true;
  public paso4 = true;

  public dosObligaciones: boolean = false;
  public trasfondos: Array<string>;
  public motivaciones: Array<string>;
  public especies: Array<string>;
  public oficios: Array<any>;
  public especializaciones: Array<string>;
  public listaAtributos: Array<string>;
  public resultadoObligacion: string;

  constructor() {
    this.generadorTiradas = false;
  }

  ngOnInit() {
    this.listaAtributos = Object.keys(this.personaje);
    this.trasfondos = constants.Trasfondos;
    this.motivaciones = constants.Motivaciones;
    this.especies = constants.Especies;
    this.oficios = constants.Oficios;

  }

  setOption(evento){

    Personaje.push({key: evento.name, value: evento.value })
    // switch(Personaje.length) {
    //   case (2) :{
    //     this.paso1 = false;
    //     this.paso2 = true;

    //   }
    // }

  }

  defineObligaciones(valor) {
    const obligacion = (parseInt(valor))
    if((obligacion === 0 || obligacion > 96) && !this.dosObligaciones) {
      this.dosObligaciones = true;
    } else {
      this.resultadoObligacion = !this.resultadoObligacion?
        constants.obligaciones[this.switchObligaciones(obligacion)]:
        this.resultadoObligacion + ' y ' + constants.obligaciones[this.switchObligaciones(obligacion)];
    }

  // this.setObligacion(this.resultadoObligacion);
    // Personaje.oblicacionInicial ? Personaje.oblicacionInicial = this.resultadoObligacion : this.personaje.push()
  }

  //TODO: Sugerencia de mejora. Usar Map.
  switchObligaciones(obligacion) {
    switch(true) {
      case (obligacion < 9 ): {
        return 0;
      }
      case ( obligacion < 17 ): {
        return 1;
      }
      case ( obligacion < 25 ): {
        return 2;
      }
      case ( obligacion < 33 ): {
        return 3;
      }
      case ( obligacion < 42 ): {
        return 4;
      }
      case ( obligacion < 49 ): {
        return 5;
      }
      case ( obligacion < 56 ): {
        return 6;
      }
      case ( obligacion < 65 ): {
        return 7;
      }
      case ( obligacion < 73 ): {
        return 8;
      }
      case ( obligacion < 81 ): {
        return 9;
      }
      case ( obligacion < 89 ): {
        return 10;
      }
      default: {
        return 11;
      }
    }
  }

  // setObligacion(resultado) {
  //   Personaje.find(p => {if (p.key === 'obligacion'){

  //     p.value = resultado;
  //     console.log('CASO SI', p);
  //   } else {
  //     Personaje.push({key: 'obligacion', value: resultado})
  //     console.log('CASO NO',);

  //   }});

  // }

  changeOficio(evento) {
    this.especializaciones =  [];
    const oficios = constants.Oficios.find(ofic => ofic.name === evento.value).espec;
    oficios.forEach(ofi => this.especializaciones.push(ofi.value));
  }

  setEspecializacion(evento) {

  }

  onSubmit(starwars) {


  }

  generador() {
    this.generadorTiradas = !this.generadorTiradas;
  }
}
