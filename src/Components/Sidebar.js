import React from 'react'
import styled from 'styled-components'
import { Avatar, Box, Text } from 'grommet'
import Navigation from './Navigation'
import SidebarData from '../data/sidebar.json'

const SideBarstyled = styled.div`
    width: 16.3rem;
    height: 100vh;
    position: fixed;
    background-color: var(--background-sidebar-color);
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`

const SidebarHeader = ({ avatarSrc, name }) => (
    <Box
        align="center"
        gap="small"
        margin={{ bottom: 'large' }}
        pad="medium"
        style={{
            borderBottom: '1px solid var(--white-color)',
        }}
    >
        <Avatar size="3xl" src={avatarSrc} />
        <Text>{name}</Text>
    </Box>
)

const SidebarFooter = ({ footer }) => (
    <Box
        style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50,
            padding: 30,
            borderTop: '1px solid var(--white-color)',
        }}
    >
        <Text size="xsmall">{footer}</Text>
    </Box>
)

const Sidebar = () => {
    const { avatarIcon, name, navigation, footer } = SidebarData
    return (
        <SideBarstyled>
            <SidebarHeader avatarSrc={avatarIcon} name={name} />
            <Navigation data={navigation} />
            <SidebarFooter footer={footer} />
        </SideBarstyled>
    )
}

export default Sidebar
