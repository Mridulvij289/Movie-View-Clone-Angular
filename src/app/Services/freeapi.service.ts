import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Component , Input} from '@angular/core';

@Injectable()
export class freeApiService
{
    @Input() search: String;
    constructor(private httpclient: HttpClient){}
    getsearch(): Observable<any>{
        return this.httpclient.get("https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=search")
    }
    getcontents(): Observable<any>{
        return this.httpclient.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1&results=")
    }
}