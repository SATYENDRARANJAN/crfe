import { useEffect, useState } from "react";
import styled from "styled-components";
import HeaderImage from '../../assets/moderation/logo.svg'
import UserIcon from '../../assets/moderation/user.svg'
import CustomerThemeConfig from "./CustomerThemeConfig.json";




const Header = ({clientId }) => {
    const themeConfig = CustomerThemeConfig.Themes.filter(theme => theme.clientId === clientId)[0];
    
    
    return (
      <div>
        {themeConfig !== undefined && (
          <Wrapper primaryColor={themeConfig.primaryColor}>
            <ImageHeader
              src={!("icon" in themeConfig) ? HeaderImage : themeConfig.icon}
            ></ImageHeader>
            <HeaderDiv>
              <Title>{themeConfig.header}</Title>
            </HeaderDiv>

            {/* <ButtonTray>
              <Text>{themeConfig.userId}</Text>
              <Icon
                src={UserIcon}
                secondaryColor={themeConfig.secondaryColor}
              ></Icon>
            </ButtonTray> */}
          </Wrapper>
        )}
      </div>
    );
}
 
export default Header;

const Wrapper= styled.div`
    width:100%;
    display:flex;
    // position:fixed;
    // top:0px;
    height:100px;
    color:#fff;
    background :${props => props.primaryColor ? props.primaryColor : "#034c9d"};;
    justify-content:space-between;
    box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.06);

`

const ImageHeader = styled.img`
    display:flex;
    padding:20px;
    max-width:150px;
    max-height:150px;

`
const ButtonTray=styled.div`
    display:flex;
    
`
const Icon=styled.img`
    display: flex;
    padding:30px 20px;
    width: 40px;
    height: 40px;
`

const HeaderDiv=styled.div`
    display: flex;
    flex:auto;
    flex-direction: column;
    height:100%;
    // align-items:center;
    justify-content:center;
`
const Title= styled.div`
    display: flex;
    padding-top: 10px;
    padding-left: 10px;
    font-family:'Open Sans';
    font-size: 30px;
`
const SubTitle= styled.div`
    display: flex;
    padding-top: 10px;
    padding-left: 10px;
    font-family:'Open Sans';


`

const Text=styled.label` 
display: flex;
font-family: "Open Sans";
font-size: 15px;
color: #fff;
padding-left: 50px;
// height:105px;
text-align: left;
justify-content:center;
align-items:center;
`

