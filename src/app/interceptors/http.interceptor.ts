import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('token');
        if (token) {
            request = request.clone( {
                setHeaders: { Authorization: 'Bearer ' + token }
            });
        } else {
            console.error('No token found in the local storage.');
        }

        if (!request.headers.has('Content-Type')) {
            request = request.clone({
                setHeaders: { 'Content-Type': 'application/json' }
            });
        }

        if (!request.headers.has('Accept')) {
            request = request.clone({
                setHeaders: { Accept: 'application/json' }
            });
        }

        return next.handle(request);
    }
}
