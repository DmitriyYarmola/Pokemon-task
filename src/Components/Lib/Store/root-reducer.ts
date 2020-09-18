import { combineReducers } from 'redux'
import { PokemonsRootReducer } from '@Pages/index'

export const rootReducer = combineReducers({ PokemonsRootReducer })

type RootReducerType = typeof rootReducer

export type AppStateType = ReturnType<RootReducerType>
