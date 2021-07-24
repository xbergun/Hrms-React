import React from "react";
import { Button, Card, Image ,Icon} from "semantic-ui-react";
import { NavLink } from "react-router-dom";


function CvLink() {
  return (
    <div>
      <Card>
        <Card.Content >
          <Image
           className="images"
            
            src="https://cdn0.iconfinder.com/data/icons/thin-files-documents/57/thin-081_file_document_cv_curriculum_vitae-512.png"
          />
          
            <Card.Header> <Icon name="angle double right"></Icon>CV List</Card.Header>
            
          <Card.Meta>Berkay ERGÜN</Card.Meta>
          <Card.Description>
          <strong>Curriculum Vitae</strong> Listesini görmek için butona tıklayınız.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Button as={NavLink} to="/Cv" color="red">
             
              See Cv List
            </Button>
        </Card.Content>
      </Card>
    </div>
  );
}

export default CvLink;
