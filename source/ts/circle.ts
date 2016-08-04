import {Component} from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

@Component({
    selector: '[circle]',
	template: `<svg:circle [attr.fill]="fill" [attr.cx]="cx" [attr.cy]="cy" [attr.r]="r" [attr.stroke]="stroke" [attr.opacity]="opacity" />`
})

export class Circle {
  cx:number = 30;
  cy:number = 30;
  r:number = 29;
  opacity:number = 1.0;
  stroke:string = 'black';
  fill:string = 'darkred';
}

bootstrap(Circle)
