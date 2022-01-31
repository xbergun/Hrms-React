import React, { useEffect, useState } from "react";
import { AgGridReact, AgGridColumn } from "ag-grid-react";
import UsersService from "../services/UsersService";
import { NavLink, } from "react-router-dom";
import { Button } from "semantic-ui-react";

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let userService = new UsersService();
    userService.getUsers().then((result) => setUsers(result.data));
  }, []);

  const aggridbutton = (users) =>{
    return <Button basic color="black" as={NavLink} to={`/users/${users.value}`}>
    See Detail
  </Button>
  }

  return (
    <div className="ag-theme-alpine" style={{ height: 500, width: 1000 , marginLeft:80}}>

        <AgGridReact rowData={users}  frameworkComponents={{
            Agbuttonrender: aggridbutton,
          }}>
          <AgGridColumn
            field="id"
            sortable={true}
            filter={true}
            checkboxSelection={true}
          ></AgGridColumn>
          <AgGridColumn
            field="name"
            sortable={true}
            filter={true}
          ></AgGridColumn>
          <AgGridColumn
            field="username"
            sortable={true}
            filter={true}
          ></AgGridColumn>
          <AgGridColumn
            field="email"
            sortable={true}
            filter={true}
          ></AgGridColumn>
           <AgGridColumn
          field="id"
          headerName=""
          sortable={true}
          filter={true}
          cellRenderer="Agbuttonrender"
        ></AgGridColumn>
        </AgGridReact>


      {/* <Table inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>id</Table.HeaderCell>
            <Table.HeaderCell>E-Mail</Table.HeaderCell>
            <Table.HeaderCell>Password</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {users.map((user) => (
            <Table.Row key={user.id}>
              <Table.Cell>{user.id}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>{user.password}</Table.Cell>
    
            </Table.Row>
          ))}
        </Table.Body>
      </Table> */}
          </div>
  );
}

export default UsersList;
