import {Component} from '@angular/core';
import {MyComponentComponent} from './my-component.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <p>Hello World!!</p>
        <my-component></my-component>
    `,
    directives: [MyComponentComponent]
})

export class AppComponent {
	title = "This is my title";
}