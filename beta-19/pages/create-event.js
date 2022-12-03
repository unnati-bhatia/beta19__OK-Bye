import { TextField } from '@mui/material'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default function EventForm()  {
    const handleSubmit = async (e) => {
      e.preventDefault();
      const form = new FormData(e.target);
  
      const formData = {};
  
      for (let [key, value] of form) {
        formData[key] = value;
      }
  
      try {
        const response = await fetch("/api/post-event", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          // Hide your form
        } else {
          console.error(response);
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <form
        className="w-full max-w-3xl mx-auto px-0 lg:p-10"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-dark text-xs font-secondary mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-dark border border-dark rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary"
              type="text"
              id="title"
              name="title"
              required
              placeholder="Enter title for the event"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-dark text-xs font-secondary mb-2"
              htmlFor="organiser"
            >
              Organise
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-dark border border-dark rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary"
              type="text"
              id="organiser"
              name="organiser"
              required
              placeholder="Enter organiser"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-dark text-xs font-secondary mb-2"
              htmlFor="email"
              placeholder="notspam@hotmail.ru"
            >
             Event thumbnail
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-dark border border-dark rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary"
              id="event-thubnail"
              type="image"
              name="event-thubnail"
              required
              placeholder="Upload picture"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-dark text-xs font-secondary mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              name="message"
              required
              className=" no-resize appearance-none block w-full bg-gray-200 text-dark border border-dark rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary h-48 resize-none"
              id="message"
            ></textarea>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    );
  };