import React, { Component } from 'react';
import styled from 'styled-components';

const SectionWrapper = styled.div`
  padding: 5%;
`
const SectionTitle = styled.h2`
	color: crimson;
	font-family: 'Concert One', sans-serif;
	font-size: 2rem;
`
const SectionDescription = styled.div`
	width: 100%;
	font-size: 1.2rem;
`

export default class TextSection extends Component {
	render() {
		return (
			
			<SectionWrapper>
        <SectionTitle>
          Managing Risk in Your Competitive Baking Flavor Portfolio
        </SectionTitle>
        <SectionDescription>
        In hac habitasse platea dictumst. Aliquam dictum euismod odio, quis porta magna dapibus in. Proin malesuada eleifend ante, id gravida dolor fringilla sodales. Aenean a mauris venenatis, maximus orci id, egestas eros. Curabitur in nisi fermentum, sollicitudin ipsum non, auctor ligula. Integer tincidunt augue non tristique laoreet. In a ante varius, pharetra urna nec, lacinia enim. Pellentesque iaculis odio quis ligula interdum faucibus eu sed nulla. Nam semper mollis purus, vel mollis est varius lacinia. Morbi eu auctor lacus. Ut consequat fermentum ante, elementum dapibus dolor pretium quis.
        </SectionDescription>
			</SectionWrapper>
		)
	}
}	
