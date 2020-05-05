import { createGlobalStyle } from 'styled-components';
import { assign } from 'lodash';

const GlobalStyles = createGlobalStyle`
  html{
    scroll-behavior: smooth;

  }

  body {
    background-color: white;
    overflow-x: hidden;
  }

  p {
    font-family: Muli, sans-serif;
    font-size: 1.2rem;
  }

  h1 {
    color: #A3352C;
    font-family: 'Philosopher', sans-serif;
    font-size: 4rem;
    line-height: 4.5rem;
    margin: 0;
	@media (max-width: 900px) {
		font-size: 3.5rem;
		line-height: 4.5rem;
	}
  }
  
  h2 {
    color: #A3352C;
    font-family: 'Philosopher', sans-serif;
    font-size: 2rem;
    margin: 0;
  }
  
  h3 {
    color: #5E3600;
    font-family: Muli, sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
  }

  h4 {
    color: #A3352C;
    font-family: Muli, sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0;
  }
`

const charcoal = "#2B271E";
const brown = "#5E3600";
const beige = "beige"; // title background color

const darkGray = "#656054";
const gray = "#9E968B";
const lightGrey = "#D6CCBF";

const darkRed = "#A3352C";
const red = "#C56854"; 
const lightRed = "#FFBD98";

const darkGreen = "#497028";
const green = "#769A47";
const lightGreen = "#C3E17D";

const darkYellow = "#927D31";
const yellow = "#C3AD5E"; 
const lightYellow = "#F4DD8B";

const colors = ["#C56854", "#C47956", "#C48A59", "#C39B5B", "#C3AD5E", "#AFA858", "#9CA352", "#899E4C", "#769A47"];

// Typography
const sansSerif =
  "'Gill Sans', 'Gill Sans MT', 'Ser­avek', 'Trebuchet MS', sans-serif";
const letterSpacing = "normal";
const fontSize = 14;

// Layout
const baseProps = {
  width: 450,
  height: 300,
  padding: 50,
  colorScale: colors
};

// Labels
const baseLabelStyles = {
  fontFamily: sansSerif,
  fontSize,
  letterSpacing,
  padding: 10,
  fill: charcoal,
  stroke: "transparent"
};
const centeredLabelStyles = assign({ textAnchor: "middle" }, baseLabelStyles);

// Strokes
const strokeLinecap = "round";
const strokeLinejoin = "round";

// Put it all together...
const CustomVictoryTheme = {
  area: assign(
    {
      style: {
        data: {
          fill: charcoal
        },
        labels: centeredLabelStyles
      }
    },
    baseProps
  ),
  axis: assign(
    {
      style: {
        axis: {
          fill: "transparent",
          stroke: charcoal,
          strokeWidth: 1,
          strokeLinecap,
          strokeLinejoin
        },
        axisLabel: assign({}, centeredLabelStyles, {
          padding: 25
        }),
        grid: {
          fill: "none",
          stroke: "none",
          pointerEvents: "painted"
        },
        ticks: {
          fill: "transparent",
          size: 1,
          stroke: "transparent"
        },
        tickLabels: baseLabelStyles
      }
    },
    baseProps
  ),
  bar: assign(
    {
      style: {
        data: {
          fill: charcoal,
          padding: 8,
          strokeWidth: 0
        },
        labels: baseLabelStyles
      }
    },
    baseProps
  ),
  boxplot: assign(
    {
      style: {
        max: {
          padding: 8,
          stroke: charcoal,
          strokeWidth: 1
        },
        maxLabels: baseLabelStyles,
        median: {
          padding: 8,
          stroke: charcoal,
          strokeWidth: 1
        },
        medianLabels: baseLabelStyles,
        min: {
          padding: 8,
          stroke: charcoal,
          strokeWidth: 1
        },
        minLabels: baseLabelStyles,
        q1: {
          padding: 8,
          fill: gray
        },
        q1Labels: baseLabelStyles,
        q3: {
          padding: 8,
          fill: gray
        },
        q3Labels: baseLabelStyles
      },
      boxWidth: 20
    },
    baseProps
  ),
  candlestick: assign(
    {
      style: {
        data: {
          stroke: charcoal,
          strokeWidth: 1
        },
        labels: centeredLabelStyles
      },
      candleColors: {
        positive: "#ffffff",
        negative: charcoal
      }
    },
    baseProps
  ),
  chart: baseProps,
  errorbar: assign(
    {
      borderWidth: 8,
      style: {
        data: {
          fill: "transparent",
          stroke: charcoal,
          strokeWidth: 2
        },
        labels: centeredLabelStyles
      }
    },
    baseProps
  ),
  group: assign(
    {
      colorScale: colors
    },
    baseProps
  ),
  legend: {
    colorScale: colors,
    gutter: 10,
    orientation: "vertical",
    titleOrientation: "top",
    style: {
      data: {
        type: "circle"
      },
      labels: baseLabelStyles,
      title: assign({}, baseLabelStyles, { padding: 5 })
    }
  },
  line: assign(
    {
      style: {
        data: {
          fill: "transparent",
          stroke: charcoal,
          strokeWidth: 2
        },
        labels: centeredLabelStyles
      }
    },
    baseProps
  ),
  pie: {
    style: {
      data: {
        padding: 10,
        stroke: "transparent",
        strokeWidth: 1
      },
      labels: assign({}, baseLabelStyles, { padding: 20 })
    },
    colorScale: colors,
    width: 400,
    height: 400,
    padding: 50
  },
  scatter: assign(
    {
      style: {
        data: {
          fill: charcoal,
          stroke: "transparent",
          strokeWidth: 0
        },
        labels: centeredLabelStyles
      }
    },
    baseProps
  ),
  stack: assign(
    {
      colorScale: colors
    },
    baseProps
  ),
  tooltip: {
    style: assign({}, centeredLabelStyles, {
      padding: 5,
      pointerEvents: "none"
    }),
    flyoutStyle: {
      stroke: charcoal,
      strokeWidth: 1,
      fill: "#f0f0f0",
      pointerEvents: "none"
    },
    cornerRadius: 5,
    pointerLength: 10
  },
  voronoi: assign(
    {
      style: {
        data: {
          fill: "transparent",
          stroke: "transparent",
          strokeWidth: 0
        },
        labels: assign({}, centeredLabelStyles, {
          padding: 5,
          pointerEvents: "none"
        }),
        flyout: {
          stroke: charcoal,
          strokeWidth: 1,
          fill: "#f0f0f0",
          pointerEvents: "none"
        }
      }
    },
    baseProps
  )
};

export {
  CustomVictoryTheme,
  GlobalStyles
}

