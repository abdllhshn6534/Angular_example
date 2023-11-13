import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
interface CallResponse{
  urls: {
    regular : string
  }
}
@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) {}

  getPhotos(): Observable<any> {
    return this.http.get<CallResponse>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID biGnJc6nbw032nXVKgnrOY8Hco3Eq3Qk0l5djXpf_y4'
      }
    });
  }
}
