import { query } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieData } from './movie-data';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  

trendingUrl="https://api.themoviedb.org/3/trending/movie/day?api_key=2e9450648c26cbcea10bcf56c425f486";

topUrl="https://api.themoviedb.org/3/movie/top_rated?api_key=2e9450648c26cbcea10bcf56c425f486";

searchUrl="https://api.themoviedb.org/3/search/movie?api_key=2e9450648c26cbcea10bcf56c425f486&language=en-US&query=";
search='';

sortUrl="https://api.themoviedb.org/3/discover/movie?api_key=2e9450648c26cbcea10bcf56c425f486&language=en-US&sort_by=";
sort='';

yearURL="https://api.themoviedb.org/3/discover/movie?api_key=2e9450648c26cbcea10bcf56c425f486&year=";
yearurl='';

genreURL="https://api.themoviedb.org/3/discover/movie?api_key=2e9450648c26cbcea10bcf56c425f486&with_genres=";
genreurl='';

langURL="https://api.themoviedb.org/3/discover/movie?api_key=2e9450648c26cbcea10bcf56c425f486&language=";
langurl='';

rategURL="https://api.themoviedb.org/3/discover/movie?api_key=2e9450648c26cbcea10bcf56c425f486&vote_average.gte=";
ratelURL="https://api.themoviedb.org/3/discover/movie?api_key=2e9450648c26cbcea10bcf56c425f486&vote_average.lte=";
gturl='';
lturl='';

data=new MovieData();
getdeturl1="https://api.themoviedb.org/3/movie/";
getdeturl2="?api_key=2e9450648c26cbcea10bcf56c425f486";
id:any;
detUrl='';

re1="https://api.themoviedb.org/3/movie/";
re2="/reviews?api_key=2e9450648c26cbcea10bcf56c425f486";
re='';

loadURL="https://api.themoviedb.org/3/trending/all/day?api_key=2e9450648c26cbcea10bcf56c425f486&page=";
loadu='';
page:any;

  constructor(private _http:HttpClient) { }

  public fetchData():Observable<any>{
    return this._http.get<any>(this.trendingUrl);
  }

  public searchData(searchString:any):Observable<any>{
    this.search=this.searchUrl+searchString;
    return this._http.get<any>(this.search);
  }

  public topData():Observable<any> {
    return this._http.get<any>(this.topUrl);
  }

  public sortData(selectedString:any):Observable<any>{
    this.sort=this.sortUrl+selectedString;
    return this._http.get<any>(this.sort)
  }

  public yearData(year:any):Observable<any>{
    this.yearurl=this.yearURL+year;
    return this._http.get<any>(this.yearurl);
  }

  public genreData(genre:any):Observable<any>{
    this.genreurl=this.genreURL+genre;
    return this._http.get<any>(this.genreurl)
  }

  public langData(lang:any):Observable<any>{
    this.langurl=this.langURL+lang;
    return this._http.get<any>(this.langurl)
  }

  public rategtData(rateGT:any):Observable<any>{
    this.gturl=this.rategURL+rateGT;
    return this._http.get<any>(this.gturl)
  }

  public rateltData(rateLT:any):Observable<any>{
    this.lturl=this.ratelURL+rateLT;
    return this._http.get<any>(this.lturl)
  }

  /*setData(i:any){
    this.data=i;
  }
  getData(){
    return this.data;
  }*/
  setData(id:any){
    this.id=id;
  }

  public getData(){
    this.detUrl=this.getdeturl1+this.id+this.getdeturl2;
    return this._http.get<any>(this.detUrl);
  }  

  public revData(id:any):Observable<any>{
    this.re=this.re1+id+this.re2;
    return this._http.get<any>(this.re);
  }

  setPage(count:any){
    this.page=count;
  }

  public load():Observable<any>{
    this.loadu=this.loadURL+this.page;
    return this._http.get<any>(this.loadu);
  }
}
