import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { Pokemons } from '@Features/Pokemons'
import { PokemonType } from '@API/rest'
import { DetailInfoItem } from '@UI/Organisms'
import { SelectType } from '@UI/Atoms/'
import { PokemonsSelectors, PokemonsActions } from './Model'

const PageTitle = styled.div`
	font-size: 50px;
	font-weight: bold;
	text-align: center;
`
const Filter = styled.div``

const PokedexBlock = styled.div`
	display: grid;
	grid-column-gap: 50px;
	grid-template-columns: repeat(2, 1fr);
	margin-top: 50px;

	.order {
		display: grid;
		justify-content: center;
		margin-bottom: 15px;
	}

	@media (max-width: 1150px) {
		grid-template-columns: 1fr;
		.order {
			order: -1;
		}
	}
`
export const Page: React.FC = (): React.ReactElement => {
	const [searchValue, setSearchType] = useState('')
	const pokemons = useSelector(PokemonsSelectors.pokemons)
	const detailPokemonsInfo = useSelector(PokemonsSelectors.detailPokemonsInfo)
	const singlePokemonInfo = useSelector(PokemonsSelectors.singlePokemonInfo)
	const pokemonTypes = useSelector(PokemonsSelectors.pokemonTypes)
	const isLoading = useSelector(PokemonsSelectors.isLoading)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch({ type: 'GET_POKEMONS', payload: { count: 12 } })
		dispatch({ type: 'GET_POKEMON_TYPES' })
	}, [dispatch])

	useEffect(() => {
		if (pokemons) {
			pokemons.forEach((pokemon: PokemonType, index: number) => {
				console.log('igf', index)
				if (index + 1 === pokemons.length) {
					dispatch(PokemonsActions.setLoading(false))
				} else {
					dispatch(PokemonsActions.setLoading(true))
				}
				dispatch({
					type: 'GET_POKEMON_INFO',
					payload: { id: index + 1, toSingleDetail: false },
				})
			})
		}
	}, [pokemons, dispatch])

	const onSelectFilterType = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
		setSearchType(e.currentTarget.value)
	}, [])

	const results = useMemo(
		() =>
			!searchValue
				? detailPokemonsInfo
				: detailPokemonsInfo.filter((pokemon) => {
						const types: any[] = []
						pokemon.types.forEach((type) => {
							types.push(type.type.name)
						})
						if (types.includes(searchValue)) {
							return pokemon
						}
				  }),
		[detailPokemonsInfo, searchValue]
	)

	console.log('results', results)
	return !isLoading ? (
		<div>
			<PageTitle>Pokedex</PageTitle>
			<Filter>
				<SelectType types={pokemonTypes || []} onSelect={onSelectFilterType} />
			</Filter>
			<PokedexBlock>
				<Pokemons pokemons={results} disabledLoadButton={Boolean(searchValue)} />
				{singlePokemonInfo && (
					<span className='order'>
						<DetailInfoItem
							imgUrl={singlePokemonInfo.sprites.front_default}
							types={singlePokemonInfo.types}
							name={singlePokemonInfo.name}
							stats={singlePokemonInfo.stats}
						/>
					</span>
				)}
			</PokedexBlock>
		</div>
	) : (
		<div>Loading...</div>
	)
}
