import { AxiosResponse } from 'axios'

import { createInstance } from '../api'

export interface PokemonType {
	pokemon: {
		name: string
		url: string
	}
	name: string
	url: string
}
interface ResponseType {
	count: number
	next: string
	previous: string | null
	results: PokemonType[]
}

export const getPokemons = (count: number): Promise<AxiosResponse<ResponseType>> => {
	return createInstance().get<ResponseType>('api/v2/pokemon', {
		params: { limit: count },
	})
}
