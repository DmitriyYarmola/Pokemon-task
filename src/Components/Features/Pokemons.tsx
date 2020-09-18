import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { animateScroll as scroll } from 'react-scroll'
import { PokemonItem } from '@UI/Molecules'
import { PokemonInfoType } from '@API/rest'
import { Button } from '@UI/Atoms'
import { PokemonsActions, PokemonsSelectors } from '@Pages/index'

const Items = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 35px;
	@media (max-width: 725px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 465px) {
		grid-template-columns: 1fr;
	}
`
const Actions = styled.div`
	margin-top: 25px;
	text-align: center;
	button {
		width: 100%;
	}
`
interface PropsType {
	pokemons: PokemonInfoType[]
	disabledLoadButton: boolean
}
export const Pokemons: React.FC<PropsType> = ({
	pokemons,
	disabledLoadButton,
}): React.ReactElement => {
	const loadCount = useSelector(PokemonsSelectors.loadCount)
	const dispatch = useDispatch()
	const onSelectItem = useCallback(
		(id: number) => {
			dispatch({
				type: 'GET_POKEMON_INFO',
				payload: { id, toSingleDetail: true },
			})
			scroll.scrollToTop()
		},
		[dispatch]
	)

	const onLoadMore = useCallback(() => {
		dispatch(PokemonsActions.setPokemons([]))
		dispatch(PokemonsActions.cleanPokemons([]))
		dispatch(PokemonsActions.setLoadCount(loadCount + 12))
		dispatch({ type: 'GET_POKEMONS', payload: { count: loadCount + 12 } })
	}, [dispatch, loadCount])
	return (
		<div>
			<Items>
				{pokemons.map((pokemon) => {
					return (
						<PokemonItem
							key={pokemon.name}
							id={pokemon.id}
							name={pokemon.name}
							url={pokemon.sprites.front_default}
							types={pokemon.types}
							onSelectItem={onSelectItem}
						/>
					)
				})}
			</Items>
			{pokemons.length ? (
				<Actions>
					<Button onClick={onLoadMore} disabled={disabledLoadButton}>
						Load More
					</Button>
				</Actions>
			) : (
				<div>Pokemons list is empty</div>
			)}
		</div>
	)
}
