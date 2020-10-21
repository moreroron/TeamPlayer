import styles from 'styled-components';

export const colors = {
    white: '#FFFFFF',
    dark: '#413A61',
    grey: '#F4F6FA',
    blue: '#9CB7EC',
    blue_light: '#C2CFEA',
    blue_lighter: '#F9FBFE',
    blue_hover: '#E6EEFA'
};

export const shadows = {
    main: '0px 0px 2px 1px rgba(0, 0, 0, 0.07)'
};

export const Table = styles.table`
    width: 100%;
    margin-top: 3rem;
    text-align: right;
    border-collapse: collapse;

    & tbody {
        box-shadow: ${shadows.main};
    }

    & tr {
        height: 2rem;

        :nth-child(odd) td {
            background-color: ${colors.white};
        }

        :nth-child(even) td {
            background-color: ${colors.blue_lighter};
        }

        & th, td {
            padding: 0.5rem;
        }
        
        & th {
            font-weight: 600;
        }

        :hover td {
            background-color: ${colors.blue_hover};
            cursor: pointer;
        }
    }
`;

export const Button = styles.button`
    height: 2.5rem;
    padding: 0 2rem;
    border-radius: 3rem;
    border: none;
    background-color: ${colors.blue};
    color: ${colors.white};
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
`