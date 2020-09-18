import { InferActionsType } from '@Lib/Store'
import * as types from './types'
import { PokemonInfoType } from '@API/rest/getPokemonInfo'
import { PokemonType } from '@API/rest/getPokemons'
import { PokemonTypeTypes } from '@API/rest/getPokemonTypes'

export const actions = {
	setLoading: (payload: boolean) =>
		({
			type: types.SET_LOADING,
			payload,
		} as const),
	setPokemons: (payload: PokemonType[]) =>
		({
			type: types.SET_POKEMONS,
			payload,
		} as const),
	setPokemonInfo: (payload: PokemonInfoType) =>
		({
			type: types.SET_POKEMON_INFO,
			payload,
		} as const),
	setSinglePokemonInfo: (payload: PokemonInfoType) =>
		({
			type: types.SET_SINGLE_POKEMON_INFO,
			payload,
		} as const),
	setPokemonTypes: (payload: PokemonTypeTypes[]) =>
		({
			type: types.SET_POKEMON_TYPES,
			payload,
		} as const),
	cleanPokemons: (payload: []) =>
		({
			type: types.CLEAN_POKEMONS,
			payload,
		} as const),
	setLoadCount: (payload: number) =>
		({
			type: types.SET_LOAD_COUNT,
			payload,
		} as const),
}

export type ActionsType = InferActionsType<typeof actions>
