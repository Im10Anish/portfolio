import React from 'react'
import styled from 'styled-components'
import Sidebar from './Components/Sidebar'
import HomePage from './Pages/HomePage'

const App = () => {
    return (
        <div>
            <Sidebar />
            <MainContainer>
                <HomePage />
            </MainContainer>
        </div>
    )
}

const MainContainer = styled.main`
    position: relative;
    margin-left: 16.3rem;
    min-height: 100vh;
`
export default App
