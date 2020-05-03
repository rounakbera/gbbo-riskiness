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
const Risky = styled.span`
    color: #38761d;
    font-weight: bold;
    font-family: 'Ariel', sans-serif;
`
const Bake = styled.span`
    font-weight: bold;
    font-family: 'Ariel', sans-serif;
`
const Quote = styled.span`
    font-style: italic;
    font-family: 'Ariel', sans-serif;
`


export default class NadiyaIntro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        step: props.data
    }

  }

  
  render() {
    if(this.state.step==1){
        return (
            <Paragraph>
                <Paragraph>
                    This is Nadiya!
                </Paragraph>
                <ul>
                    <li>She is a full-time mom living in Leeds with her family. </li>
                    <li>Her bakes are often inspired by her family and her Bangladeshi background</li>
                    <li>She was the winner of Series 6</li>
                </ul>
                
            </Paragraph>
         )
    } else if(this.state.step==2){
        return (
            
            <div>
                <Paragraph>
                    For the episode 6 Showstopper, Nadiya makes two types of <Bake> Vol-au-Vents</Bake>
                </Paragraph>
                <Paragraph>
                    The first is a <Ingredients>clementine</Ingredients> and <Ingredients>cod</Ingredients> combination she borrows from her mom and grandmother’s recipe.
                </Paragraph>
                <Paragraph>
                The next is a Bengali korma that has <Ingredients>chicken</Ingredients>, <Ingredients>cardamom</Ingredients>, <Ingredients>cinnamon</Ingredients>, <Ingredients>star anise</Ingredients>, and <Ingredients>clove</Ingredients> 
                </Paragraph>
                <Paragraph>
                    The judges were surprised by her flavor choices but found them delicious. She had a bit of trouble with the pastry and had to restart, so she couldn’t let the dough chill for the time needed, and they didn’t come out quite right. But despite that, the judges thought she demonstrated mastery of the pastry and the fillings were great.
                </Paragraph>
                <Paragraph>
                    This was considered an <OkayBake>Okay Bake</OkayBake> that is <Risky>Risky</Risky>
                </Paragraph>    
            </div>
                
        )
    } else {
        return (
            <div>
                <Paragraph>
                This is Nadiya’s final Signature Challenge: <Bake>Iced Buns</Bake>
                </Paragraph>
                <Paragraph>
                    The fingers are flavored with sour cherry <Ingredients>jam</Ingredients> and <Ingredients>nutmeg</Ingredients> buns
                </Paragraph>
                <Paragraph>
                    The buns are flavored with <Ingredients>cardamom</Ingredients> buns and <Ingredients>almond</Ingredients> creme patissieres 
                </Paragraph>
                <Paragraph>
                Paul says both <Quote>“tick all the boxes. They’re neat, they’re full of flavor, and they are so different as well”</Quote>. This all-around solid bake helped Nadiya clench the series victory.
                </Paragraph>
                <Paragraph>
                    For obvious reasons, this is a <GoodBake>Good Bake</GoodBake> that is also <Risky>Risky</Risky>
                </Paragraph>    
            </div>
        )
    }
}}