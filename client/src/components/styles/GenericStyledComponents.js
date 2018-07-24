import styled from 'styled-components';

//Still working on this. These are all placeholders right now.

export const Wrapper = styled.div`
  border: none !important;
  margin-top: 0% !important;
  display: block;
  max-width: 100%!important;
  text-align: center;
`

export const LargeHeader = styled.h1`
  border: none;
  margin: 3em 0em 5em 0em;
  padding: 3em;
  font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
  font-weight: 700;
  line-height: 1.28571429em;
  text-transform: none;
  color: rgba(0,0,0,.87);
`

export const PageSubHeader = styled.h2`
  font-size: 2em;
  margin: 0 0 1em;
  line-height: 1.4285em;
  line-height: 1em;
`

export const PrimaryButton = styled.button`
  background-color: #2185d0;
  color: #fff;
  text-shadow: none;
  background-image: none;
  font-size: 1.42857143rem;
  cursor: pointer;
`

export const SecondaryButton = styled.button`
  cursor: pointer;
  display: inline-block;
  min-height: 1em;
  outline: 0;
  border: none;
  vertical-align: baseline;
  background: #e0e1e2 none;
  color: rgba(0,0,0,.6);
  font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
  margin: 0 .25em 0 0;
  padding: .78571429em 1.5em .78571429em;
`

export const CalendarContainer = styled.section`
  padding: 8em 0em;
  border-bottom: none;
  margin: 0;
  border-radius: 0;
  background: none transparent;
  border: none;
  box-shadow: none;
  font-size: 1rem;
`

export const CalendarStyle = styled.div`
  height: 70vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`

export const EventCards = styled.div`
  width: calc(33.33333333% - 2em);
  margin-left: 1em;
  margin-right: 1em;
  font-size: 1em;
  display: flex;
  margin: .875em .5em;
  float: none;
  max-width: 100%;
  position: inherit;
  flex-direction: column;
  min-height: 0;
  background: white;
  padding: 0;
  border: none;
  border-radius: 1.2em;
  -webkit-box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5
`

export const CardButton = styled.button`
  background-color: #21ba45;
  color: #fff;
  text-shadow: none;
  background-image: none;
`
