import React from 'react'
import styled from 'styled-components'

const ButtonComponent = styled.button`
	margin: 0;
	background: rgba(30, 144, 255, 1);
	border: 1px solid rgba(245, 250, 255, 1);
	outline: none;
	color: white;
	font-size: 24px;
	border-radius: 7px;
	padding: 8px;
	cursor: pointer;
	transition: 0.3s linear;
	&:hover {
		background: rgba(80, 145, 250, 1);
	}
`
interface PropsType {
	children: React.ReactNode
	onClick: () => void
	disabled: boolean
}
export const Button: React.FC<PropsType> = ({
	children,
	onClick,
	disabled,
}): React.ReactElement => {
	return (
		<ButtonComponent onClick={onClick} disabled={disabled}>
			{children}
		</ButtonComponent>
	)
}
