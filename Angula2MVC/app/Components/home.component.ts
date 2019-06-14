import { Component } from "@angular/core";

@Component({
    template: `<mat-card class="example-card">
  <mat-card-header>
    <div mat-card-avatar class="example-header-image"></div>
    <mat-card-title>Utenti</mat-card-title>
    <mat-card-subtitle>Gestione degli utenti di Tozzi Giancarlo</mat-card-subtitle>
  </mat-card-header>
  <img mat-card-image src="../../images/users.png" alt="Gestione Utenti">
  <mat-card-content>
    <p>
      Questo Card serve per connettere alla gestione degli utenti di questa nuova applicazione scritta
        con c# MVC 5 e Angular 5.
    </p>
  </mat-card-content>
  <mat-card-actions>
    <button mat-button>LIKE</button>
    <button mat-button>SHARE</button>
  </mat-card-actions>
</mat-card>`
})

export class HomeComponent {
}