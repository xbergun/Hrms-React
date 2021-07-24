import React, { useEffect, useState } from "react";
import EmployeersService from "../services/EmployeersService";
import { AgGridReact, AgGridColumn } from "ag-grid-react";

function EmployeersList() {
  const [employeers, setEmployeers] = useState([]);

  useEffect(() => {
    let employeersService = new EmployeersService();
    employeersService
      .getEmployeers()
      .then((result) => setEmployeers(result.data));
  },[]);

  return (
    
    
     
    <div className="ag-theme-alpine" style={{ height: 200, width: 800, marginLeft:150}}>
{/* {employeers.map((employeer) => (
  <Button color="red" as={NavLink} to={`/Employeers/${employeers.id}`}> See Detail </Button>
  <Button color="red"><Link to={`/Cv/${cv.id}`}><b className="text-color">See Detail</b></Link>  </Button>
          ))} */}
    
    

<AgGridReact rowData={employeers}>
  <AgGridColumn
    field="id"
    sortable={true}
    filter={true}
    checkboxSelection={true}
  ></AgGridColumn>
  
  <AgGridColumn
    field="firstName"
    sortable={true}
    filter={true}
   
  ></AgGridColumn>
  <AgGridColumn
    field="lastName"
    sortable={true}
    filter={true}
  ></AgGridColumn>
   <AgGridColumn
    field="position_id"
    sortable={true}
    filter={true}
  ></AgGridColumn>

</AgGridReact>


    
    
    
    
    
    
      {/* <Table>
        <Table.Header>
          <Table.Row>
          <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Position Id</Table.HeaderCell>
            <Table.HeaderCell>Application</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body >
          {employeers.map((employeer) => (
            <Table.Row key={employeer.id}>
               <Table.Cell>{employeer.id}</Table.Cell> 
              <Table.Cell>{employeer.firstName}</Table.Cell>
              <Table.Cell>{employeer.lastName}</Table.Cell>
              <Table.Cell>{employeer.position_id}</Table.Cell>
              <Table.Cell><Table.Cell ><Button as={NavLink} to={"/JobEmployeersDetail"}> See Detail </Button></Table.Cell></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table> */}
    </div>
  );
}

export default EmployeersList;