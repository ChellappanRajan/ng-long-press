import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  fromEvent,
  Observable,
  Subscription,
  timer,
} from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[longPress]',
})
export class LongPressDirective implements OnInit, OnDestroy {
  _subscription = new Subscription();
  _longPressDuration = new BehaviorSubject<number>(1000);

  @Output() longPress = new EventEmitter();
  @Input() set longPressDuration(time: number) {
    this._longPressDuration.next(time);
  }

  constructor(private element: ElementRef, private zone: NgZone) {}

  ngOnInit(): void {
    this.listenMouseEvents();
  }

  listenMouseEvents(): void {
    const mouseDown$ = this.createEvent('mousedown');
    const mouseUp$ = this.createEvent('mouseup');
    this.zone.runOutsideAngular(() => {
      this._subscription.add(
        combineLatest([this._longPressDuration, mouseDown$])
          .pipe(switchMap(([time]) => timer(time).pipe(takeUntil(mouseUp$))))
          .subscribe(() => {
            this.zone.run(() => {
              this.longPress.emit();
            });
          })
      );
    });
  }

  createEvent(eventName: string): Observable<MouseEvent> {
    return fromEvent<MouseEvent>(this.element.nativeElement, eventName);
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
    this._longPressDuration.complete();
  }
}
