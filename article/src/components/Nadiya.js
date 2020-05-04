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
            <TextSection
                title={"This is Nadiya!"}
                description={
                    <div>
                        <p>
                            She is a full-time mom living in Leeds with her family. 
                            Her bakes are often inspired by her family and her Bangladeshi background.
                            She was the winner of Series 6.
                        </p>
                        <p>
                            She struggled a bit at the beginning, but around halfway through 
                            she hit a stride. The judges were consistently impressed by the 
                            technicality behind her bakes and inspired by the creativity behind her 
                            ideas. All this led her to be crowned The Great British Bake Off champion.
                        </p>
                    </div>
                }
            />
         )
    } else if(this.state.step==2){
        return (
            <TextSection
            description = {
                <div>
                    <p>
                        For the episode 6 Showstopper, Nadiya makes two types of <b> Vol-au-Vents</b>.
                    </p>
                    <p>
                        The first is a <b>clementine</b> and <b>cod</b> combination 
                        she borrows from her mom and grandmother’s recipe. 
                        The next is a Bengali korma that 
                        has <b>chicken</b>, <b>cardamom</b>, <b>cinnamon</b>, <b>star anise</b>, and <b>clove</b>.
                    </p>
                    <p>
                        The judges were surprised by her flavor choices but found 
                        them delicious. She had a bit of trouble with the pastry and 
                        had to restart. Without enough time, the final pastry wasn't
                        very successful, which neutralized the grade we assigned her.
                    </p>
                    <p>
                        This was considered an <Okay>okay bake</Okay> that is <Risky>risky</Risky>.
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
                        This is Nadiya’s final Signature Challenge: <b>Iced Buns</b>.
                    </p>
                    <p>
                        The fingers are flavored with sour cherry <b>jam</b> and <b>nutmeg</b> buns.
                    </p>
                    <p>
                        The buns are flavored with <b>cardamom</b> buns and <b>almond</b> creme 
                        patissieres.
                    </p>
                    <p>
                        Paul says both <i>“tick all the boxes. They’re neat, they’re full of flavor, 
                        and they are so different as well.”</i> This all-around solid bake helped 
                        Nadiya clench the series victory.
                    </p>
                    <p>
                        Clearly, this is a <Good>good bake</Good> that is 
                        also <Risky>risky</Risky>.
                    </p>    
                </div>
            }
            />
        )
    }
}}