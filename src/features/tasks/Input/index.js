import styled from "styled-components";

export default styled.input`
    flex-grow: 4;
    margin-right: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    margin-left: 20px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        margin: 0 0 10px;
        width: 90%;
    }
`;