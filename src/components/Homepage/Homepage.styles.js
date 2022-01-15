import styled, { css } from 'styled-components';

export const StyledApp = styled.main( (isDarkMode) => {
    return css`
        background-color: ${isDarkMode ? 'red' : '#fafafa'};
        margin: 0 auto;
        width: 80%;
    `
});

