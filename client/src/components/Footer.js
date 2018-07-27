import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Accordion, Grid, Container } from 'semantic-ui-react'
import styled from 'styled-components'

class Footer extends React.Component {
  state = { activeIndex: 0 }
  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index
    this.setState({ activeIndex: newIndex })
  }
  render() {
    const { activeIndex } = this.state
    return (
      <BackgroundColor>
        <DividerTop />
        <Grid columns={1}>
          <PaddedRow>
            <Grid.Column only='computer tablet'>
              <Menu.Item>
                <br />
                <Grid verticalAlign='top' columns={3} divided='vertically'>
                  <Grid.Row>
                    <Grid.Column>
                      <FooterTitle>CONTACT US</FooterTitle>
                      <RedLink to='/contact'>
                        <FooterAddress>
                          DevPoint Studios
                            <br />
                          370 300 E
                            <br />
                          Salt Lake City, UT 84111
                            <br />
                          (801) 448-7240
                            <br />
                          info@devpointlabs.com
                          </FooterAddress>
                      </RedLink>
                    </Grid.Column>
                    <Grid.Column>
                      <FooterTitle>COMPANY</FooterTitle>
                      <br />
                      <RedLink to='/blog'>Blog</RedLink>
                      <br />
                      <RedLink to='/services'>Services</RedLink>
                      <br />
                      <RedLink to='/work'>Work</RedLink>
                      <br />
                      <RedLink to='/contact'>Contact</RedLink>
                    </Grid.Column>
                    <Grid.Column >
                      <FooterTitle>COMMUNITY</FooterTitle>
                      <br />
                      <RedALink href='/dpl_community'>DPL Community</RedALink>
                      <br />
                      <RedALink href="//twitter.com/devpointlabs" target="_blank">Twitter</RedALink>
                      <br />
                      <RedALink href="https://www.facebook.com/DevPointLabs" target="_blank">Facebook</RedALink>
                      <br />
                      <RedALink href="https://www.instagram.com/devpointlabs" target="_blank">Instagram</RedALink>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <hr />
                <Grid>
                  <Grid.Row className='bottom-footer'>
                    <Grid.Column width={4}>
                      <p>© {(new Date().getFullYear())} DevPoint Studios</p>
                    </Grid.Column>
                    <Grid.Column width={12} textAlign='right'>
                      <RedLink to='/terms-of-service'>Terms of Use</RedLink> | <RedLink to='privacy-policy'>Privacy Policy</RedLink> | <FooterText>Designed and Developed by DevPoint Studios</FooterText>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Menu.Item>
            </Grid.Column>
            <Grid.Column only='mobile'>
              <Menu.Item >
                <Container>
                  <br />
                  <Accordion fluid>
                    <ATitle active={activeIndex === 1} index={1} onClick={this.handleClick}>
                      <FooterTitle> Contact Us </FooterTitle>
                    </ATitle>
                    <Accordion.Content active={activeIndex === 1}>
                      <RedLink to='/contact'>
                        DevPoint Studios
                          <br />
                        370 300 E
                          <br />
                        Salt Lake City, UT 84111
                          <br />
                        (801) 448-7240
                          <br />
                        info@devpointlabs.com
                      </RedLink>
                    </Accordion.Content>
                    <hr />
                    <ATitle active={activeIndex === 2} index={2} onClick={this.handleClick}>
                      <FooterTitle> Company </FooterTitle>
                    </ATitle>
                    <Accordion.Content active={activeIndex === 2}>
                      <RedLink to='/blog'>Blog</RedLink>
                      <br />
                      <RedLink to='/services'>Services</RedLink>
                      <br />
                      <RedLink to='/work'>Work</RedLink>
                      <br />
                      <RedLink to='/contact'>Contact</RedLink>
                    </Accordion.Content>
                    <hr />
                    <ATitle active={activeIndex === 3} index={3} onClick={this.handleClick}>
                      <FooterTitle> Community </FooterTitle>
                    </ATitle>
                    <Accordion.Content active={activeIndex === 3}>
                      <RedALink href='/dpl_community'>DPL Community</RedALink>
                      <br />
                      <RedALink href="//twitter.com/devpointlabs" target="_blank">Twitter</RedALink>
                      <br />
                      <RedALink href="https://www.facebook.com/DevPointLabs" target="_blank">Facebook</RedALink>
                      <br />
                      <RedALink href="https://www.instagram.com/devpointlabs" target="_blank">Instagram</RedALink>
                    </Accordion.Content>
                    <hr />
                  </Accordion>
                  <p>© {(new Date().getFullYear())} DevPoint Studios</p>
                  <RedLink to='/terms-of-service'> Terms of Use</RedLink> |
                  <RedLink to='privacy-policy'> Privacy Policy</RedLink> |
                  <FooterText> Designed and Developed by DevPoint Studios</FooterText>
                </Container>
              </Menu.Item>
            </Grid.Column>
          </PaddedRow>
        </Grid>
      </BackgroundColor>
    )
  }
}

const PaddedRow = styled(Grid.Row)`
  margin-left: 40px;
  margin-right: 40px;
`

const ATitle = styled(Accordion.Title)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const RedLink = styled(Link)`
  color: #818285;
  &:hover{
    color: #A32B30;
  }
`

const RedALink = styled.a`
  color: #818285;
  &:hover{
    color: #A32B30 ;
  }
`

const FooterAddress = styled.p`
  color: #818285;
  text-align: left;
  font-size: 10pt;
  line-height: 20px;
  &:hover{
    color: #A32B30; 
  }
`

const FooterTitle = styled.p`
  font-size: 12pt;
  color: white;
`

const FooterText = styled(FooterTitle)`
  font-size: 11pt;
  color: #818285;
`

const BackgroundColor = styled.div`
  background-color: #323332;
`

const DividerTop = styled.div`
 border-top: 2px solid;
 border-color: white;
`

export default Footer
