import initStripe from 'stripe'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)



const handler = async (req, res) => {   
    if(req.query.API_ROUTE_SECRET !== process.env.API_ROUTE_SECRET){
        return res.status(401).send('You are not authorised to call this API')
    }
    const stripe = initStripe(process.env.STRIPE_SECRET_KEY)
    const customer = await stripe.customers.create({
        email : req.body.record.email
    })

    await supabase.from('profiles').update({
        stripe_customer: customer.id
    }).eq('id', req.body.record.id);

    res.send({message : `stripe customer created: ${customer.id}`})
};

export default handler;