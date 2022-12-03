
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)



async function getscores(){
    let { data: events, error, status } = await supabase
.from('profiles')
.select('username, score')
console.log(events, status)

return events
}
const scoreList= getscores()

export {scoreList}