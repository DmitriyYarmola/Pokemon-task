import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './root-saga'
import { rootReducer } from './root-reducer'

const sagaMiddleware = createSagaMiddleware()
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsType<
	T extends { [key: string]: (...args: any[]) => any }
> = ReturnType<PropertiesType<T>>
