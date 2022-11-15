import { HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoaderService } from './loader.service';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorInterceptorService {

  constructor(private notifiy: NotificationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        tap(event => {
        }, error => {
          console.log(error);
          this.notifiy.displayToastr('error', error.message)
        })
      )
  }

}
