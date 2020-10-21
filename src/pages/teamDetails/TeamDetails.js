import React from 'react';
import { useParams } from 'react-router-dom';
import { Additional, AdditionalBlock, TeamInfo, Title, LinkButton, PlayersTable } from './style';

const TeamDetails = () => {

    const {teamId} = useParams();

    const team = {
        name: 'Real Madrid',
        founded: '1993',
        address: '75 Drayton Park London N5 1BU',
        link: 'https://www.google.com',
        roster: [
            { id: 0, name: 'Cristiano Ronaldo', shirtNumber: '3' },
            { id: 1, name: 'Leonel Messi', shirtNumber: '7' },
        ]
    };

    const rows = team.roster.map((player) => (
        <tr key={player.id}>
            <td>{player.shirtNumber}</td>
            <td>{player.name}</td>
        </tr>
    ))

    return (
        <>
        <TeamInfo>
            <Title>
                <p>{team.name}</p>
                <img src={require('../../images/sn_facebook.svg')} alt=""/>
            </Title>
            <Additional>
                <LinkButton onClick={() => window.location.replace(team.link)}>
                    <img src={require('../../images/link.svg')} alt=""/>
                    לאתר
                </LinkButton>
                <AdditionalBlock>
                    <p>:שנת הקמה</p>
                    <h1>{team.name}</h1>
                </AdditionalBlock>
                <AdditionalBlock>
                    <p>:כתובת</p>
                    <h1>{team.address}</h1>
                </AdditionalBlock>
            </Additional>
        </TeamInfo>
        <PlayersTable>
            <thead>
                <tr>
                    <th>מספר חולצה</th>
                    <th>שם השחקן</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </PlayersTable>
        </>
    )
};

export default TeamDetails