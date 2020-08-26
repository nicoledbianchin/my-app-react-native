import React from 'react'
import { View, Text } from 'react-native';
import styled from 'styled-components';

const StyledHeader = styled(View)`
    background-color: #AFEEEE;
    height: 80px;
`

const Header = () => {
    return (
        <>
            <StyledHeader>
                <Text>
                    My Notes
                </Text>
            </StyledHeader>
        </>
    )
}

export default Header;