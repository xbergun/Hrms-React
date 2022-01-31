import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from 'react-router-dom';

function Categories() {
  return (
    <div>
      <Menu inverted vertical>
      <Menu.Item name="Cvler" />
      <Menu.Item as={NavLink} to="/List" name="Listeler"/>
      <Menu.Item as={NavLink} to="/JobEmployer" name="İş İlani Oluştur" />
        <Menu.Item   as={NavLink} to="/JobAdverts" name="İş İlanları" />
       
        
        
      </Menu>
    </div>
  );
}

export default Categories;
