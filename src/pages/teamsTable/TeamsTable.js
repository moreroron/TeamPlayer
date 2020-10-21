import React from 'react';
import { useHistory } from 'react-router-dom';
import { Headline } from './style';
import { Table } from '../../styles/global';

const TeamsTable = () => {

    const history = useHistory();
    const handleRowClick = (teamId) => {
        history.push(`teams/${teamId}`);
    }

    const teamsData = [
        { id: 0, name: 'Real Madrid', born: '1999', address: 'Some Address 66, 333' },
        { id: 1, name: 'Barselona', born: '2010', address: 'Other Address 777' },
        { id: 2, name: 'Atletico Madrid', born: '1993', address: 'Another 220 But long for testing' },
    ]

    const rows = teamsData.map((team) => (
        <tr onClick={() => handleRowClick(team.id)} key={team.id}>
            <td>{team.address}</td>
            <td>{team.born}</td>
            <td>{team.name}</td>
        </tr>
    ))

    return (
        <>
        <Headline>ליגת האלופות</Headline>
        <Table>
            <thead>
                <tr>
                    <th>כתובת</th>
                    <th>שנת הקמה</th>
                    <th>שם קבוצה</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </Table>
        </>
    )
};

export default TeamsTable