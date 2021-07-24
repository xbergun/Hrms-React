import React from "react";
import { Button, Card, Image, Icon } from "semantic-ui-react";
import "../App.css";
import { NavLink } from "react-router-dom";
function JobAdvertsLink() {
  return (
    <div>
      <Card>
        <Card.Content>
          <Image
            className="images"
            floated="centered"
            src="https://cdn2.iconfinder.com/data/icons/employment-business-2/256/Candidate_Search-512.png" />
        
          <Card.Header floated="centered">
          
            {" "}
            
            <Icon name="angle double right"></Icon> Job Advertisement List
          </Card.Header>
         
          <Card.Meta>Berkay ERGÜN</Card.Meta>
          <Card.Description>
            <strong>Job Advertisement</strong> Listesini görmek için butona
            tıklayınız.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button as={NavLink} to="/JobAdverts" color="red" floated="centered">
            See Job Advertisement List
          </Button>
        </Card.Content>
      </Card>
    </div>
  );
}

export default JobAdvertsLink;
