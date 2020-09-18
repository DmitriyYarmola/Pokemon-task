import React from 'react'
import styled from 'styled-components'
import Cross from '@UI/Img/cross.svg'

const ImgComponent = styled.img`
	display: inline-block;
`

interface PropsType {
	url: string
}
export const Img: React.FC<PropsType> = ({ url }): React.ReactElement => {
	return <ImgComponent src={url || Cross} />
}
