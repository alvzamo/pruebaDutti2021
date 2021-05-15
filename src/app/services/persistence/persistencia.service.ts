import { Injectable } from '@angular/core';

@Injectable()
export class PersistenciaService {
  constructor() {}

  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error al guardar localStorage', e);
    }
  }

  get(key: string) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      console.error('Error al obtener datos de localStorage', e);
      return null;
    }
  }
}