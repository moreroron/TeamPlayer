import styles from 'styled-components';
import { Button, Table, colors } from '../../styles/global';

export const TeamInfo = styles.div`
    margin-top: 2rem;
`;

export const Title = styles.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${colors.blue_light};
    align-items: center;

    & p {
        font-size: 1.5rem;
        font-weight: 600;
    }

    & img {
        width: 4rem;
        height: 4rem;
    }
`;

export const Additional = styles.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    align-items: center;
`;

export const AdditionalBlock = styles.div`
    text-align: right;
    
    & h1 {
        font-size: 1.2rem;
        font-weight: 600;
        margin: 0;
    }

    & p {
        margin: 1rem 0 0.2rem 0;
        font-weight: 400;
        margin: 0;
    }
`;

export const LinkButton = styles(Button)`
    display: flex;
    align-items: center;
    transition: all 0.2s ease;

    img {
        height: 1rem;
        margin-right: 0.5rem;
    }

    :hover {
        background-color: ${colors.blue_light};
    }

    :focus {
        outline: none;
    }
`;

export const PlayersTable = styles(Table)`
    tr {
        pointer-events: none;
        }
    }
`;
