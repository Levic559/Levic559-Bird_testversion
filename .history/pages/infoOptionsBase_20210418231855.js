import Banner from '../comps/Banner';
import HamburgerMenu from '../comps/HamburgerMenu';
import styled from 'styled-components';
import React, {useState} from 'react';
import Page from '../comps/Page';
import ChatBubble from '../comps/ChatBubble';
import NavButton from '../comps/NavButton';
import Option from '../comps/Option';

//custom tags for base page
const MainCont = styled.div `
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const UpperLayer = styled.div `
  width: 414px;
  height: 1100px;
  overflow: hidden;
  z-index: 0;
  position: relative;
  left: 212px;
`

const LowerLayer = styled.div`
  width: 414px;
  height: 896px;
  overflow: hidden;
  z-index: -1;
  position: relative;
  right: 202px;
`
const SideBar = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

// for speaker only
const SpeakerContainer = styled.div`
  width: 276px;
  height:221px;
  overflow:hidden;
`

const Speaker = styled.img`
  width: 100%;
  height:100%;

  position:relative;
`

const NavContainer = styled.div`
  position:absolute;
  bottom:255px;
`
const Optioncont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    margin-top: 130px;

    
`





export default function Home() {

  const [menustate, setMenuState] = useState(false);
  var right=0;
  if (menustate === true)
  {
    right=178;
  }


const OpenMenu = () => {
  setMenuState(!menustate);
}

  console.log(menustate, right)
  return (<MainCont>
    <UpperLayer>
      <Page right={right}>

        <Banner text="Take Action" onClick={OpenMenu} />
        
       <Optioncont>
           <div><Option src = "/5.svg" text = "Quiz"/></div> 
           <div><Option src = "/6.svg" text = "Purchase Protection"/></div> 
           <div><Option src = "/7.svg" text = "Donation"/></div> 
           <div><Option src = "/8.svg" text = "Make An Appointment"/></div> 
           <div><Option src = "/9.svg" text = ""/></div> 
        </Optioncont> 
      </Page>

    </UpperLayer>

    <LowerLayer>
      <SideBar>
        <HamburgerMenu />
      </SideBar>
    </LowerLayer>

    

  </MainCont>

  )
}
