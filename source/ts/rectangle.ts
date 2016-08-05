import {Component} from '@angular/core';

@Component({
    selector: '[rect]',
	template: `<svg:rect [attr.fill]="fill" [attr.width]="width" [attr.height]="height" [attr.stroke]="stroke" [attr.opacity]="opacity" />`
})

export class Rectangle {
  width:number = 20;
  height:number = 50;
  opacity:number = 1.0;
  stroke:string = 'black';
  fill:string = 'white';
}

