import styled, {css} from 'styled-components'
import media, {absolute} from './utilities'

export const WrapperButton = styled.button`
@media only screen and (min-width: 1024px) {
    display: none;
}
position: fixed;
top: 1rem;
${media.tablet`right: 6rem;`}
${media.phone`right: 4rem;`}
${media.smallest`right: 3rem`}
height: 5rem;
width: 2rem;
z-index: 1000;
display: flex;
  border: none;
  outline: none;
  background-color: transparent;
  opacity: .7;
  transition: opacity .3s ease-out;

  &:hover {
      opacity: 1;
      cursor: pointer;
  }
  `;

export const StyledNavButton = styled.div`
position: relative;
align-self: center;
height: 2px;
width: 100%;
border: none;
outline: none;
background-color: ${props => props.theme.black}
border-radius: 5rem;

&::before, &::after {
    content: "";
    ${absolute({})}
    height: 2px;
    width: 100%;
    border-radius: 5rem;
    background-color: ${props => props.theme.black}
    transform-origin: center;
    transition: transform .2s ease;
}

&::before {
transform: translate3d(0, -.5rem, 0);
}
&::after {
transform: translate3d(0, .5rem, 0);
}

${props =>
	props.on &&
	css`
		background-color: #111;

		&::before {
			transform: rotate(45deg);
			background-color: #666;
		}
		&::after {
			transform: rotate(-45deg);
			background-color: #666;
		}
	`}
`;

