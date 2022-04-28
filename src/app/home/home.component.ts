import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieData } from '../movie-data';
import { MovieService } from '../movie.service';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { NgControl } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

//movie=new MovieData();

imgUrl="https://image.tmdb.org/t/p/w200";

movie:any[]=[];
top:any[]=[];

search:any;
searchString:string;

sort:any;
selectedString:string;

yearD:any;
year:string;

genreD:any;
genre:string;

langD:any;
lang:string;

rateGT:string;
rateLT:string;
rateGD:any;
rateLD:any;

i=new MovieData();
id:any;

count:number=1;
loadc:any[]=[];
loadm:any[]=[];

/*res:[
  poster_path:string,
        adult:boolean,
        overview:string,
        release_date:string,
        genre_ids:[],
        id:number,
        original_title:string,
        original_language:string,
        title:string,
        backdrop_path:string,
        popularity:number,
        vote_count:number,
        video:boolean,
        vote_average:number
];*/

  constructor(private _service:MovieService, private _router:Router) {

    this._service.fetchData().subscribe((data)=>{
      this.movie=data.results;
      console.warn(this.movie);
    })

    this._service.topData().subscribe((data)=>{
      this.top=data.results;
      console.warn(this.top);
    })
  }
  
  ngOnInit(): void {
  }

 /* dispMovie(){
    this._service.fetchData(this.movie).subscribe((data)=>{
      //this.movie=data;
      console.warn("data")
    })
  }*/

  searchMovie(){
    this._router.navigate(['/home'])
    console.log(this.searchString);
    this._service.searchData(this.searchString).subscribe((data)=>{
      this.search=data.results;
      console.warn(this.search);
    })
  }

  sortSelect(event:any){
    this.selectedString=event.target.value;
    }

    sortMovie(){
      this._router.navigate(['/home'])
      console.log(this.selectedString);
      this._service.sortData(this.selectedString).subscribe((data)=>{
        this.sort=data.results;
        console.warn(this.sort);
      })
  }

  yearFilter(){
    this._router.navigate(['/home'])
    console.log(this.year);
    this._service.yearData(this.year).subscribe((data)=>{
      this.yearD=data.results;
      console.warn(this.yearD);
    })
  }

  genreFilter(){
    this._router.navigate(['/home'])
    console.log(this.genre);
    this._service.genreData(this.genre).subscribe((data)=>{
      this.genreD=data.results;
      console.warn(this.genreD);
    })
  }

  langSelect(event:any){
    this.lang=event.target.value;
    }

  langFilter(){
    this._router.navigate(['/home'])
    console.log(this.lang);
    this._service.langData(this.lang).subscribe((data)=>{
      this.langD=data.results;
      console.warn(this.langD);
    })
  }
  
  rategtFilter(){
    this._router.navigate(['/home'])
    console.log(this.rateGT);
    this._service.rategtData(this.rateGT).subscribe((data)=>{
      this.rateGD=data.results;
      console.warn(this.rateGD);
    })
  }

  rateltFilter(){
    this._router.navigate(['/home'])
    console.log(this.rateLT);
    this._service.rateltData(this.rateLT).subscribe((data)=>{
      this.rateLD=data.results;
      console.warn(this.rateLD);
    })
  }

  /*Details(mov:any){
    this.i=mov;
    console.warn(this.i);
    this._service.setData(this.i);
  }*/

  Details(id:any){
    this.id=id;
    console.warn(this.id);
    this._service.setData(this.id);
  }

  clickCount(): void{
    this.count++
    console.log(this.count);
    this._service.setPage(this.count);
  }

  loadData(){
    this._service.load().subscribe((data)=>{
      this.loadm=this.loadm.concat(data.results);
      //this.loadm=this.loadm.concat(this.loadc);
      console.warn(data);
    })
  }

  setColor(event:any){
    //alert("change");
    event.target.setAttribute('color','red');
  }
}
