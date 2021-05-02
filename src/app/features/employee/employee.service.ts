import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends HttpService {


  baseUrl = `${environment.apiUrl}/employees`;

  constructor(public _http: HttpClient) {
    super(_http);
  }


  getAllEmployees(): Observable<any> {
    return this.get(`${this.baseUrl}`)
  }


}
