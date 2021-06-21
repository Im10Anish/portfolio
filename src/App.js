import React from 'react'
import styled from 'styled-components'
import Sidebar from './Components/Sidebar'

const App = () => {
    return (
        <div>
            <Sidebar />
            <MainContainer />
        </div>
    )
}

const MainContainer = styled.main`
    position: relative;
    margin-left: 16.3rem;
    min-height: 100vh;
    background-color: red;
`
export default App
