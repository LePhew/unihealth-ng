import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  readonly apiUrl: string = 'http://localhost:3000/api/v1/'

  constructor(private http: HttpClient) { }

  getAll(componentUrl: string, successCallback: any = () => { }) {
    this.http.get(this.apiUrl + componentUrl).subscribe((response: any) => {
      successCallback(response);
    },
      (error) => {
        console.log(error)
      });
  }
  create(componentUrl: string, payload: any, successCallback: any = () => { }) {
    this.http.post(this.apiUrl + componentUrl, payload).subscribe((response: any) => {
      successCallback(response);
    }, (error) => {
      console.log(error);
    });
  }

  delete(componentUrl: string, payload: any, successCallback: any = () => { }) {
    this.http.delete(this.apiUrl + componentUrl, payload).subscribe((response: any) => {
      successCallback(response);
    }, (error) => {
      console.log(error);
    });
  }
}
