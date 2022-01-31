import React from "react";
import { Button } from "semantic-ui-react";
import { AgGridReact, AgGridColumn } from "ag-grid-react";
import { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import JobAdvertisementService from "../services/JobAdvertisementService";

export default function JobAdvertsList() {

  const [JobAdverts, setJobAdverts] = useState([]);

  useEffect(() => {
    let jobAdvertsService = new JobAdvertisementService();
    jobAdvertsService
      .getAdvertisement()
      .then((result) => setJobAdverts(result.data));
  }, []);

  const aggridbutton = (JobAdverts) =>{
    return <Button basic color="black" as={NavLink} to={`/JobAdverts/${JobAdverts.value}`}>
    Detayını Gör
  </Button>
  }
  return (
    <div className="ag-theme-alpine" style={{ height: 800, width: 1000, marginLeft:50}}>
       <AgGridReact rowData={JobAdverts}  frameworkComponents={{
            Agbuttonrender: aggridbutton,
          }}>
          <AgGridColumn
            field="id"
            sortable={true}
            filter={true}
            checkboxSelection={true}
          ></AgGridColumn>
          <AgGridColumn
            field="employer"
            sortable={true}
            filter={true}
          ></AgGridColumn>
          <AgGridColumn
            field="jobPosition"
            sortable={true}
            filter={true}
          ></AgGridColumn>
          <AgGridColumn
            field="city"
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
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      {/* <Table color="red" size="large" className="table">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Employer</Table.HeaderCell>
            <Table.HeaderCell>Job Position</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>See Details</Table.HeaderCell>
            
      
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {JobAdverts.map((adverts) => (
            <Table.Row key={adverts.id}>
              <Table.Cell > <strong>{adverts.employer}</strong> </Table.Cell>
              <Table.Cell>{adverts.job_position}</Table.Cell>
              <Table.Cell>{adverts.city}</Table.Cell>

              <Table.Cell><Button color="red"><Link to={`/JobAdvertisement/${adverts.id}`}><b className="text-color">See Detail</b></Link>  </Button></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table> */}
    </div>
  );
}