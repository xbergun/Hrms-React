import React, { useEffect, useState } from "react";
import { Button, Card, Grid, List, Image } from "semantic-ui-react";
import { useParams, useHistory } from "react-router-dom";
import EmployersService from "../../services/EmployersService";

export default function JobEmployersDetail() {
  let { id } = useParams();

  const [employers, setEmployers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    let employersService = new EmployersService();
    employersService.getById(id).then((result) => setEmployers(result.data));
  }, [id]);

  const application = () => {
    window.alert("Başvuru İşlemi Başarıyla Tamamlandı.");
    history.push("/");
  };
  const decline = () => {
    window.alert("İlanı Reddettiniz. İlan sayfasına yönlendiriliyosunuz.");
    history.push("/JobAdverts");
  };

  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}>
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
          <Grid.Column width={14}>
            detay: {id}
            {employers.map((employer) => (
              <Card.Group>
                <Card centered fluid>
                <Image floated="centered" size="medium" src={employer.image} />

                  <Card.Content key={employer.id}>
                  
      
                  <Card.Header>Company Name: {employer.company_name}</Card.Header>

                </Card.Content>

                  <Card.Content>
                    <Card.Header>
                       Web Site: {employer.company_adress}
                    </Card.Header>
                  </Card.Content>
                  <Card.Content>
                  <Card.Header>
                      Number: {employer.company_number}
                    </Card.Header>
                  </Card.Content>
                  <Card.Content>
                  <Card.Header>
                      E-Mail: {employer.company_email}
                    </Card.Header>
                  </Card.Content>
                  <Card.Content>
                  <Card.Header>
                      Adress: {employer.company_adress}
                    </Card.Header>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="ui two buttons">
                      <Button basic color="green" onClick={application}>
                        Application
                      </Button>
                      <Button basic color="red" onClick={decline}>
                        Decline
                      </Button>
                    </div>
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
