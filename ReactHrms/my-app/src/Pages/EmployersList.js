import React, { useEffect, useState } from "react";
import EmployersService from "../services/EmployersService";
import { AgGridReact, AgGridColumn } from "ag-grid-react";
import { Button } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

function EmployersList() {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    let employersService = new EmployersService();
    employersService.getEmployers().then((result) => setEmployers(result.data));
  }, []);

  const agbuttonrender = (employers) => {
    return (
      <Button basic color="white" as={NavLink} to={`/Employers/${employers.value}`}>
        See Detail
      </Button>
    );
  };

  return (
    <div>
      <div className="ag-theme-alpine" style={{ height: 400, width: 1000 , marginLeft:70}}>
        <AgGridReact
          rowData={employers}
          frameworkComponents={{
            Agbuttonrender: agbuttonrender,
          }}
        >
          <AgGridColumn
            field="id"
            sortable={true}
            filter={true}
            checkboxSelection={true}
          ></AgGridColumn>
          <AgGridColumn
            field="company_name"
            sortable={true}
            filter={true}
          ></AgGridColumn>
          <AgGridColumn
            field="company_web_adress"
            sortable={true}
            filter={true}
          ></AgGridColumn>
          <AgGridColumn
            field="company_number"
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
      </div>

      {/* <Table color="red"> 
        <Table.Header>
          <Table.Row>
          
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>See Details</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {employers.map((employer) => (
            <Table.Row key={employer.id}>
              <Table.Cell><strong> {employer.company_name}</strong></Table.Cell>
              <Table.Cell><Table.Cell ><Button color="red" as={NavLink} to={`/Employers/${employer.id}`}> See Detail </Button></Table.Cell></Table.Cell>

            </Table.Row>
          ))}
        </Table.Body>
      </Table> */}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default EmployersList;
