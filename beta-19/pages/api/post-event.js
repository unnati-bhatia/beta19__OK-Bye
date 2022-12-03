import { supabase } from "../../utils/client";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const body = req.body;

    const { data, error } = await supabase.from("messages").insert(body);

    if (!error) {
      res.status(200).json(data);
    } else {
      res.status(500).json(error);
    }
  }
}