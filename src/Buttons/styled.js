import styled from "styled-components";

export const ButtonsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-size: 14px; 
}
`;

export const Button = styled.button`
    color: hsl(180, 100%, 25%);
    border: none;
    background: transparent;
    transition: 0.3s;
    
    &:hover {
            color: hsl(180, 100%, 30%);
        }

    &: active: {
        color: hsl(180, 100%, 35%);
    }

    &: disabled {
        color: #ccc;
}

@media (max-width: 767px) {
        flex-basis: 100%;
        margin: 10px;
    }
`;
