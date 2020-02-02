import React, { Component } from 'react';
import { isNull } from 'util';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { createGlobalStyle, ThemeProvider} from "styled-components";
import ReactSVG from 'react-svg';
import {Row, Column, MainColors, Button, H1, H2, H3} from "../theme.jsx";
import Twitter from 'src/assets/svg/twitterBrandPrimary.svg';
import Instagram from 'src/assets/svg/instagramBrandPrimary.svg';
import LinkedIn from 'src/assets/svg/linkedinBrandPrimary.svg';

const ContentWrapper = styled(Row)`
    position:relative;
    flex-direction: column;
    flex:1 1 auto;
    width: 100%;
    
    background-repeat: no-repeat;   
    text-align:center;
    word-wrap: break-word;
    @media only screen and (max-width: 720px) {
        padding: 1rem 1rem 0 1rem;
    }
    @media only screen and (min-width: 720px) and (max-width: 960px) {
        padding: 1rem 3rem 0 3rem;
    }
    @media only screen and (min-width: 960px) and (max-width: 1280px) {
        padding: 5rem 9rem 0 9rem;
    }
    
`;
const Item = styled.div`
    margin:auto;
    display:flex;
    margin:2rem 0;
    @media only screen and (max-width: 720px) {
        flex-direction: column;
        flex:1 1 auto;
    }
    
`;
const ItemImage = styled.div`
    width:15.125rem;
    height:15.125rem;
    border-radius:15px;
    background-color: rgba(224, 224, 224, 1);
    @media only screen and (max-width: 720px) {
        margin:auto;
    }
`;
const ItemContent = styled.div`
    padding:0 0 0 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media only screen and (min-width: 720px) and (max-width: 960px) {
        padding:0 0 0 1rem;
    }
    @media only screen and (max-width: 720px) {
        padding:1rem 0;
    }
`;
const Title = styled.div``;
const Name = styled.div`
    color: ${MainColors.brandPrimary};
    text-align: left;
    font-size: 2.75rem;
    font-weight: 500; 
    @media only screen and (max-width: 720px) {
        text-align:center;
    }
`;
const Description = styled.div`
    color: ${MainColors.brandPrimary};
    text-align: left;
    font-size: 1.125rem;
    font-weight: 500; 
    @media only screen and (max-width: 720px) {
        text-align:center;
    }
`;
const ItemText = styled.div`
    font-size: 1rem;
    font-weight: 300;
    text-align: left;
    width:24.7rem;
    color: ${MainColors.gray800};
    @media only screen and (max-width: 720px) {
        width:90%;
        padding:0 0 0 3rem;
    }
`;
const SocialIcons = styled.div`
    display:flex;
    @media only screen and (max-width: 720px) {
        padding:0.5rem 0 0 3rem;
    }
`;
                               

class MainMembers extends Component {
    render() {
        return (
            <React.Fragment>
                <ContentWrapper>
                    <Item>
                        <ItemImage/>
                        <ItemContent>
                            <Title>
                                <Name>Amir Nouri</Name>
                                <Description>Co-Founder, Manager</Description>
                            </Title>
                            <ItemText>
                                Amir is the founder of extopo. the idea popped in his head when he was eating steak one day.<br/> he also loves to eat donuts and spends his free time finding new chat platforms.
                            </ItemText>
                            <SocialIcons>
                                <Link to="#Instagram">
                                    <ReactSVG src={Instagram} svgStyle={{ width: '1.5rem', height: '1.5rem', float: 'right', margin: '0 0.5rem 0.15rem 0', fill:'red' }} />
                                </Link>
                                <Link to="#Twitter">
                                    <ReactSVG src={Twitter} svgStyle={{ width: '1.5rem', height: '1.5rem', float: 'right', margin: '0 0.5rem 0.15rem 0;', fill:MainColors.brandPrimary }} />
                                </Link>
                                <Link to="#LinkedIn">
                                    <ReactSVG src={LinkedIn} svgStyle={{ width: '1.5rem', height: '1.5rem', float: 'right', margin: '0 0.5rem 0.15rem 0;', fill:MainColors.brandPrimary }} />
                                </Link>  
                            </SocialIcons>
                        </ItemContent>
                    </Item>
                    <Item>
                        <ItemImage/>
                        <ItemContent>
                            <Title>
                                <Name>Saman Miraliyari</Name>
                                <Description>Co-Founder, Front-end Developer</Description>
                            </Title>
                            <ItemText>
                                Saman is an all-rounder developer of everything front and back. He will do an instant Henshin by taking off his eyeglasses
                            </ItemText>
                            <SocialIcons>
                                <Link to="#Instagram">
                                    <ReactSVG src={Instagram} svgStyle={{ width: '1.5rem', height: '1.5rem', float: 'right', margin: '0 0.5rem 0.15rem 0', fill:'red' }} />
                                </Link>
                                <Link to="#Twitter">
                                    <ReactSVG src={Twitter} svgStyle={{ width: '1.5rem', height: '1.5rem', float: 'right', margin: '0 0.5rem 0.15rem 0;', fill:MainColors.brandPrimary }} />
                                </Link>
                                <Link to="#LinkedIn">
                                    <ReactSVG src={LinkedIn} svgStyle={{ width: '1.5rem', height: '1.5rem', float: 'right', margin: '0 0.5rem 0.15rem 0;', fill:MainColors.brandPrimary }} />
                                </Link>  
                            </SocialIcons>
                        </ItemContent>
                    </Item>
                    <Item>
                        <ItemImage/>
                        <ItemContent>
                            <Title>
                                <Name>Karim Beiranvand</Name>
                                <Description>Co-Founder, Front-end Developer</Description>
                            </Title>
                            <ItemText>
                                When he is not developing, he dreams about meat and kebab, or attempts to make some and enjoys. He has a tendency to put others to shame in eating. Do not bet with him on food.
                            </ItemText>
                            <SocialIcons>
                                <Link to="#Instagram">
                                    <ReactSVG src={Instagram} svgStyle={{ width: '1.5rem', height: '1.5rem', float: 'right', margin: '0 0.5rem 0.15rem 0', fill:'red' }} />
                                </Link>
                                <Link to="#Twitter">
                                    <ReactSVG src={Twitter} svgStyle={{ width: '1.5rem', height: '1.5rem', float: 'right', margin: '0 0.5rem 0.15rem 0;', fill:MainColors.brandPrimary }} />
                                </Link>
                                <Link to="#LinkedIn">
                                    <ReactSVG src={LinkedIn} svgStyle={{ width: '1.5rem', height: '1.5rem', float: 'right', margin: '0 0.5rem 0.15rem 0;', fill:MainColors.brandPrimary }} />
                                </Link>  
                            </SocialIcons>
                        </ItemContent>
                    </Item>
                    <Item>
                        <ItemImage/>
                        <ItemContent>
                            <Title>
                                <Name>Pegah Rezai-Rad</Name>
                                <Description>Co-Founder, Designer</Description>
                            </Title>
                            <ItemText>
                                A picky designer. When not designing, she makes popcorns or dreams about food. She dreams on working in a restaurant or a food-related startup one day…Which is yet to happen…
                            </ItemText>
                            <SocialIcons>
                                <Link to="#Instagram">
                                    <ReactSVG src={Instagram} svgStyle={{ width: '1.5rem', height: '1.5rem', float: 'right', margin: '0 0.5rem 0.15rem 0', fill:'red' }} />
                                </Link>
                                <Link to="#Twitter">
                                    <ReactSVG src={Twitter} svgStyle={{ width: '1.5rem', height: '1.5rem', float: 'right', margin: '0 0.5rem 0.15rem 0;', fill:MainColors.brandPrimary }} />
                                </Link>
                                <Link to="#LinkedIn">
                                    <ReactSVG src={LinkedIn} svgStyle={{ width: '1.5rem', height: '1.5rem', float: 'right', margin: '0 0.5rem 0.15rem 0;', fill:MainColors.brandPrimary }} />
                                </Link>  
                            </SocialIcons>
                        </ItemContent>
                    </Item>
                </ContentWrapper>  
            </React.Fragment>
        )
    }
}
export default MainMembers;