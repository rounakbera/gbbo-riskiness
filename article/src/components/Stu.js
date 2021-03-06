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
            <TextSection 
                title={"This is Stu!"}
                description={
                    <div>
                        <p>
                            He’s a professional musician from Surrey.
                        </p>
                        <p>
                            He made some bold flavor choices the first episode that didn’t pay 
                            off, leading to him being the <b>first elimination</b> of the series.
                        </p>
                    </div>
                }
            />
         )
    } else {
        return (
            <TextSection 
                description={
                    <div>
                        <p>
                            For his signature bake, Stu makes a <b>Marley Madeira Cake</b>.
                        </p>
                        <p>
                            He makes half of the cake in <b>chocolate</b> and covers it with 
                            a <b>rum</b> and <b>lime</b> glaze.
                        </p>
                        <p>
                            Unfortunately, the judges say the flavors are not fit for madeira 
                            cakes and the glaze is too hard to bite into. 
                        </p>
                        <p>
                            Due to the judges reactions and the unconventional flavor choices, 
                            this is considered a <Bad>bad bake</Bad> that is <Risky>risky</Risky>.
                        </p>    
                    </div>
                }
            />
        )
    }
}}