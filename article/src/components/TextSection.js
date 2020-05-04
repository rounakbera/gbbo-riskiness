import React, { Component } from 'react';
import styled from 'styled-components';

const SectionWrapper = styled.div`
  padding: 5%;
`
const SectionTitle = styled.h2`
	font-weight: 700;
`
const SectionDescription = styled.div`
	width: 100%;
	font-size: 1.2rem;
`

export default class TextSection extends Component {
	render() {
		return (
			<SectionWrapper>
        {this.props.title && 
				<SectionTitle>
          {this.props.title}
        </SectionTitle>}
        <SectionDescription>
        {this.props.description}
        </SectionDescription>
			</SectionWrapper>
		)
	}
}	
