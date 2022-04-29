import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
  OnInit,
} from '@angular/core';
import { HttpService } from '../services/http.service';

@Directive({
  selector: '[appSort]',
})
export class SortDirective implements OnInit {
  clicks: number = 0;
  // columns : any;
  defaultData: any;

  @Input() marks: any;
  @Input() column = '';
  @Output() sortedData = new EventEmitter<any>();
  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.http.getData('marks').subscribe((data: any) => {
      debugger;
      console.log();

      this.defaultData = data;
      // this.columns= Object.keys(data[0]);
      console.log(this.defaultData);
    });
  }

  @HostListener('click') sort() {
    if (this.clicks == 3) this.clicks = 1;
    else this.clicks++;

    if (this.clicks == 1) {
      this.marks.sort((x: any, y: any) => {
        if (
          this.column === 'Name' ||
          this.column === 'Class' ||
          this.column === 'Section'
        ) {
          if (x[this.column] < y[this.column]) {
            return -1;
          }
          if (x[this.column] > y[this.column]) {
            return 1;
          }
          return 0;
        } else {
          return x[this.column] - y[this.column];
        }
      });
    } else {
      if (this.clicks == 2) {
        this.marks.sort((x: any, y: any) => {
          if (
            this.column === 'Name' ||
            this.column === 'Class' ||
            this.column === 'Section'
          ) {
            if (y[this.column] < x[this.column]) {
              return -1;
            }
            if (y[this.column] > x[this.column]) {
              return 1;
            }
            return 0;
          } else {
            return y[this.column] - x[this.column];
          }
        });
      } else {
        this.marks = this.defaultData;
      }
    }
    this.sortedData.emit(this.marks);
  }
}
