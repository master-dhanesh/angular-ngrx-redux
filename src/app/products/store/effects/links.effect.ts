import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators'
import { of } from 'rxjs';

import * as  linkActions from '../actions/links.action';
import { LinkService } from '../../services/link.service';


@Injectable()
export class LinksEffects {
    constructor(
            private actions$: Actions, 
            private linkService: LinkService) {}

    @Effect()
    loadLinks$ = this.actions$.pipe(
        ofType(linkActions.LOAD_LINKS),
        switchMap(() => {
            return this.linkService.fetchProducts().pipe( map( links =>{
                let linkArr = []
                for (const key in links) {
                      linkArr.push({...links[key], _id: key})            
                  }
                  return new linkActions.LoadLinksSuccess(linkArr);
                }))
        }),
        catchError(error => of(new linkActions.LoadLinksFail(error)))
    )

}