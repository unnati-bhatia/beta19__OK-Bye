import { TextField } from '@mui/material'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default function createEvent(){
    return(
        <div> 

            <form action="/send-data-here" method="post">
            <label for="first">Title</label>
            <input type="text" id="title" name="title" />
            <label for="last">Short description</label>
            <input type="text" id="sd" name="sd" />
            <label for="last">Detailed description</label>
            <input type="text" id="dd" name="dd" />
            <label for="last">Event Banner</label>
            <input type="image" id="banner" name="event-banner" />
            <label for="last">Date</label>
            <input type="date" id="date" name="date" />
            <label for="last">Time</label>
            <input type="time" id="time" name="time" />
            <label for="last">Mode of the Event</label>
            <input type="text" id="mode" name="mode" />
            <label for="last">Venue</label>
            <input type="text" id="venue" name="venue" />
            

            <button type="submit">Submit</button>
            </form>

            

const { data, error } = await supabase
  .from('events')
  .insert(
    { event_id: 'someValue', date: 'otherValue' }
  )



             {/* <span>Enter title</span>
            <TextField className='bg-white'></TextField>
            <span>Short description of the event</span>
            <TextField className='bg-white'></TextField>
            <span>Detailed description of the event</span>
            <TextField className='bg-white'></TextField> */}
        </div>
    )
}