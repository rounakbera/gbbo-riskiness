import React, { Component } from 'react';
import styled from 'styled-components';
import TitleCake from '../assets/title-cake.png';
import Chevron from './Chevron.js';

const TitleWrapper = styled.div`
	width: 100vw;
	background: linear-gradient(180deg, rgba(255,250,236,1) 0%, rgba(255,250,236,1) 95%, rgba(255,255,255,1) 100%);
	display: flex;
	height: auto;
	padding-bottom: 2vh;
	@media (max-width: 900px) {
		margin-bottom: 0;
		display: block;
		padding: 5vw;
	}
`
const TitleImg = styled.img`
	position: sticky;
	max-height: 60vh;
	top: 15vh;
	left: 7vw;
	margin-bottom: 25vh;
	@media (max-width: 900px) {
		position: static;
		width: 70vw;
		height: auto;
		margin-bottom: 0;
		margin-left: 10vw;
	}
`

const Title = styled.div`
	padding: 5% 5% 0 5%;
	width: 60vw;
	height: 100vh;
	margin-left: 5vw;
	@media (max-width: 900px) {
		padding-top: 5vh;
		width: 90vw;
		height: auto;
		margin-left: 0;
	}
`

const TitleSpan = styled.span`
	background-color: #A3352C;
	color: beige;
`

const Authors = styled.div`
	width: 100%;
	display: flex;
	margin-top: 2vh;
	@media (max-width: 900px) {
		margin-bottom: 5vw;
	}
`

const AuthorName = styled.div`
	width: 30%;
	padding: 0;
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
				<Chevron/>
				<TitleImg src = {TitleCake}/>
				<Title>
					<h1><TitleSpan>
						Managing Risk in Your Competitive Baking Flavor Portfolio
					</TitleSpan></h1>
					<Authors>
						<AuthorName><h3>Rounak Bera</h3></AuthorName>
						<AuthorName><h3>Stacy Tao</h3></AuthorName>
					</Authors>
					<Authors>
						<AuthorName><h3>Ria Garg</h3></AuthorName>
						<AuthorName><h3>Tian Low</h3></AuthorName>
					</Authors>
					<Description>
						<p>
						The Great British Bake Off—an amateur competition where home bakers 
						clash in order to be named the United Kingdom’s best, and all for 
						exactly zero prize money. Even so, the sheer accomplishment of winning 
						is definitely worth the effort. 
						</p>
						<p>
						That made us wonder, what does it truly take to win? How could a normal 
						baker game the odds to increase their chances? Maybe it has to do with 
						the flavors contestants choose. Or maybe it’s the risks they take. Read 
						on to find out.
						</p>
					</Description>
				</Title>
			</TitleWrapper>
		)
	}
}		

export default TitleCard;
