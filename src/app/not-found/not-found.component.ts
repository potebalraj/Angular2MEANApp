import { Component } from '@angular/core';

@Component({
    template: `
    <div class="jumbotron text-center">
    <h2>404 - Page Not Found</h2>
    <p>Please click this link to nevigate to <a routerLink="/home">Home</a></p>
    </div>
`
})

export class NotFoundComponent { }