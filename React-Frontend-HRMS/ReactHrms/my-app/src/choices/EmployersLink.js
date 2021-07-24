import React from "react";
import { Button, Card, Image ,Icon} from "semantic-ui-react";

function EmployersLink() {
  return (
    <div>
      <Card>
        <Card.Content>
          <Image
           className="images"
            src="https://image.flaticon.com/icons/png/512/1613/1613385.png"
          />
          
            <Card.Header > <Icon name="angle double right"></Icon>Employer List</Card.Header>
          <Card.Meta>Berkay ERGÜN</Card.Meta>
          <Card.Description>
          <strong>Employer</strong> Listesini görmek için butona tıklayınız.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button href="http://localhost:3001/Employers" color="red">
             See Employers List
          </Button>
        </Card.Content>
      </Card>
    </div>
  );
}

export default EmployersLink;
