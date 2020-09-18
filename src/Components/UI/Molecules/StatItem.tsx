import React from 'react'
import styled from 'styled-components'

const Item = styled.div`
	display: grid;
	padding: 5px 0;
	grid-template-columns: 1fr 1fr;
	border-top: 1px solid black;
	border-bottom: 1px solid black;
	span:nth-child(1) {
		border-right: 1px solid black;
	}
`
const Content = styled.span``
interface PropsType {
	statName: string
	value: number | string
}
export const StatItem: React.FC<PropsType> = ({
	statName,
	value,
}): React.ReactElement => {
	return (
		<Item>
			<Content>{statName}</Content>
			<Content>{value}</Content>
		</Item>
	)
}
