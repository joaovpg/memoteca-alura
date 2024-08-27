import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pensamento } from './pensamento';

@Injectable({
  providedIn: 'root',
})
export class PensamentoService {
  private readonly API = 'http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) {}

  listar(): Observable<Pensamento[]> {
    return this.http.get<Pensamento[]>(this.API);
  }

  criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API, pensamento);
  }

  editar(pensamento: Pensamento): Observable<Pensamento> {
    const url = `${this.API}/${pensamento.id}`;
    return this.http.put<Pensamento>(url, pensamento);
  }

  excluir(idPensamento: number | string): Observable<Pensamento> {
    const url = `${this.API}/${idPensamento}`;
    return this.http.delete<Pensamento>(url);
  }

  buscarPorId(idPensamento: number | string): Observable<Pensamento> {
    const url = `${this.API}/${idPensamento}`;
    return this.http.get<Pensamento>(url);
  }
}
