import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';

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
      <Card1 _id= {props._id} name = {props.name} score={props.score} rank = {props.rank}/>
    );
  }
