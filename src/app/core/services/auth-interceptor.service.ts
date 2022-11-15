import { Injectable } from '@angular/core';
import { LoaderService } from './loader.service';
import { HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var token = "test";

    const authRquest = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + token
      }
    })
    return next.handle(authRquest)
      .pipe(
        tap(event => {
          if (event instanceof HttpResponse) {
          }
        },
          (err: any) => {
            if (err instanceof HttpErrorResponse) {
              if (err.status === 401) {
                this.redirectToLogin()
              }
            }
          }
        )
      )
  }

  redirectToLogin() {

  }

}
