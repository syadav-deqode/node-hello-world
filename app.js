const express = require('express')

const app = express()

const port = 5500;

// Hello world
app.get('/hello-world', (req, res) => {
  res.send('Hello World!')
})

// Public route
app.get('/', (req, res) => {
  res.send('This is simple and public request')
})

// Private route
app.get('/private', (req, res) => {
  const emails = ['abc@test.io', 'test@test.io']
  const { email } = req.query

  if (!email) {
    return res.send('Email id required, pass in query')
  }

  const isListedEmail = emails.find(item => item === email)

  if (!isListedEmail) {
    return res.send('Email is not part of safe list emails')
  }

  res.send(`This is private route, you have requested for the email: "${email}"`)
})


app.listen(port, () => console.log(`App started on port ${port}`));
