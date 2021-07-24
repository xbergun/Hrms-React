import React, { useEffect, useState } from "react";
import { Button, Card, Grid, List, Image } from "semantic-ui-react";
import { useParams, useHistory } from "react-router-dom";
import UsersService from "../../services/UsersService";

export default function UserDetail() {
    let { id } = useParams();
    const [users, setUsers] = useState([]);
    const history = useHistory();
    useEffect(() => {
      let userService = new UsersService();
      userService.getById(parseInt(id)).then((result) => setUsers(result.data));
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
            detay-id: {id}
            {users.map((user) => (
              <Card.Group>
                <Card centered fluid>

                  <Card.Content key={user.id}>
                  
      
                  <Card.Header> Name: {user.name}</Card.Header>
                  <Card.Header> UserName: {user.username}</Card.Header>
                </Card.Content>

                  <Card.Content>
                    <Card.Header>
                       Email: {user.email}
                    </Card.Header>
                    <Card.Header>
                       Phone: {user.phone}
                    </Card.Header>
                    <Card.Header>
                  website: {user.website}
                    </Card.Header>
                  </Card.Content>
                  <Card.Content>
                  <Card.Header>
                      Adress:{user.Address}
                    </Card.Header>
                    <Card.Header>
                     {user.address.street}
                    </Card.Header>
                    <Card.Header>
                    {user.address.suite}
                    </Card.Header>
                    <Card.Header>
                     {user.address.city}
                    </Card.Header>
                  </Card.Content>
                  <Card.Content>
                  <Card.Header>
                      Company:{user.Companyname}
                    </Card.Header>
                    <Card.Header>
                     
                    </Card.Header>
                    <Card.Header>
                      {user.CompanycatchPhrase}
                    </Card.Header>
                    <Card.Header>
                      {user.Companybs}
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
    )
}
