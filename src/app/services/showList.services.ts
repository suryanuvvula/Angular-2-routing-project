import {Component} from '@angular/core';
import {Injectable} from '@angular/core';
import {Jsonp} from '@angular/http';

@Injectable()

export class ShowListService {
    constructor(private jsonp :Jsonp){}
}