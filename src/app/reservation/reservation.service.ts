import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private reservations : Reservation[] = [];
  private apiUrl = 'http://localhost:3000';
  // constructor() {
  //   let savedReservations = localStorage.getItem('reservations');
  //   this.reservations = savedReservations ? JSON.parse(savedReservations): [];
  // }

  constructor( private http : HttpClient){}

  //Crud operations
  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.apiUrl + '/reservations');
  }

  getReservation(id : number): Observable<Reservation>{
    return this.http.get<Reservation>(this.apiUrl + '/reservation/' + id);  

  }

  addReservation(reservation : Reservation): Observable<any>{
    return this.http.post(this.apiUrl + '/reservation', reservation);
    // reservation.id = this.reservations.length + 1;
    // this.reservations.push(reservation);
    // localStorage.setItem('reservations', JSON.stringify(this.reservations))
  }
  deleteReservation(id : number): Observable<any>{
    return this.http.delete(this.apiUrl + '/reservation/' + id);

    // let index = this.reservations.findIndex(res => res.id === id);
    // this.reservations.splice(index,1);
    // localStorage.setItem('reservations',JSON.stringify(this.reservations))
  }
  updateReservation(id :number, updatedReservation : Reservation): Observable<any>{
    return this.http.put(this.apiUrl + '/reservation/' + id, updatedReservation);
    // let index = this.reservations.findIndex(res => res.id === updatedReservation.id);
    // this.reservations[index] = updatedReservation;
    // localStorage.setItem('reservations',JSON.stringify(this.reservations))
  }

}
