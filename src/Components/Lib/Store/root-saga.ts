import { all } from 'redux-saga/effects'
import { PokemonsRootSaga } from '@Pages/Model'

export function* rootSaga() {
	yield all([PokemonsRootSaga()])
}
