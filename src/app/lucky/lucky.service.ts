import { Observable, Observer } from 'rxjs';

export class LuckyService {
  private luckyGenerator$: Observable<number>;
  private subscribersCount = 0;

  public getLuckyNumber(): Observable<number> {
    this.subscribersCount++;

    if (!this.luckyGenerator$) {

      this.luckyGenerator$ = new Observable((observer: Observer<number>) => {
        setInterval(() => {
          const num = Math.floor(Math.random() * 10);
          observer.next(num);
        }, 1000);
      });
    }
    return this.luckyGenerator$;
  }

  public getSubscribersCount(): number {
    return this.subscribersCount;
  }
}
