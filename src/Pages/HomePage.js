import React from 'react'
import styled from 'styled-components'
import Particle from '../Components/Particles'
import profileInfo from '../data/profile.json'
import { Facebook, Github, Linkedin } from 'grommet-icons'

const H1 = styled.h1`
    color: var(--white-color);
    font-size: 3rem;
    display: flex;
    justify-content: center;
`
const Note = styled.p`
    font-size: 1rem;
    text-align: center;
    display: flex;
    justify-content: center;
`
const SocialNetworkContainer = styled.div`
    display: block;
    margin-top: 0.8rem;
    margin-left: 35%;
    width: 30%;
    display: flex;
    justify-content: space-evenly;
`
const HomePageContainer = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    .p-particles-js {
        position: absolute;
        width: inherit;
        height: inherit;
        top: 0;
        left: 0;
    }
`
const InfoBlock = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
const HomePage = () => {
    const { name, desciption, fb_link, github_link, linkedin_link } =
        profileInfo
    return (
        <HomePageContainer>
            <div className="p-particles-js">
                <Particle />
            </div>
            <InfoBlock>
                <H1>Hi I'm {name}</H1>
                <Note>{desciption}</Note>
                <SocialNetworkContainer>
                    <Facebook onClick={() => window.open(fb_link, '_blank')} />
                    <Github
                        onClick={() => window.open(github_link, '_blank')}
                    />
                    <Linkedin
                        onClick={() => window.open(linkedin_link, '_blank')}
                    />
                </SocialNetworkContainer>
            </InfoBlock>
        </HomePageContainer>
    )
}

export default HomePage
