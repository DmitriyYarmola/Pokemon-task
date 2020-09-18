import { AppStateType } from '@Lib/Store'
import { PokemonInfoType, PokemonType, PokemonTypeTypes } from '@API/rest/'

export const pokemons = (state: AppStateType): PokemonType[] | null =>
	state.PokemonsRootReducer.pokemons
export const detailPokemonsInfo = (state: AppStateType): PokemonInfoType[] =>
	state.PokemonsRootReducer.detailPokemonsInfo

export const singlePokemonInfo = (state: AppStateType): PokemonInfoType | null =>
	state.PokemonsRootReducer.singlePokemonInfo

export const pokemonTypes = (state: AppStateType): PokemonTypeTypes[] | null =>
	state.PokemonsRootReducer.pokemonTypes

export const isLoading = (state: AppStateType): boolean =>
	state.PokemonsRootReducer.isLoading

export const loadCount = (state: AppStateType): number =>
	state.PokemonsRootReducer.loadCount
