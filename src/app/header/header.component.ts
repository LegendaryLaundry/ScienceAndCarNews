import { Component, OnInit } from '@angular/core';
import { NewsAPIService } from '../service/news-api.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _service: NewsAPIService) { }

  scienceDisplay:any =[];

  ngOnInit(): void {

    this._service.header().subscribe((result) => {
      console.log(result);
      this.scienceDisplay = result.data;
    })
  }

}
