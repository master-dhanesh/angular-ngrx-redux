import { Action } from '@ngrx/store';

import { Link } from '../../links.model';

// load links
export const LOAD_LINKS = '[Products] Load Links';
export const LOAD_LINKS_FAIL = '[Products] Load Links Fail';
export const LOAD_LINKS_SUCCESS = '[Products] Load Links Success';

export class LoadLinks implements Action {
    readonly type = LOAD_LINKS;
}

export class LoadLinksFail implements Action {
    readonly type = LOAD_LINKS_FAIL;
    constructor(public payload: any) {}
}

export class LoadLinksSuccess implements Action {
    readonly type = LOAD_LINKS_SUCCESS;
    constructor(public payload: Link[]) {}
}

export type LinkAction = LoadLinks | LoadLinksSuccess | LoadLinksFail;