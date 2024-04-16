import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private reservations : Reservation[] = [];

  constructor() {
    let savedReservations = localStorage.getItem('reservations');
    this.reservations = savedReservations ? JSON.parse(savedReservations): [];
  }
  //Crud operations
  getReservations():Reservation[]{
    return this.reservations;
  }

  getReservation(id : number):Reservation | undefined{
    return this.reservations.find(reservation => reservation.id === id)
  }
  addReservation(reservation : Reservation){
    reservation.id = this.reservations.length + 1;
    this.reservations.push(reservation);
    localStorage.setItem('reservations', JSON.stringify(this.reservations))
  }
  deleteReservation(id : number){
    let index = this.reservations.findIndex(res => res.id === id);
    this.reservations.splice(index,1);
    localStorage.setItem('reservations',JSON.stringify(this.reservations))
  }
  updateReservation(id :number, updatedReservation : Reservation){
    let index = this.reservations.findIndex(res => res.id === updatedReservation.id);
    this.reservations[index] = updatedReservation;
    localStorage.setItem('reservations',JSON.stringify(this.reservations))
  }

}
