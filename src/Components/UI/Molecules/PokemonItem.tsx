import React from 'react'
import styled from 'styled-components'
import { Img, Name, Type } from '@UI/Atoms/Card'
import { TypeTypes } from '@API/rest/getPokemonInfo'

const Item = styled.div`
	border: 1px solid black;
	display: grid;
	justify-content: center;
	grid-row-gap: 5px;
	text-align: center;
	padding: 10px;
	cursor: pointer;
	img {
		width: 200px;
	}
`
const Types = styled.div`
	display: grid;
	grid-template-columns: repeat(3, max-content);
	grid-gap: 15px;
	justify-content: center;
`
interface PropsType {
	name: string
	url: string
	types: TypeTypes[]
	id: number
	onSelectItem: (id: number) => void
}
export const PokemonItem: React.FC<PropsType> = ({
	url,
	name,
	types,
	id,
	onSelectItem,
}): React.ReactElement => {
	return (
		<Item onClick={() => onSelectItem(id)}>
			<Img url={url} />
			<Name name={name} />
			<Types>
				{types.map((item) => {
					return <Type key={item.type.url} type={item.type.name} />
				})}
			</Types>
		</Item>
	)
}
