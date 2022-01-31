import React, { useEffect, useState } from "react";
import { Button, Card, Grid, List, Image } from "semantic-ui-react";
import { useParams, useHistory } from "react-router-dom";
import JobAdvertisementService from "../../services/JobAdvertisementService";
import { useDispatch } from "react-redux";
import { addToFavourites, removeFromFavourites } from "../../store/actions/favouritesActions";
import { toast } from "react-toastify";

export default function JobAdvertsDetail() {
  //BU FONK. PARAMETRELERİ OBJE OLARAK VERİR.
  let { id } = useParams();
  const dispatch = useDispatch();

  const [JobAdverts, setJobAdvert] = useState([]);

  const history = useHistory();

  useEffect(() => {
    let jobAdvertsService = new JobAdvertisementService();
    jobAdvertsService.getById(parseInt(id)).then((result) => setJobAdvert(result.data));
  }, [id]);

  const application = () => {
    window.alert("Başvuru İşlemi Başarıyla Tamamlandı.");
    history.push("/");
  };
  const decline = () => {
   
    history.push("/JobAdverts");
  };

  const handleAddToFavourites=(advert)=>{
    dispatch(addToFavourites(advert))
    toast.success(`${advert.employer}  Favorilere eklendi.`);

  }
  
  return (
    <div>
      <Grid>
        <Grid.Row>
        
          <Grid.Column width={16}>
            detay: {id}
            {JobAdverts.map((advert) => (
              <Card.Group className="tttt">
                <Card centered fluid>
                  <Image centered size="medium" src="https://img.icons8.com/ios/452/company.png"></Image>
                  <Card.Content key={advert.id}>
                    <Card.Header>
                      İşveren: <b color="red"> {advert.employer}</b>
                    </Card.Header>
                    <Card.Header>Pozisyon: {advert.jobPosition}</Card.Header>
                    <Card.Header>Şehir: {advert.city}</Card.Header>
                    <Card.Header>Çalışma Tipi: {advert.workType}</Card.Header>
                  </Card.Content>

                  <Card.Content>
                    <Card.Header>
                      Açıklama: {advert.jobDescription}
                    </Card.Header>
                  </Card.Content>
                  <Card.Content>
                    <Card.Header>Minimum Maaş: {advert.minSalary}</Card.Header>
                    <Card.Header>Maximum Maaş: {advert.maxSalary}</Card.Header>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="ui two buttons">
                      <Button basic color="blue" onClick={application}>
                        Başvur
                      </Button>
                      <Button basic color="green" onClick={() => handleAddToFavourites(advert)}>
                        Favorilere Ekle
                      </Button>
                      {/* <Button basic color="red" onClick={decline}>
                        Decline
                      </Button> */}
                    
                    </div>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="ui two buttons">
                      <Button color="purple" onClick={decline}>
                        Geri Git
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
              </Card.Group>
            ))}
          </Grid.Column>
        </Grid.Row>
      </Grid>

      {/* <Table color="red" size="large">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Employer</Table.HeaderCell>
            <Table.HeaderCell>Job Position</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Job Description</Table.HeaderCell>
            <Table.HeaderCell>Min Salary</Table.HeaderCell>
            <Table.HeaderCell>Max Salary</Table.HeaderCell>
            <Table.HeaderCell>Word Type</Table.HeaderCell>
            <Table.HeaderCell>Application</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
        {JobAdverts.map((advert) => (
            <Table.Row key={advert.id}>
              <Table.Cell>{advert.employer}</Table.Cell>
              <Table.Cell>{advert.job_position}</Table.Cell>
              <Table.Cell>{advert.city}</Table.Cell>
              <Table.Cell>{advert.job_description}</Table.Cell>
              <Table.Cell>{advert.min_salary}</Table.Cell>
              <Table.Cell>{advert.max_salary}</Table.Cell>
              <Table.Cell>{advert.Work_type}</Table.Cell>
              <Table.Cell ><Button onClick={application} color="red"> Application </Button></Table.Cell>

              
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
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
