import styled from "styled-components";

export const FormElement = styled.form`
    display: flex;
    grid-column: 2;
    margin: 10px 0;
    justify-content: space-around;
    align-items: center;
    }

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
        flex-direction: column;
`;

export const FormInput = styled.input`
    flex-grow: 4;
    margin-right: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    margin-left: 20px;
    }

    @media (max-width: 767px) {
        margin: 0 0 10px;
        width: 90%;
    }
`;

export const FormButton = styled.button`
    padding: 10px;
    background-color: hsl(180, 100%, 25%);
    color: #fff;
    border: none;
    transition: 0.3s;
    }

    @media (max-width: 767px) {
        flex-shrink: 0;
        flex-grow: 0;
        margin-bottom: 10px;
        width: 90%;
    }

    &:hover {
        transform: scale(1.1);
    }
    
    &:active {
        background: hsl(180, 100%, 35%);
    }
`;




