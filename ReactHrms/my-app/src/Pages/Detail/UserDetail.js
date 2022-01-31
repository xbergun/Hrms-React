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
         
          <Grid.Column width={16}>
            detay-id: {id}
            {users.map((user) => (
              <Card.Group>
                <Card centered fluid>

                  <Card.Content key={user.id}>
                  
      
                  <Card.Header> İsim: {user.name}</Card.Header>
                  <Card.Header> Soyisim: {user.username}</Card.Header>
                </Card.Content>

                  <Card.Content>
                    <Card.Header>
                       Email: {user.email}
                    </Card.Header>
                    <Card.Header>
                       Telefon: {user.phone}
                    </Card.Header>
                    <Card.Header>
                  website: {user.website}
                    </Card.Header>
                  </Card.Content>
                  <Card.Content>
                  <Card.Header>
                      Adres:{user.Address}
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
                      Şirket:{user.Companyname}
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
                        Başvur
                      </Button>
                      <Button basic color="red" onClick={decline}>
                        Reddet
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
