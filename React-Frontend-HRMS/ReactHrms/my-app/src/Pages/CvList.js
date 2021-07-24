import React, { useEffect, useState } from "react";
import { Button} from "semantic-ui-react";
import { AgGridReact, AgGridColumn } from "ag-grid-react";
import {NavLink } from "react-router-dom";
import CvService from "../services/CvService";
import { useSelector } from "react-redux";
import { useGetCvQuery } from "../generated/graphql";
function CvList() {
  const [cvs, setCv] = useState([]);
  const { favItems } = useSelector((state) => state.favourites);

  const graphqlCv = useGetCvQuery();

  // useEffect(() => {
  //   let cvService = new CvService();
  //   cvService.getCv()
  //     .then((result) => setCv(result.data));
  // },[]);

  useEffect(() => {
  
    setCv(graphqlCv.data?.cvs)
  }, [graphqlCv])

  // if (graphqlCv.loading) {
  //   return <div>Loading...</div>
  // }
  if (graphqlCv.error) {
    console.log(graphqlCv.error)
  }
  if (graphqlCv?.data?.cvs) {
    console.log(graphqlCv.data.cvs)
  }

  const aggridbutton = (cvs) =>{
    return <Button basic color="black" as={NavLink} to={`/Cv/${cvs.value}`}>
    See Detail
  </Button>
  }


  return (
    <div className="ag-theme-alpine" style={{ height: 400, width:800 , marginLeft:200}}>
      <AgGridReact rowData={cvs}  frameworkComponents={{
            Agbuttonrender: aggridbutton,
          }}>
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
          field="id"
          headerName=""
          sortable={true}
          filter={true}
          cellRenderer="Agbuttonrender"
        ></AgGridColumn>
        </AgGridReact>
     
     
     
     
     
     
     
     
     
     
      {/* <Table color="red" size="large">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>See Detail</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {cvs.map((cv) => (
            <Table.Row key={cv.id}>
              <Table.Cell>{cv.firstName}</Table.Cell>
              <Table.Cell>{cv.LastName}</Table.Cell>
              
              <Table.Cell><Button color="red"><Link to={`/Cv/${cv.id}`}><b className="text-color">See Detail</b></Link>  </Button></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table> */}
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    </div>
  );
}

export default CvList;
