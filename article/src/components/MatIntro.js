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
const NotRisky = styled.span`
    color: #990000;
    font-weight: bold;
    font-family: 'Ariel', sans-serif;
`
const Bake = styled.span`
    font-weight: bold;
    font-family: 'Ariel', sans-serif;
`


export default class MatIntro extends React.Component {
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
                    This is Mat!
                </Paragraph>
                <ul>
                    <li>He is a firefighter from London. </li>
                    <li>He made it all the way to week 7.</li>
                    <li>He says his "greatest ambition is to own a dishwasher"</li>
                </ul>
                
            </div>
         )
    } else if(this.state.step==2){
        return (
            
            <div>
                <Paragraph>
                    In Episode 4, the alternative ingredients episode, Mat attempts a <Bake>Sugar Free Carrot Cake</Bake>
                </Paragraph>
                <Paragraph>
                    He used mostly classic ingredients including <Ingredients>dates</Ingredients> and <Ingredients>honey </Ingredients>
                     to sweeten and <Ingredients>cinnamon</Ingredients> and  <Ingredients>ginger</Ingredients> to flavor
                </Paragraph>
                <Paragraph>
                    He attempts a simpler flavor palette in order to get the bake right. 
                </Paragraph>
                <Paragraph>
                    He did well in the bake, the judges were both impressed. However, it was not the most original. Another baker, Paul, even did a similar carrot cake for the challenge.</Paragraph>
                <Paragraph>
                    So this was a <GoodBake>Good Bake</GoodBake> but <NotRisky>Not Risky</NotRisky>
                </Paragraph>    
            </div>
                
        )
    } else {
        return (
            <div>
                <Paragraph>
                    Later in episode 7, Mat makes a <Bake>Strawberry Charlotte Russe Cake</Bake>
                </Paragraph>
                <Paragraph>
                    He flavors his jelly and bavarois creme with <Ingredients>strawberry</Ingredients>
                </Paragraph>
                <Paragraph>
                    He attempts a simpler flavor palette in order to get the bake right. 
                </Paragraph>
                <Paragraph>
                    Paul and Mary think it is delicious but there are problems with the bake: His sponge is split and the jelly isn’t set. The judges are disappointed, as they expected perfection out of this simpler choice.
                </Paragraph>
                <Paragraph>
                    We consider this an <OkayBake>Okay Bake</OkayBake> that is <NotRisky>Not Risky</NotRisky>
                </Paragraph>    
            </div>
        )
    }
}}