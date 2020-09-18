import { AxiosResponse } from 'axios'

import { createInstance } from '../api'

export interface PokemonTypeTypes {
	name: string
	url: string
}

export const getPokemonTypes = (): Promise<AxiosResponse<PokemonTypeTypes>> => {
	return createInstance().get<PokemonTypeTypes>('api/v2/type')
}
