import React from 'react';
import { useParams } from 'react-router-dom';
import { Additional, AdditionalBlock, TeamInfo, Title, LinkButton, PlayersTable } from './style';
import { Error } from '../../styles/global';
import useFetchTeams from '../../hooks/useFetchTeams';
import Spinner from '../shared/spinner/Spinner';

const TeamDetails = () => {
  const { teamId } = useParams();

  const { data, error } = useFetchTeams(`http://localhost:3001/teams/${teamId}`);

  if (error) return <Error>{error}</Error>;
  if (!data.squad) return <Spinner />;

  return (
    <>
      <TeamInfo>
        <Title>
          <p>{data.name}</p>
          <img src={data.crestUrl} alt="" />
        </Title>
        <Additional>
          <LinkButton onClick={() => window.location.replace(data.website)}>
            <img src={require('../../images/link.svg')} alt="" />
            לאתר
          </LinkButton>
          <AdditionalBlock>
            <p>:שנת הקמה</p>
            <h1>{data.founded}</h1>
          </AdditionalBlock>
          <AdditionalBlock>
            <p>:כתובת</p>
            <h1>{data.address}</h1>
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
          {data?.squad?.map((player) => (
            <tr key={player.id}>
              <td>{player.shirtNumber || '-'}</td>
              <td>{player.name}</td>
            </tr>
          ))}
        </tbody>
      </PlayersTable>
    </>
  );
};

export default TeamDetails;
