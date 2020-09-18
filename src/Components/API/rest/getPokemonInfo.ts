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

export interface TypeTypes {
	slot: number
	type: {
		name: string
		url: string
	}
}
export interface StatsInfo {
	base_stat: number
	stat: { name: string; url: string }
}
export interface PokemonInfoType {
	name: string
	id: number
	sprites: {
		back_default: string
		back_female: null | string
		back_shiny: string
		back_shiny_female: null
		front_default: string
		front_female: null | string
		front_shiny: string
		front_shiny_female: null | string
	}
	stats: StatsInfo[]
	types: TypeTypes[]
}
export const getPokemonInfo = (id: number): Promise<AxiosResponse<PokemonInfoType>> => {
	return createInstance().get<PokemonInfoType>(`api/v2/pokemon/${id}`)
}
