import { HttpEvent, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export function MockAPIInteceptor(
  req: HttpRequest<any>,
  next: any
): Observable<HttpEvent<unknown>> {
  if (req.url === '/projects') {
    return of(
      new HttpResponse({
        status: 200,
        body: [{ name: 'Project 1', id: 1 }],
      })
    );
  } else {
    return next(req);
  }
}
