import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { MovieData } from '../movie-data';
import { empty } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

mov=new MovieData();
imgUrl="https://image.tmdb.org/t/p/w300";
rData:any[];
rev:any;

currentRate=0;
  constructor(private _service:MovieService) { }

  ngOnInit(): void {
    this._service.getData().subscribe((data)=>{
      this.mov=data;
      console.warn(data);
    });
  }

  getRev(){
    this._service.revData(this.mov.id).subscribe((data)=>{
      this.rData=data.results;
      console.warn(this.rData);
    })
  }

  subRev(rev:any){
    this.rev=rev;
    alert("Review submitted successfully");
    this.rev='';
  }
}
