import React from 'react';
import styled from 'styled-components';
import TextSection from './TextSection';

const Risky = styled.span`
	background-color: #656054;
	color: white;
`
const Safe = styled.span`
	background-color: #D6CCBF;
	color: black;
`
const Good = styled.span`
	background-color: #769A47;
	color: white;
`
const Bad = styled.span`
	background-color: #C56854;
	color: white;
`
const Okay = styled.span`
	background-color: #C3AD5E;
	color: white;
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
            <TextSection
                title={"This is Mat!"}
                description={
                    <div>
                        <p>
                            He is a firefighter from London who made it all the way to <b>week 7</b>.
                            He says his "greatest ambition is to own a dishwasher."
                        </p>
                        <p>
                            Mat employs a whimsical nature in his bakes, such as creating a 
                            Firetruck Gingerbread houses and some Piña Colada Frangipane Tarts that 
                            charmed both audiences and the judges.
                        </p>
                    </div>
                }
            />
         )
    } else if(this.state.step==2){
        return (
            <TextSection
            description={
            <div>
                <p>
                    In Episode 4, with the theme of alternative ingredients, 
                    at attempts a <b>Sugar Free Carrot Cake</b>.
                </p>
                <p>
                    He used mostly classic ingredients including <b>dates</b> and <b>honey</b> to 
                    sweeten and <b>cinnamon</b> and <b>ginger</b> to flavor.
                </p>
                <p>
                    He attempts a simpler flavor palette in order to get the bake right. 
                </p>
                <p>
                    He did well in the bake, the judges were both impressed. However, 
                    it was not the most original. Another baker, Paul, even did a similar 
                    carrot cake for the challenge.
                </p>
                <p>
                    So this was a <Good>good bake</Good> but <Safe>not risky</Safe>.
                </p>    
            </div>
            }/>
        )
    } else if(this.state.step==3){
        return (
            <TextSection
            description={
            <div>
                <p>
                    Later in episode 7, Mat makes a <b>Strawberry Charlotte Russe Cake</b>.
                </p>
                <p>
                    He flavors his jelly and bavarois creme with <b>strawberry</b>.
                </p>
                <p>
                    He attempts a simpler flavor palette in order to get the bake right. 
                </p>
                <p>
                    Paul and Mary think it is delicious but there are problems with the bake: 
                    His sponge is split and the jelly isn’t set. The judges are disappointed, 
                    as they expected perfection out of this simpler choice.
                </p>
                <p>
                    We consider this an <Okay>okay bake</Okay> that is <Safe>not risky</Safe>.
                </p>    
            </div>
            }/>
        )
    }else {
        return (
            <TextSection
            description={
                <div>
                    <p>
                        This pie chart shows a breakdown of all of Mat's bakes by quality of bake and riskiness.
                        See how these bakes fit into his performance throughout the series.
                    </p>
                </div>
            }
            />
        )

    }
}}