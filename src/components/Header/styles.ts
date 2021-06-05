import styled from 'styled-components';

export const Container = styled.div`
    background: var(--green);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        color: var(--greenDark);
        font-weight: bold;
        font-style: italic;
    }

    div {
        
        button {
        font-size: 1rem;
        color: #fff;
        background: var(--greenDark);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }
        
        & + button {
            margin-left: 10px;
        }

        & + :last-child {
            color: #fff;
            background: transparent;
        }

        }
    }
`;

export const ButtonOut = styled.button`
    position: relative;
    margin-top: 1rem;
    color: #fff;
    background: transparent;
    border: 0;
`