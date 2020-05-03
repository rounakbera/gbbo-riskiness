import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    background-color: white;
  }

  span {
	color: crimson;
	font-family: 'Philosopher', sans-serif;
	font-size: 3.5rem;
	@media (max-width: 900px) {
		font-size: 2.8rem;
	}
  }

  p {
    font-family: Muli, sans-serif;
    font-size: 1.5rem;
  }
`

export default GlobalStyles