import { Component , Input} from '@angular/core';

import { freeApiService } from './Services/freeapi.service';
//import { Comments } from './Classes/comments';
import { Content, search } from './Classes/comments';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'app';


  constructor(private _freeApiService: freeApiService){

  }
  listcontent:Content[];
  listsearch:search[];


  ngOnInit(){
    this._freeApiService.getsearch()
    .subscribe
    (
      data=>
      {
        this.listsearch=data.results;
      }
    ) 
    this._freeApiService.getcontents()
    .subscribe
    (
      data=>
      {
        this.listcontent=data.results;
      }
    ) 
  }
}
