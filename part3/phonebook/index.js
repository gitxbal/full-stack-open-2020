const express = require('express')
const app = express()
const morgan = require('morgan')
app.use(express.json())
// app.use(morgan('tiny'))
morgan.token('body', (req, res) => JSON.stringify(req.body)) 
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));

let persons = [
    {
        date: "2020-11-03T20:30:33.033Z",
        id: 1,
        name: "Michael Bluth",
        "number": "(689) 838-8380"
      },
      {
        date: "2020-11-03T11:19:25.905Z",
        id: 2,
        name: "George Bluth Sr.",
        number: "(987) 654-4328"
      },
      {
        date: "2020-11-02T05:34:32.492Z",
        id: 3,
        name: "Bob Loblaw",
        number: "(737) 666-1743"
      },
      {
        date: "2020-11-02T05:37:47.508Z",
        id: 4,
        name: "Gob Bluth",
        number: "(879) 873-8765"
      },
      {
        date: "2020-11-02T05:42:37.430Z",
        id: 5,
        name: "Tobias Fünke",
        number: "(587) 327-3482"
      },
      {
        date: "2020-11-03T11:19:42.288Z",
        id: 6,
        name: "Lindsay Bluth Fünke",
        number: "(748) 372-8290"
      },
      {
        date: "2020-11-02T05:44:37.729Z",
        id: 7,
        name: "George-Michael Bluth",
        number: "(578) 909-8382"
      },
      {
        date: "2020-11-02T05:45:19.952Z",
        id: 8,
        name: "Barry Zuckerkorn",
        number: "(839) 290-9837"
      },
      {
        date: "2020-11-05T17:19:25.908Z",
        id: 9,
        name: "Lucille Bluth",
        number: "(876) 362-8989"
      }
]

app.get('/', (req, res) => {
    res.send('<h1>Hello Phonebook!</h1><a href="http://localhost:6001/info">INFO PAGE</a>')
  })
  
  app.get('/api/persons', (req, res) => {
    res.json(persons)
  })


  app.get('/info', (req, res) => {
    res.send(`<p>Phonebook has info for ${persons.length} people</p><p>${new Date()}</p><a href="http://localhost:6001/">HOME PAGE</a>`)
  })

  app.get('/api/persons/:id', (req, res) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if (person) {
      res.json(person)
    } else {
      res.status(404).end()
    }
  })

  app.delete('/api/persons/:id', (req, res) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    res.status(204).end()
  })

  const generateRandomId = () => {
    const randomId = persons.length > 0
    ? Math.floor(Math.random() * 10000000)
    : 1
    return randomId
  }
  app.post('/api/persons', (req, res) => {
    const body = req.body
    // console.log(body)
    if (!body.name || !body.number){
      return res.status(400).json(
        {
          error: "name and/or number is missing"
        }
      )
    }
    
    const names = persons.map(person => person.name)

    if (names.includes(body.name)){
      return res.status(400).json(
        {
          error: "name must be unique"
        }
      )
    }
    const person = {
      date: new Date(),
      id: generateRandomId(),
      name: body.name,
      number: body.number,
    }
  
    persons = [...persons, person]

    res.json(person)
  })

const PORT = process.env.PORT || 6001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)