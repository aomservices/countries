import React, { useState } from 'react';
import { Button, StyledHeader } from './Header.styles';

export const Header: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    const handleDarkMode = () => setIsDarkMode(!isDarkMode);

    return (
        <StyledHeader>
            <h1>Where in the world</h1>
            <Button onClick={handleDarkMode}>
                <span>Dark Mode</span>
            </Button>
        </StyledHeader>
    )
}