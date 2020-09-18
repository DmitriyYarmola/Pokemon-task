import React, { useState } from 'react'
import styled from 'styled-components'
import { PokemonTypeTypes } from '@API/rest/getPokemonTypes'

const Select = styled.select``
interface PropsType {
	types: PokemonTypeTypes[]
	onSelect: (value: React.ChangeEvent<HTMLSelectElement>) => void
	// value: string
}
export const SelectType: React.FC<PropsType> = ({
	types,
	onSelect,
}): React.ReactElement => {
	const [value, setValue] = useState('')
	return (
		<div>
			<Select
				onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
					setValue(e.currentTarget.value)
					onSelect(e)
				}}
				value={value}
			>
				<option value=''>All types</option>
				{types.map((type) => {
					return (
						<option key={type.name} value={type.name}>
							{type.name}
						</option>
					)
				})}
			</Select>
		</div>
	)
}
