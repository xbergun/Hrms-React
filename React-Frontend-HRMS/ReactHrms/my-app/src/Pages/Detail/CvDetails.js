import React, { useEffect, useState } from "react";
import { Button, Card, Grid, List, Image,Table } from "semantic-ui-react";
import { useParams, useHistory } from "react-router-dom";
import CvService from "../../services/CvService";

export default function CvDetails() {
  let { id } = useParams();
  const [cvs, setCv] = useState([]);

  const history = useHistory();
  useEffect(() => {
    let cvService = new CvService();
    cvService.getById(parseInt(id)).then((result) => setCv(result.data));
  }, [id]);

  const application = () => {
    window.alert("Başarıyla İndirdiniz.");
    history.push("/");
  };
  const decline = () => {
    history.push("/JobAdverts");
  };
  const update = () => {
    window.alert("Güncellendi.");
  };

  return (
    <div className="bg">
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <List.Header centered>Authors</List.Header>
            <List animated verticalAlign="middle">
              <List.Item>
                <Image
                  avatar
                  src="https://pbs.twimg.com/profile_images/1403300051749851145/XhuGb8BI_400x400.jpg"
                />
                <List.Content>
                  <List.Header>Berkay</List.Header>
                </List.Content>
              </List.Item>
              <hr></hr>
              <List.Item>
                <Image
                  avatar
                  src="https://pbs.twimg.com/profile_images/1403300051749851145/XhuGb8BI_400x400.jpg"
                />
                <List.Content>
                  <List.Header>Kübra</List.Header>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={13}>
            {cvs.map((cv) => (
              <Card.Group className="tttt" key={cv.id}>
                <Card centered fluid>
                  <Image floated="centered" size="medium" src={cv.images} />
                  <Card.Content>
                    
                    <Card.Header>
                      Name: <b color="red"> {cv.firstName}</b>
                    </Card.Header>
                    <Card.Header> Surname: {cv.lastName} </Card.Header>
                    <Card.Header>Adress: {cv.EmpAddress}</Card.Header>
                    <Card.Header>Email: {cv.email}</Card.Header>
                    <Card.Header>
                      Work Experience: {cv.workExperience}
                    </Card.Header>
                  </Card.Content>

                  <Card.Content>
                    <Card.Header>Cover Letter: {cv.coverLetter}</Card.Header>
                  </Card.Content>
                  <Card.Content>
                    <Card.Header>School: {cv.school}</Card.Header>
                  </Card.Content>
                  <Card.Content>
                    <Card.Header>
                      <a href={cv.github} target="blank">
                        Github
                      </a>
                    </Card.Header>
                  </Card.Content>
                  <Card.Content>
                    <Grid>
                      <Grid.Row>
                        <Grid.Column width={5}>
                          <Button color="green" onClick={application}>
                            Download For Pdf
                          </Button>
                        </Grid.Column>
                        <Grid.Column width={5}>
                          <Button bac color="yellow" onClick={update}>
                            Update
                          </Button>
                        </Grid.Column>
                        <Grid.Column width={5}>
                          <Button bac color="blue" onClick={decline}>
                            Wiev as Pdf
                          </Button>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Card.Content>
                </Card>
              </Card.Group>
            ))}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
