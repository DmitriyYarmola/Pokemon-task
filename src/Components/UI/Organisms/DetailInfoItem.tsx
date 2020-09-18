import React from 'react'
import styled from 'styled-components'
import { Img } from '@UI/Atoms/Card/Img'
import { Name } from '@UI/Atoms/Card/Name'
import { StatsInfo } from '@API/rest'
import { StatItem } from '@UI/Molecules/StatItem'
import { TypeTypes } from '@API/rest/getPokemonInfo'

const Item = styled.div`
	width: max-content;
	display: grid;
	justify-content: center;
	grid-row-gap: 15px;
	border: 1px solid rgb(0 0 0);
	height: max-content;
	text-align: center;
	padding: 10px 15px;
	img {
		width: 400px;
	}

	@media (max-width: 465px) {
		img {
			width: 300px;
		}
	}
`
const Stats = styled.div`
	border: 1px solid rgb(0 0 0);
`
interface PropsType {
	imgUrl: string
	name: string
	stats: StatsInfo[]
	types: TypeTypes[]
}

export const DetailInfoItem: React.FC<PropsType> = ({
	imgUrl,
	name,
	stats,
	types,
}): React.ReactElement => {
	const pokemonTypes = types.map((type) => {
		return type.type.name
	})
	return (
		<Item>
			<Img url={imgUrl} />
			<Name name={name} />
			<Stats>
				<StatItem statName='Type' value={`${pokemonTypes.join(', ')}`} />
				{stats.map((stat) => {
					return (
						<StatItem
							key={stat.stat.name}
							statName={stat.stat.name}
							value={stat.base_stat}
						/>
					)
				})}
			</Stats>
		</Item>
	)
}
