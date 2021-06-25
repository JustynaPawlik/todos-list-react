import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style-type: none;
    margin: 0 10px;
    padding: 10px;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    padding: 10px;
    grid-gap: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.color.gray};
    margin-bottom: 10px;
    align-items: center;
    word-break: break-all;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    padding: 0;
    width: 30px;
    height: 30px;
    color: ${({ theme }) => theme.color.white};
    border: none;
    transition: background 0.3s;

    ${({ toggleDone }) => toggleDone && css`
        background: ${({ theme }) => theme.color.green};

        &:hover {
            background: ${({ theme }) => theme.color.lightGreen};
        }
    `}

    ${({ remove }) => remove && css`
        background: ${({ theme }) => theme.color.red};

        &:hover {
            background: ${({ theme }) => theme.color.lightRed};
        }
    `}
`;