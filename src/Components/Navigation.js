import React from 'react'
import { Box, Nav } from 'grommet'
import styled from 'styled-components'
import { Analytics, Clock } from 'grommet-icons'
import { NavLink } from 'react-router-dom'

const navigationIcons = {
    home: <Analytics />,
    about: <Clock />,
    resume: <Clock />,
    portfolio: <Clock />,
    contact: <Clock />,
}

const NavigationItem = styled(NavLink)`
    color: var(--white);
`

const SidebarButton = ({ icon, label, path }) => (
    <Box direction="row" gap="xsmall" pad="xsmall">
        {icon} <NavigationItem to={path}>{label}</NavigationItem>
    </Box>
)

const Navigation = ({ data }) => {
    return (
        <Nav gap="medium" responsive={false}>
            {data.map((navigation) => {
                return (
                    <SidebarButton
                        icon={navigationIcons[navigation.icon]}
                        label={navigation.label}
                        path={navigation.path}
                    />
                )
            })}
        </Nav>
    )
}

export default Navigation
