import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '../components/Account'
import {eventList} from '../backend/eventList'
import { scoreList } from '../backend/scoreList'
import { List } from 'postcss/lib/list'

import { createClient } from '@supabase/supabase-js'


const Home = () => {
  const session = useSession()
  
  const supabaseUrl = 'https://luvwkszwipnoahhmwodt.supabase.co'
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  const supabase = createClient(supabaseUrl, supabaseKey)
  
  



// console.log(eventList)
  return (
    <List>scoreList</List>
  )
}

export default Home