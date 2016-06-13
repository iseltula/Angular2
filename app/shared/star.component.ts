//Import Component from Angular 2 core
import { Component, OnChanges, Input, Output, EventEmitter } from 'angular2/core';

//Creates the new component
@Component({
    selector: 'ai-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})

//Exports the Star Component
export class StarComponent {
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating *86 /5 ;
    }

    onClick() {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}