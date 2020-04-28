import React, { Component } from 'react';
import styled from 'styled-components';
import BreadTrophy from '../assets/bread-trophy.png';

const TitleWrapper = styled.div`
	width: 100vw;
	background-color: #EEEEEE;
	display: flex;
`
const TitleImg = styled.img`
	position: sticky;
	height: 70vh;
	top: 5vh;
	left: 5vw;
`

const Title = styled.div`
	padding-top: 10vh;
	width: 50vw;
	height: 100vh;
	margin-left: 5vw;
`

const TitleSpan = styled.span`
	background-color: crimson;
	color: beige;
	font-family: 'Concert One', sans-serif;
	font-size: 5rem;
	line-height: 6rem;
`

const Authors = styled.div`
	padding: 5%;
	width: 100%;
	display: flex;
	margin-top: 3vh;
	margin-bottom: -8vh;
`

const AuthorName = styled.div`
	color: brown;
	width: 50%;
	font-size: 2rem;
`

const Description = styled.div`
	width: 100%;
	padding: 10%;
	font-size: 1.5rem;
`

class TitleCard extends Component {
	
	constructor(props) {
		super(props)
	}

	render() {
		return (
			
			<TitleWrapper>
				<TitleImg src = {BreadTrophy}/>
				<Title>
					<TitleSpan>
						Managing Risk in Your Competitive Baking Flavor Portfolio
					</TitleSpan>
					<Authors>
						<AuthorName>Rounak Bera</AuthorName>
						<AuthorName>Stacy Tao</AuthorName>
					</Authors>
					<Authors>
						<AuthorName>Ria Garg</AuthorName>
						<AuthorName>Tian Low</AuthorName>
					</Authors>
					<Description>
					In hac habitasse platea dictumst. Aliquam dictum euismod odio, quis porta magna dapibus in. Proin malesuada eleifend ante, id gravida dolor fringilla sodales. Aenean a mauris venenatis, maximus orci id, egestas eros. Curabitur in nisi fermentum, sollicitudin ipsum non, auctor ligula. Integer tincidunt augue non tristique laoreet. In a ante varius, pharetra urna nec, lacinia enim. Pellentesque iaculis odio quis ligula interdum faucibus eu sed nulla. Nam semper mollis purus, vel mollis est varius lacinia. Morbi eu auctor lacus. Ut consequat fermentum ante, elementum dapibus dolor pretium quis.
					</Description>
				</Title>
			</TitleWrapper>
		
		)
	}
}		

export default TitleCard;
