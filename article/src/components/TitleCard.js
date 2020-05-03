import React, { Component } from 'react';
import styled from 'styled-components';
import TitleCake from '../assets/title-cake.png';

const TitleWrapper = styled.div`
	width: 100vw;
	background: linear-gradient(180deg, rgba(255,250,236,1) 0%, rgba(255,250,236,1) 95%, rgba(255,255,255,1) 100%);
	display: flex;
	height: auto;
	padding-bottom: 10vh;
	@media (max-width: 900px) {
		display: block;
		padding: 5vw;
	}
`
const TitleImg = styled.img`
	position: sticky;
	max-height: 60vh;
	top: 5vh;
	left: 5vw;
	margin-bottom: 5vh;
	@media (max-width: 900px) {
		position: static;
		width: 70vw;
		height: auto;
		margin-bottom: 0;
		margin-left: 10vw;
	}
`

const Title = styled.div`
	padding-top: 10vh;
	width: 60vw;
	height: 100vh;
	margin-left: 5vw;
	padding: 5%;
	@media (max-width: 900px) {
		padding-top: 5vh;
		width: 90vw;
		height: auto;
		margin-left: 0;
	}
`

const TitleSpan = styled.span`
	font-weight: 700;
	background-color: crimson;
	color: beige;
	font-size: 5rem;
	line-height: 6rem;
	@media (max-width: 900px) {
		font-size: 4rem;
		line-height: 5rem;
	}
`

const Authors = styled.div`
	padding: 5% 0;
	width: 100%;
	display: flex;
	margin-top: 3vh;
	margin-bottom: -8vh;
	@media (max-width: 900px) {
		margin-bottom: 5vw;
	}
`

const AuthorName = styled.div`
	color: brown;
	width: 30%;
	font-size: 2rem;
	@media (max-width: 900px) {
		margin-bottom: -5vh;
	}
`

const Description = styled.div`
	width: 90%;
	padding-top: 5%;
`

class TitleCard extends Component {
	
	constructor(props) {
		super(props)
	}

	render() {
		return (
			
			<TitleWrapper>
				<TitleImg src = {TitleCake}/>
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
						<p>
						The Great British Bake Off. An amateur competition where home bakers clash in order to be named the United Kingdom’s best. All for exactly zero prize money. 
						</p>
						<p>
						Even so, the sheer accomplishment of winning is definitely worth the effort–and that made us wonder, what does it truly take to win? How could a normal baker game the odds to increase their chances? 
						</p>
						<p>
						Maybe it has to do with the flavors contestants choose. Or maybe it’s the risks they take. Read on to find out.
						</p>
					</Description>
				</Title>
			</TitleWrapper>
		)
	}
}		

export default TitleCard;
