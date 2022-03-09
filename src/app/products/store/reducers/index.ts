import { ActionReducerMap, createFeatureSelector, createSelector,  } from '@ngrx/store'

import { Link, LinkState } from '../../links.model';
import * as fromLinks from './links.reducers';

export interface ProductsState{
    links: LinkState
}

export const reducers: ActionReducerMap<ProductsState> ={
    links: fromLinks.LinkReducer
}

export const getLinkState = createFeatureSelector<LinkState>('links');


export const getLinksEntities = createSelector(getLinkState, (state: LinkState) => state.entities);

export const getAllLinks = createSelector(
        getLinksEntities, 
        (entities)=> Object.keys(entities).map(_id => entities[_id] ))

export const getLinksLoaded = createSelector(getLinkState, (state: LinkState) => state.loaded);
export const getLinksLoading = createSelector(getLinkState, (state: LinkState) => state.loading);






