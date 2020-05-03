import React from 'react';
import styled from 'styled-components';


const Description = styled.div`
    padding-top: 10vh;
    padding-bottom: 10vw;
    padding-right: 10vh;
    padding-left: 10vh;
`
const Paragraph = styled.div`
    padding-top: 2vh;
    padding-bottom: 2vw;
    color: #595959;
    
`

const TitleSpan = styled.span`
	background-color: crimson;
	color: beige;
	font-family: 'Concert One', sans-serif;
	font-size: 5rem;
    line-height: 6rem;
`
const Ingredients = styled.span`
    color: #a64d79;
    font-weight: bold;
    font-family: 'Ariel', sans-serif;
`
const GoodBake = styled.span`
    color: #38761d;
    font-weight: bold;
    font-family: 'Ariel', sans-serif;
`
const OkayBake = styled.span`
    color: #bf9000;
    font-weight: bold;
    font-family: 'Ariel', sans-serif;
`
const BadBake = styled.span`
    color: #990000;
    font-weight: bold;
    font-family: 'Ariel', sans-serif;
`
const NotRisky = styled.span`
    color: #990000;
    font-weight: bold;
    font-family: 'Ariel', sans-serif;
`
const Risky = styled.span`
    color: #38761d;
    font-weight: bold;
    font-family: 'Ariel', sans-serif;
`
const Bake = styled.span`
    font-weight: bold;
    font-family: 'Ariel', sans-serif;
`


export default class Stu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        step: props.data
    }

  }
/*In Episode 4, the alternative ingredients episode, he made a Sugar Free Carrot Cake 
He used mostly classic ingredients including dates and honey to sweeten and cinnamon and ginger to flavor 
He did well in the bake, Paul and Mary were both impressed. However, it was not the most original, as another baker Paul also attempted a similar carrot cake for the challenge.
So this was a Good Bake but Not Risky
*/
  
  render() {
    if(this.state.step==1){
        return (
            <div>
                <Paragraph>
                    This is Stu!
                </Paragraph>
                <ul>
                    <li>He’s a professional musician from Surrey </li>
                    <li>He took make some risky choices the first episode that didn’t pay off</li>
                    <li>He was the first contestant to be eliminated</li>
                </ul>
                
            </div>
         )
    } else {
        return (
            <div>
                <Paragraph>
                    For his signature bake, Stu makes a <Bake>Marley Madeira Cake</Bake>
                </Paragraph>
                <Paragraph>
                    He makes the cake half <Ingredients>chocolate</Ingredients> and covers it with a <Ingredients>rum</Ingredients> and <Ingredients>lime</Ingredients> glaze
                </Paragraph>
                <Paragraph>
                The judges say the flavors wrong for madeira cakes and the glaze is too hard to bite into. 
                </Paragraph>
                <Paragraph>
                    Due to the judges reactions and the unconventional flavor choices this is considered a  <BadBake>Bad Bake</BadBake> that is <Risky>Risky</Risky>
                </Paragraph>    
            </div>
        )
    }
}}