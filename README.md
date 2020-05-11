# Managing Risk in Your Competitive Baking Flavor Portfolio
**Created by Stacy Tao, Ria Garg, Tian Low, and Rounak Bera**

This repository contains the code for our data visualization of *The Great British Bake Off*, which is hosted [here](https://rounakbera.github.io/gbbo-riskiness/).


## Introduction 

Interest in baking and binge watching television during the COVID-19 quarantine has increased exponentially. A perfect intersection of this is the BBC show *The Great British Bake Off* (*GBBO*), a baking competition where home bakers compete to be named the UK’s best. We’re all avid fans of the show, and we thought it would be interesting to analyze some key questions: 
* How do the specific flavors that a baker chooses increase their chances of victory?
* How do the risks that a baker takes affect their performance?


## Related Work

We saw two prior data analyses of *GBBO* that we found quite interesting: Mark Longair’s [Great British Bake Off Visualizations](https://longair.net/blog/2017/11/21/great-british-bake-off-visualizations/), and Nick Ahamed’s [Visualizing the Great British Bake Off](https://medium.com/analytics-vidhya/analyzing-the-great-british-bake-off-part-1-ffcdf3791bf3). 
We’re diverging from their work by analyzing the specific flavor combinations and that bakers choose to use and the riskiness involved in doing so.


## Methodology

### Data Source

All of the data on riskiness, performance, and flavors used was hand-collected from series 4-6 of *GBBO* (collections 1-3 on [Netflix](https://www.netflix.com/title/80063224)).

### Metrics

**Flavors** were recorded based on specific flavors labelled in the storybook image for each bake, and when bakers told the judges which flavors they put in their bakes.
**Performance** was measured on a trichotomous (+/0/-) scale where judges stated that bakes were good, neutral, or bad. The judge’s discussion on standing after each challenge served as a benchmark for where bakers would be rated on this scale.
**Riskiness** was measured on a dichotomous (T/F) scale where judges explicitly stated that bakes were risky. If the judges did not note anything peculiar about the bake, the bake was labelled as not risky.

### Analysis

We made risk and flavor scores for each baker: the average risk value and number of flavors used for each bake. Regressions were then calculated for the graphs–quadratic for the risk graphs and linear for the flavor count graphs, to emphasize the graph’s trends. 

### Limitations

Our main limitation is qualitative collection of data. Most of our flavor data is taken from the bakers’ explanations of their dishes, so they may not be accurate in terms showing every single ingredient. Some flavors are also more ambiguous identifiers (e.g. “citrus”, “mixed berries”). Furthermore, riskiness is determined by clips of the bakers’ and judges’ perceptions of their dishes. Lastly, categorization of riskiness and performance cannot directly show the nuances of judges’ opinions.

In addition, judges’ bias may influence our grading data, as certain judges may have predilections for certain ingredients or styles of cooking.

Survivorship bias is also present, as bakers who stayed in the competition longer contributed more ingredients and dishes to the overall dataset.


## Design

We wanted to create a data-based narrative, so we created a storyboard with planned text and visualizations. While storytelling remained an integral part of our visualization, some animation decisions were abandoned, and the ordering of visualizations changed often. For example, instead of using flavor barcharts to animate into the flavor scatterplot, we used a zoom animation to naturally indicate that interactivity was possible.


## Implementation

To accomplish this, we used [Victory](https://formidable.com/open-source/victory/) and [React-Scrollama](https://github.com/jsonkao/react-scrollama), as well as some other libraries such as [Material UI](https://material-ui.com/) and [rc-slider](https://github.com/schrodinger/rc-slider). Scrollama assisted the narrative goal by giving a framework to move through the content. Victory allowed us to visualize our data in a React environment. At first, we used simple D3 for our data visualization, but there were not many frameworks that hooked D3 into React, so we decided to go with Victory, as it is better documented and achieved our goals in a similar way.


## Discussion

We showed our work to several people, including friends and classmates; most people thought it was a fun visualization. However, we noticed that some people focused more on the visuals than the text, which led us to the realization that our images and visualizations must independently tell a story. Our project is light-hearted and targeted towards anyone interested in baking, reality TV, or just pretty visualizations. Some people did seem to be confused about our purpose, but most viewers understood that it is meant purely for entertainment and exploratory use, so we were satisfied by our work and overall reception. 


## Future Work

Additionally, we would like to expand our data set to include all seasons. We could also do an exploration into all the different biases involved, including the judge’s inclination or distaste for certain flavors. For example, Mary loves bakes with alcohol, and Paul dislikes pomegranate. We would also love to do an exploration into flavor combinations and where they come from, like regional influences.
Finally, we developed the site on Google Chrome, so we would like to extend compatibility to all browsers and mobile screens. 


## Acknowledgements

We would like to thank Professor Agnes Chang for giving us a platform to do this project as part of her Spring 2020 Data Visualization class, and of course the *Great British Bake Off* for entertaining us during quarantine. 
