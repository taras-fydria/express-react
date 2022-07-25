export enum Actions {
    Loading = 'LOADING',
    Loaded = 'LOADED',
    Failed = 'FAILED'
}

export interface IState {
    loading: boolean,
    loaded: boolean,
    failed: boolean,
}

export const initialState: IState = {
    loading: false,
    failed: false,
    loaded: false
}

export type Action = {
    type: Actions,
    payload?: IState
}

export  function loadingReducer (state: IState = initialState, action: Action): IState {
    const type = action.type;
    switch (type) {
        case Actions.Loading:
            return {
                ...state,
                loading: true
            }
        case Actions.Loaded:
            return {
                ...state,
                loaded: true
            }
        case Actions.Failed:
            return {
                ...state,
                failed: true,
            }
    }
}
