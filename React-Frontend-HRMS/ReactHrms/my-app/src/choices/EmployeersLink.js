import React from "react";
import { Button, Card, Image ,Icon} from "semantic-ui-react";

function EmployeersLink() {
  return (
    <div>
      <Card>
        <Card.Content>
          <Image
            className="images"
            
            src="https://y26uq11r8xr1zyp0d3inciqv-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/32-1.jpg"
          />
         
            <Card.Header> <Icon name="angle double right"></Icon>Employeer List</Card.Header>
          <Card.Meta > <strong>Berkay ERGÜN</strong> </Card.Meta>
          <Card.Description>
          <strong>Employeer</strong> Listesini görmek için butona tıklayınız.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button href="http://localhost:3000/Employeers" color="purple">
              See Employeers List
          </Button>
        </Card.Content>
      </Card>
    </div>
  );
}

export default EmployeersLink;
