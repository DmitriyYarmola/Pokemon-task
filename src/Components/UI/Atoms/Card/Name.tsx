import React from 'react'
import styled from 'styled-components'

const Content = styled.span`
	font-weight: bold;
	font-size: 25px;
`

interface PropsType {
	name: string
}
export const Name: React.FC<PropsType> = ({ name }): React.ReactElement => {
	return <Content>{name}</Content>
}
