import {inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {OwnerService} from '../../../core/services/owner/owner.service';
import {fetchOwnersActions, fetchOwnersFailed, fetchOwnersSuccess} from './owners.actions'
import {catchError, map, of, switchMap} from 'rxjs';
@Injectable({providedIn: 'root'})
export class OwnersEffects{
private readonly  actions=inject(Actions);
private readonly ownerrsApi=inject(OwnerService);

fetchOwner$=createEffect(()=> this.actions.pipe(
  ofType(fetchOwnersActions),
  switchMap(()=>this.ownerrsApi.getConnectedOwner().pipe(
    map((owner)=>fetchOwnersSuccess({connectedUserName:owner})),
    catchError(()=>of(fetchOwnersFailed()))
  ))
));

}
