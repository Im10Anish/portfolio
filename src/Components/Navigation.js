import React from 'react'
import styled from 'styled-components'
import { Analytics, Clock } from 'grommet-icons'
import { NavLink } from 'react-router-dom'

const navigationIcons = {
    home: <Analytics color="white" />,
    about: <Clock color="white" />,
    resume: <Clock color="white" />,
    portfolio: <Clock color="white" />,
    contact: <Clock color="white" />,
}

const NavigationItem = styled.li`
    width: 100%;
    text-align: center;
`
const Label = styled(NavLink)`
    color: var(--white-color);
    display: block;
    padding: 0.6rem 0;
    position: relative;
    z-index: 4;
    &:hover {
        cursor: pointer;
    }
    &:before {
        background-color: var(--primary-color);
        position: absolute;
        content: '';
        bottom: 0;
        left: 0;
        width: 0%;
        height: 50%;
        transition: all 0.4s cubic-bezier(1, -0.2, 0.25, 0.95);
        z-index: 3;
        opacity: 0.2;
    }
    &:hover::before {
        width: 100%;
        height: 100%;
    }
`
const NavigationList = styled.ul``
const SidebarButton = ({ isActive, label, path }) => (
    <NavigationItem>
        <Label isActive={isActive} to={path}>
            {label}
        </Label>
    </NavigationItem>
)

const Navigation = ({ data }) => {
    return (
        <NavigationList gap="medium" responsive={false}>
            {data.map((navigation) => {
                return (
                    <SidebarButton
                        icon={navigationIcons[navigation.icon]}
                        label={navigation.label}
                        path={navigation.path}
                    />
                )
            })}
        </NavigationList>
    )
}

export default Navigation
