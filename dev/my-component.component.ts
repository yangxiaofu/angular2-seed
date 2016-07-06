import {Component} from '@angular/core';

@Component({
	selector: 'my-component',
	template: `
		<h1>My Component</h1>
		Hi I'm <span [style.color]="inputElement.value==='yes' ? 'red' : ''">{{name}}</span><br />
		<span [class.is-awesome]="inputElement.value==='yes'">Hi, what's going with {{name}}</span><br />
		<input type="text" #inputElement (keyup)="0">
		<br /><br />
		<button [disabled]="inputElement.value !== 'yes'">Only enabled if 'yes' was entered</button>
	`,
	styleUrls: ['src/css/mycomponent.css']
})


export class MyComponentComponent{
	name = "Dave";
}