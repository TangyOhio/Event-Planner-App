import styled from 'styled-component';
import ColorPalette from './ColorPalette';

export const HomeBasic = styled.homeb`
  padding: ${props => props.padding || '10px' };
  background-color: ${props => props.backgroundColor || ColorPalette.lightBlue}
  text-align: center;
`
export const EventsBasic = styled.eventb`
  padding: ${props => props.padding || '10px' };
  background-color: ${props => props.backgroundColor || ColorPalette.lightBlue}
  text-align: center;
`
export const UserBasic = styled.userb`
  padding: ${props => props.padding || '10px' };
  background-color: ${props => props.backgroundColor || ColorPalette.lightBlue}
  text-align: center;
`
export const AdminBasic = styled.td`
  padding: ${props => props.padding || '10px' };
  background-color: ${props => props.backgroundColor || ColorPalette.lightBlue}
  text-align: center;
`


export default GeneralStyles;