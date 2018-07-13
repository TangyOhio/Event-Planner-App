import styled from 'styled-component';
import ColorPalette from './styles/ColorPalette';

//Still working on this. These are all placeholders right now.


export const HomeBasic = styled.hb`
  padding: ${props => props.padding || '10px' };
  background-color: ${props => props.backgroundColor || ColorPalette.lightBlue}
  text-align: center;
`
export const EventsBasic = styled.eb`
  padding: ${props => props.padding || '10px' };
  background-color: ${props => props.backgroundColor || ColorPalette.lightBlue}
  text-align: center;
`
export const UserBasic = styled.ub`
  padding: ${props => props.padding || '10px' };
  background-color: ${props => props.backgroundColor || ColorPalette.lightBlue}
  text-align: center;
`
export const AdminBasic = styled.ab`
  padding: ${props => props.padding || '10px' };
  background-color: ${props => props.backgroundColor || ColorPalette.lightBlue}
  text-align: center;
`


export default GeneralStyles;