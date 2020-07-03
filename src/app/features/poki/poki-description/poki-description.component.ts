import {Component, OnDestroy, OnInit} from '@angular/core';
import {Poki} from '../../../apis/Poki';
import {Observable, Subject} from 'rxjs';
import {PokiService} from '../poki-service/poki.service';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-poki-description',
  templateUrl: './poki-description.component.html',
  styleUrls: ['./poki-description.component.css']
})
export class PokiDescriptionComponent implements OnInit, OnDestroy {

  private poki: Poki;

  private _unSub: Subject<boolean> = new Subject();
  private unSub: Observable<boolean> = this._unSub.asObservable();

  constructor(private pokiService: PokiService) {

  }

  ngOnInit(): void {
    console.log('<< poki-stats >> initiated');
    this.poki = this.pokiService.activePoki;
    this.pokiService.pokiSelected.pipe(takeUntil(this.unSub)).subscribe((poki: Poki) => {
      this.poki = poki;
    });
  }

  ngOnDestroy(): void {
    this._unSub.next(true);
    this._unSub.complete();
  }

}
