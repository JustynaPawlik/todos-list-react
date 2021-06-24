import styled from "styled-components";

export const SectionElement = styled.section`
    margin: 10px 0;
    background-color: #fff;
    box-shadow: 0 0 5px #ddd;
    }
`;

export const SectionHeader = styled.header`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin: 0;
    font-size: 22px;
    border-bottom: 1px solid rgb(240, 236, 236);
}

@media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const SectionTitle = styled.h2`
font-size: 22px;
}

@media (max-width: 767px) {
        grid-template-columns: 1fr;
        padding-bottom: 20px;
    }
`;

export const SectionBody = styled.div`
    padding: 20px;
}
`;