import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private spinner$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  public getSpinnerObs(): Observable<boolean> {
    return this.spinner$.asObservable();
  }

  public show() {
    this.spinner$.next(true);
  }

  public hide() {
    this.spinner$.next(false);
  }
}
