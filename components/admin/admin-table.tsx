import React from 'react';

interface TablaUsuariosProps {
  userFullname: string;
}

const UsersTable: React.FC<TablaUsuariosProps> = ({ userFullname }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre Completo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{userFullname}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default UsersTable;
