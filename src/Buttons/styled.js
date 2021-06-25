import styled from "styled-components";

export const ButtonsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-size: 14px; 
}
`;

export const Button = styled.button`
    color: ${({ theme }) => theme.color.teal};
    border: none;
    background: transparent;
    transition: 0.3s;
    
    &:hover {
            color: ${({ theme }) => theme.color.lightTeal};;
        }

    &: active: {
        color: ${({ theme }) => theme.color.activeTeal};;
    }

    &: disabled {
        color: ${({ theme }) => theme.color.disabled};
}

@media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        flex-basis: 100%;
        margin: 10px;
    }
`;
