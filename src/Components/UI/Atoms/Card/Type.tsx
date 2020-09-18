import React from 'react'
import styled from 'styled-components'
import './colorTypes.sass'

const Content = styled.span`
	padding: 5px 10px;
	border-radius: 5px;
`

interface PropsType {
	type: string
}
export const Type: React.FC<PropsType> = ({ type }): React.ReactElement => {
	return <Content className={type}>{type}</Content>
}
