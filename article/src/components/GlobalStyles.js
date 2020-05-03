import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import VictoryTheme from 'victory';
import { assign } from 'lodash';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: white;
  }

  span {
	color: crimson;
	font-family: 'Philosopher', sans-serif;
    font-size: 3.5rem;
    font-weight: 700;
	@media (max-width: 900px) {
		font-size: 2.8rem;
	}
  }

  p {
    font-family: Muli, sans-serif;
    font-size: 1.5rem;
  }
  
  h2 {
    color: crimson;
    font-family: 'Philosopher', sans-serif;
    font-size: 2rem;
  }

  h3 {
    font-weight: 700;
	color: brown;
    font-family: Muli, sans-serif;
    font-size: 2rem;
  }
`

const CurrentVictoryTheme = () => {
    const colors = [
        "#252525",
        "#525252",
        "#737373",
        "#969696",
        "#bdbdbd",
        "#d9d9d9",
        "#f0f0f0"
      ];
      const charcoal = "#252525";
      const grey = "#969696";
      
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
      const theme = {
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
                fill: grey
              },
              q1Labels: baseLabelStyles,
              q3: {
                padding: 8,
                fill: grey
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

    return theme
}

export {
    CurrentVictoryTheme,
    GlobalStyles
}

