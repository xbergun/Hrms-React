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
      
          <Grid.Column width={16}>
            {cvs.map((cv) => (
              <Card.Group className="tttt" key={cv.id}>
                <Card centered fluid>
                  <Image floated="centered" size="medium" src={cv.images} />
                  <Card.Content>
                    
                    <Card.Header>
                      İsim: <b color="red"> {cv.firstName}</b>
                    </Card.Header>
                    <Card.Header> Soyisim: {cv.lastName} </Card.Header>
                    <Card.Header>Adres: {cv.EmpAddress}</Card.Header>
                    <Card.Header>Email: {cv.email}</Card.Header>
                    <Card.Header>
                      İş Deneyimleri: {cv.workExperience}
                    </Card.Header>
                  </Card.Content>

                  <Card.Content>
                    <Card.Header>Önyazı: {cv.coverLetter}</Card.Header>
                  </Card.Content>
                  <Card.Content>
                    <Card.Header>Okul: {cv.school}</Card.Header>
                  </Card.Content>
                  <Card.Content>
                    <Card.Header>
                      <a href={cv.github} target="blank">
                        Github Profili
                      </a>
                    </Card.Header>
                  </Card.Content>
                  <Card.Content>
                    <Grid>
                      <Grid.Row>
                        <Grid.Column width={5}>
                          <Button color="green" onClick={application}>
                            Pdf Olarak İndir
                          </Button>
                        </Grid.Column>
                        <Grid.Column width={5}>
                          <Button bac color="yellow" onClick={update}>
                            Güncelle
                          </Button>
                        </Grid.Column>
                        <Grid.Column width={5}>
                          <Button bac color="blue" onClick={decline}>
                            Pdf Olarak Görüntüle
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
