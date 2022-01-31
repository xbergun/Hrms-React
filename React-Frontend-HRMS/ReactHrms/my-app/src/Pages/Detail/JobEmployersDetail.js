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
         
          <Grid.Column width={16}>
            detay: {id}
            {employers.map((employer) => (
              <Card.Group>
                <Card centered fluid>
                <Image floated="centered" size="medium" src={employer.image} />

                  <Card.Content key={employer.id}>
                  
      
                  <Card.Header>Şirket İsmi: {employer.company_name}</Card.Header>

                </Card.Content>

                  <Card.Content>
                    <Card.Header>
                       Web Site: {employer.company_adress}
                    </Card.Header>
                  </Card.Content>
                  <Card.Content>
                  <Card.Header>
                      Numara: {employer.company_number}
                    </Card.Header>
                  </Card.Content>
                  <Card.Content>
                  <Card.Header>
                      E-Mail: {employer.company_email}
                    </Card.Header>
                  </Card.Content>
                  <Card.Content>
                  <Card.Header>
                      Adres: {employer.company_adress}
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
  );
}
