import React from 'react';
import { useHistory } from 'react-router-dom';
import { Headline } from './style';
import { Table } from '../../styles/global';
import useFetchTeams from '../../hooks/useFetchTeams';
import Spinner from '../shared/spinner/Spinner';

const TeamsTable = () => {
  const {
    data: { teams },
    error,
  } = useFetchTeams('https://api.football-data.org/v2/competitions/2001/teams');

  const history = useHistory();
  const handleRowClick = (teamId) => {
    history.push(`teams/${teamId}`);
  };

  if (error) return <div>{error}</div>;
  if (!teams) return <Spinner />;

  return (
    <div>
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
          {teams &&
            teams.map((team) => (
              <tr onClick={() => handleRowClick(team.id)} key={team.id}>
                <td>{team.address}</td>
                <td>{team.founded}</td>
                <td>{team.name}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TeamsTable;
