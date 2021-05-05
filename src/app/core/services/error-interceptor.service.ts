import { HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorInterceptorService {

constructor(private loaderService: LoaderService) { }

intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  return next.handle(req)
    .pipe(
      tap(event => {

        if (event instanceof HttpResponse) {
          this.loaderService.display(false);
        }
      }, error => {
        console.log(error);
        this.loaderService.display(false);
      })
    )
}

}
