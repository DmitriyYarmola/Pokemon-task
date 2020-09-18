import { all, call, put, takeEvery } from 'redux-saga/effects'
import { getPokemonInfo, getPokemonTypes, getPokemons } from '@API/rest'
import { actions } from './actions'
import * as types from './types'

interface PokemonsPayloadType {
	type: string
	payload: { count: number }
}
function* getPokemonsSaga({ payload }: PokemonsPayloadType) {
	const { count } = payload
	yield put(actions.setLoading(true))
	try {
		const response = yield call(getPokemons, count)
		yield put(actions.setPokemons(response.data.results))
		yield put(actions.setLoading(false))
	} catch (error) {
		yield put(actions.setLoading(false))
		console.log(error)
	}
}

interface PokemonInfoPayloadType {
	type: string
	payload: { id: number; toSingleDetail: boolean }
}
function* getPokemonInfoSaga({ payload }: PokemonInfoPayloadType) {
	const { id, toSingleDetail } = payload
	try {
		const response = yield call(getPokemonInfo, id)
		if (!toSingleDetail) yield put(actions.setPokemonInfo(response.data))
		else yield put(actions.setSinglePokemonInfo(response.data))
	} catch (error) {
		yield put(actions.setLoading(false))
		console.log(error)
	}
}

function* getTypesSaga() {
	yield put(actions.setLoading(true))
	try {
		const response = yield call(getPokemonTypes)
		yield put(actions.setPokemonTypes(response.data.results))
		yield put(actions.setLoading(false))
	} catch (error) {
		yield put(actions.setLoading(false))
	}
}
export function* rootSaga() {
	yield all([
		takeEvery(types.GET_POKEMONS, getPokemonsSaga),
		takeEvery(types.GET_POKEMON_INFO, getPokemonInfoSaga),
		takeEvery(types.GET_POKEMON_TYPES, getTypesSaga),
	])
}
