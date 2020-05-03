import React, { Component } from 'react';
import styled from 'styled-components';
import TitleCake from '../assets/title-cake.png';

const TitleWrapper = styled.div`
	width: 100vw;
	background: linear-gradient(180deg, rgba(255,250,236,1) 0%, rgba(255,250,236,1) 90%, rgba(255,255,255,1) 100%);
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
	left: 3vw;
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
	width: 50vw;
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
	background-color: crimson;
	color: beige;
	font-family: 'Concert One', sans-serif;
	font-size: 5rem;
	line-height: 6rem;
	@media (max-width: 900px) {
		font-size: 4rem;
		line-height: 5rem;
	}
`

const Authors = styled.div`
	padding: 5%;
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
	width: 50%;
	font-size: 2rem;
	@media (max-width: 900px) {
		margin-bottom: -5vh;
	}
`

const Description = styled.div`
	width: 100%;
	padding: 10%;
	padding-left: 0;
	font-size: 1.5rem;
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
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue sapien eget neque varius, vel dapibus est condimentum. Aenean feugiat a odio sed porta. Quisque ac massa nisl. Ut id nisl id erat suscipit malesuada aliquam at justo. Praesent vel ligula ac lacus auctor porta. Cras hendrerit nibh odio, vitae dapibus augue gravida eget. Maecenas consectetur ipsum et mauris egestas, eu viverra odio pharetra. Suspendisse varius lorem a semper laoreet. Nam sit amet pulvinar orci. Donec non viverra erat. Aliquam maximus porta ante, ut dictum purus lobortis vel. Nunc nec turpis id lorem finibus iaculis.
					</Description>
				</Title>
			</TitleWrapper>
		)
	}
}		

export default TitleCard;
