import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '../components/Account'
import {eventList} from '../backend/eventList'
import { scoreList } from '../backend/scoreList'
import React from 'react';
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'
import Box from '@material-ui/core';


export default function TheLeaderBoard(){

  let newList=[]

  for( let i=0; i<eventList.length; i++){
    newList.push(<ListItem>
      <Box textAlign="right" style={{ paddingRight: 5 }}>
      # {i+1}
    </Box>
    {/* <ListItemAvatar>
      <Avatar src={ "https://github.com/" + props.name + ".png" }/>
    </ListItemAvatar> */}
    <Box textAlign="right" style={{ paddingRight: 5 }}>
    {eventList[i].username}
    </Box>
    
  </ListItem>)
  }

  return(
    <List>
      {newList}
    </List>
  )
}