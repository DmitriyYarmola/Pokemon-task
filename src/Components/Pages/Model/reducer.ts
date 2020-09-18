import { PokemonType, PokemonInfoType, PokemonTypeTypes } from '@API/rest'
import { ActionsType } from './actions'
import * as types from './types'

const initialValues = {
	isLoading: false,
	pokemons: null as PokemonType[] | null,
	detailPokemonsInfo: [] as PokemonInfoType[],
	singlePokemonInfo: null as PokemonInfoType | null,
	pokemonTypes: null as PokemonTypeTypes[] | null,
	loadCount: 12 as number,
}

type InitialValuesType = typeof initialValues

export const reducer = (
	state = initialValues,
	action: ActionsType
): InitialValuesType => {
	switch (action.type) {
		case types.SET_POKEMONS:
			return {
				...state,
				pokemons: action.payload,
			}
		case types.SET_LOADING:
			return {
				...state,
				isLoading: action.payload,
			}
		case types.SET_POKEMON_INFO:
			return {
				...state,
				detailPokemonsInfo: [...state.detailPokemonsInfo, action.payload],
			}
		case types.SET_SINGLE_POKEMON_INFO:
			return {
				...state,
				singlePokemonInfo: action.payload,
			}
		case types.SET_POKEMON_TYPES:
			return {
				...state,
				pokemonTypes: action.payload,
			}
		case types.CLEAN_POKEMONS:
			return {
				...state,
				detailPokemonsInfo: action.payload,
			}
		case types.SET_LOAD_COUNT:
			return {
				...state,
				loadCount: action.payload,
			}
		default:
			return state
	}
}
