import styled, { css } from 'styled-components';

export const Button = styled.button(() => {
    return css`
        font-size: 14px;
    `;
});

export const StyledHeader = styled.header(() => {
    return css`
        display: flex;
        font-size: 14px;
        justify-content: space-between;
        padding: 8px 0;
    `;
});
