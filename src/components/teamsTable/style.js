import styles from 'styled-components';
import { colors, Table } from '../../styles/global';

export const Headline = styles.div`
    background-color: ${colors.blue};
    height: 3rem;
    color: ${colors.white};
    text-align: center;
    font-weight: 600;
    line-height: 3rem;
    font-size: 1.2rem;
`;

export const AllTeamsTable = styles(Table)`
    @media (max-width: 850px) {
        margin-top: 1rem;
    }
`;
