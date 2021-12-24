import { Component, OnInit } from '@angular/core';
import { AutomobileAPIService } from '../service/automobile.service';

@Component({
  selector: 'app-automobile',
  templateUrl: './automobile.component.html',
  styleUrls: ['./automobile.component.css']
})
export class AutomobileComponent implements OnInit {

  constructor(private _service: AutomobileAPIService) { }

  automobileDisplay:any =[];

  ngOnInit(): void {
    this._service.header().subscribe((result) => {
      console.log(result);
      this.automobileDisplay = result.data;
       });
  }

}


