import React from 'react';
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
  } from '@chakra-ui/react'

import { Box } from "@material-ui/core";


  function Card1(props){

    return(

    <ListItem>
        <Box textAlign="right" style={{ paddingRight: 5 }}>
        # {props.title}
      </Box>
      {/* <ListItemAvatar>
        <Avatar src={ "https://github.com/" + props.name + ".png" }/>
      </ListItemAvatar>
      <Box textAlign="right" style={{ paddingRight: 5 }}>
      {<a href={"https://github.com/" + props.name} target="/">{props.name}</a>}
      </Box>
      <ListItemText
        secondaryTypographyProps={{ align: "left"}}
        secondary={props.score}
      /> */}
    </ListItem>
        
    )
  }
  
  export default function CardType1(props){
    console.log(props);
    return(
      <Card1 _id= {props.event_id} title = {props.title} />
    );
  }
