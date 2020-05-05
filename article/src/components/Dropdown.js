import React, { Component } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Data from '../data/allbakers.json';
import Bakers from '../data/bakerinfo.json';

const images = require.context('../assets', true);

const Wrapper = styled.div`
    width: 90vw;
    padding: 5vh 5vw;
    background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,250,236,1) 5%, rgba(255,250,236,1) 100%);
    height: ${props => props.height};
    transition: height 1s;
`
const ExploreWrapper = styled.div`
    width: 80vw;
    display: flex;
    padding: 5vw 0 0 0;
`
const BakerInfo = styled.div`
    width: 60vw;
    margin: 0 -5vw 0 5vw;
    padding: 10px 0;
`
const Ingredients = styled.div`
    border-radius: 10px;
    margin-top: 3vh;
    width: 40vw;
    background-color: #5E3600;
    color: white;
    list-style-type: none;
    padding: 10px;
    li {
        padding-bottom: 5px;
    }
    max-height: 20vh;
    overflow: scroll;
`
const BakerImgWrapper = styled.div`
    height:10vw;
    width:10vw;
    border-radius: 5vw;
    background-position: 50% 5%;
    background-repeat: no-repeat;
    background-size: 18vw;
    margin-right: 20px;
    transform: translateY(15%);
`

var flag = 0;

const BakerData = {
    "Frances": [],
    "Kimberley": [],
    "Ruby": [],
    "Beca": [],
    "Christine": [],
    "Glenn": [],
    "Howard": [],
    "Rob": [],
    "Ali": [],
    "Deborah": [],
    "Mark": [],
    "Lucy": [],
    "Toby": [],
    "Nancy": [],
    "Luis": [],
    "Richard": [],
    "Chetna": [],
    "Martha": [],
    "Kate": [],
    "Norman": [],
    "Diana": [],
    "Iain": [],
    "Jordan": [],
    "Enwezor": [],
    "Claire": [],
    "Nadiya": [],
    "Ian": [],
    "Tamal": [],
    "Flora": [],
    "Paul": [],
    "Mat": [],
    "Alvin": [],
    "Ugné": [],
    "Sandy": [],
    "Dorret": [],
    "Marie": [],
    "Stu": []
}

function getData(){
    if (!flag){
        flag = 1;
        for (const element of Data){
            let name = element["Baker"];
            if (BakerData[name]){
                BakerData[name].push(element);
            }
        }
    }
}

class Display extends Component{

    constructor(props){
        super(props);
        getData();
        this.getBakes = this.getBakes.bind(this);
    }

    getBakes(name) {
        console.log(BakerData);
        return BakerData[name["Baker"]].map(bakerBake =>
            (bakerBake["Risky"] == "T" ?
                <li><strong>{bakerBake["Flavors"]}</strong></li>
                :
                <li>{bakerBake["Flavors"]}</li>
            )
        )
    }

    render(){
        return(
            this.props.name ? this.getBakes(this.props.name) : ""
        )
    }
}

export default function Dropdown() {
    const [value, setValue] = React.useState('');
    // const [inputValue, setInputValue] = React.useState('');
    let placeholder;
    let height;
    let name;
    let img;
    if(value){
        name = value["Baker"].toLowerCase();
        img = images(`./${name}.jpg`);
        height = "70vh";
        placeholder = <><div style={{display: "flex"}}><BakerImgWrapper style={{backgroundImage: `url(${img})`}}/><div style={{width: "50vw"}}><h4><strong>{value["Baker"]}</strong> participated in <strong>Season {value["Season"]}</strong>, and placed <strong>#{value["Place"]}</strong>. Approximately <strong>{Math.round(value["% Risk"]*100)}%</strong> of their bakes were risky.<br/><br/>Here's a list of the important flavors they used; each row represents a different bake, where bolded flavors were marked as a risky combination for that particular dish.</h4></div></div><Ingredients><Display name={value}/></Ingredients></>;
    }
    else{
        height = "30vh";
        placeholder = <h4><strong>Choose a baker in the dropdown on the left.</strong></h4>;
    }
    return(
        <Wrapper height={height}>
            <h1>
            Explore our data!
            </h1>
            <ExploreWrapper>
                <Autocomplete
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    id="baker-dropdown"
                    options={Bakers.sort((a,b) => a.Place > b.Place)}
                    getOptionLabel={(option) => option.Baker}
                    groupBy={(option) => "Season " + option.Season}
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Bakers" variant="outlined" />}
                />
                <BakerInfo>
                    {placeholder}
                </BakerInfo>
            </ExploreWrapper>
        </Wrapper>
    )
    
}

