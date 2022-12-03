
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)



async function getevents(){
    let { data: events, error, status } = await supabase
.from('events')
.select('*')
console.log(events, status)

return events
}
const eventList= getevents()

export {eventList}