import { scoreList } from "../backend/scoreList";
import CardType1 from "../components/Card1";
import { eventList } from "../backend/eventList";
// import List from '@material-ui/core/List';
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'


let newList = []

export default function CardType01(){

  for( let i=0; i<eventList.length; i++){
    newList.push(<CardType1 title = {eventList[i].title} event_id = {eventList[i].event_id} />)
  }

  console.log(newList)

  return(
    <List>
      {newList}
    </List>
  )
};


