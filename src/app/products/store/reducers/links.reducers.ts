import * as fromLinksAction from '../actions/links.action';
import { Link, LinkState } from '../../links.model';

export const initialState: LinkState = {
    entities: {},
    loaded: false,
    loading: false
};

export const LinkReducer = (
    state = initialState,
    action: fromLinksAction.LinkAction
): LinkState => {
    switch (action.type) {
        case fromLinksAction.LOAD_LINKS:
            return{
                ...state,   
                loading: true
            }
        
        case fromLinksAction.LOAD_LINKS_SUCCESS:
            const links = action.payload;
            const entities = links.reduce(
                (entities:{[id:number]:Link}, link: Link)=>{
                    return { 
                        ...entities,
                        [link._id]: link
                    };
                },
                {
                    ...state.entities,
                })
        
            return{
                ...state,
                loading: false,
                loaded: true,
                entities
            }
            
        case fromLinksAction.LOAD_LINKS_FAIL:
                return{
                    ...state,
                    loading: false,
                    loaded: false
                }      
    
        default:
            return state;
    }
}

export const getLinksLoading = (state: LinkState) => state.loading;
export const getLinksLoaded = (state: LinkState) => state.loaded;
export const getLinksEntities = (state: LinkState): Link[] => state.entities;