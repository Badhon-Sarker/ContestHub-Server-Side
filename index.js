const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000


// middleware

app.use(cors({
    origin: [
        'http://localhost:5173',
        'http://localhost:5174',
        
      ],
      credentials: true,
      optionSuccessStatus: 200,
}))
app.use(express.json())




const uri = `mongodb+srv://${process.env.VITE_USER}:${process.env.VITE_PASS}@cluster0.qx0skjo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const usersCollection = client.db("contestHub").collection('users')
    const contestCollection = client.db("contestHub").collection('contest')
    const contestSubmitCollection = client.db("contestHub").collection('contestSubmit')


    app.post('/users', async(req, res)=>{
        const user = req.body

        const query = {email: user.email}

        const isExist = await usersCollection.findOne(query)
        if(isExist){
            return res.send( {message: 'user already exist', insertedId: null})
        }
        const result = await usersCollection.insertOne(user)
        res.send(result)
    })



    app.get('/users', async(req, res)=>{
        const result = await usersCollection.find().toArray()
        res.send(result)
    })


    app.get('/users/:email', async (req, res) => {
        const email = req.params.email
        const result = await usersCollection.findOne({ email })
        res.send(result)
      })



      app.post('/contest', async(req, res)=>{
        const data = req.body
        const result = await contestCollection.insertOne(data)
        res.send(result)
        
    })

    app.get('/contest/:email', async (req, res) => {
        const email = req.params.email
        const query = {
            contestCreator: email
        }
        const result = await contestCollection.find(query).toArray()
      res.send(result)
      })


    app.get('/contest', async(req, res)=>{

        const result = await contestCollection.find().toArray()
        res.send(result)

    })

    app.get('/contestDetails/:id', async (req, res) => {
        const id = new ObjectId(req.params.id)
        const result = await contestCollection.findOne(id)
        res.send(result)
      })


      app.post('/contestSubmit', async(req, res)=>{
        const data = req.body
        const result = await contestSubmitCollection.insertOne(data)
        res.send(result)
        
    })


    app.get('/myParticipate/:email', async (req, res) => {
        const email = req.params.email
        const query = {
            participator: email
        }
        const result = await contestSubmitCollection.find(query).toArray()
      res.send(result)
      })



      app.delete('/deleteCreate/:id', async(req, res)=>{
        const result = await contestCollection.deleteOne({_id: new ObjectId(req.params.id)})
        res.send(result)
    })

    app.put('/editContest/:id', async(req, res)=>{

        const query = {_id: new ObjectId(req.params.id)}

        const data = {
            $set: {

                contestName: req.body.contestName,
                contestType: req.body.contestType,
                contestPrice: req.body.contestPrice,
                date: req.body.date,
                image: req.body.image,
                prizeMoney: req.body.prizeMoney,
                contestDescription: req.body.contestDescription,
                taskInstruction: req.body.taskInstruction,
                contestCreator: req.body.contestCreator
   
            },
          };

        const result = await contestCollection.updateOne(query, data);
        
        res.send(result)
    })



    app.put('/editRole/:id', async(req, res)=>{

        const query = {_id: new ObjectId(req.params.id)}
        

        const data = {
            $set: {
                role: req.body.role,

            },
          };

        const result = await usersCollection.updateOne(query, data);
        
        res.send(result)
    })


    app.delete('/deleteUser/:id', async(req, res)=>{
        const result = await usersCollection.deleteOne({_id: new ObjectId(req.params.id)})
        res.send(result)
    })




    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);




app.get('/', (req, res) => {
    res.send('Contest hub server is running')
  })
  
  app.listen(port, () => {
    console.log(`Contest hub is running on port ${port}`)
  })