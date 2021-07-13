import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const List = styled.ul`
display: flex;
justify-content: center;
background-color: ${({ theme }) => theme.color.teal};
list-style: none;
margin: 0;
`;

export const Item =styled.li`
margin: 20px;
`;

const activeClassName = "link-active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
color: ${({ theme }) => theme.color.white};
text-decoration: none;

    &.${activeClassName} {
        font-weight: bold;;
    }

    &:hover {
        text-decoration: underline;
       
    }
`;



