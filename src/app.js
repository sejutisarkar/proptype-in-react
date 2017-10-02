 import React from 'react'
 import ReactDOM from 'react-dom'
//
 import { Button, Form, Grid, Header, Image, Message, Segment ,Icon} from 'semantic-ui-react'
//
console.log("sejuti")
 const LoginForm = () => (

  <div className='login-form'>

    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid
      textAlign='center'
      style={{ height: '100%' }}
      verticalAlign='middle'
    >
      <Grid.Column style={{ maxWidth: 450 }}>

<<<<<<< HEAD
        <Header as='h2' color='blue' textAlign='center'>
          Log-in to your account
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='E-mail address'
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />
            <Button color='blue' fluid size='large' animated=" fade" disabled>
            <Button.content hidden>
            <Icon name="right arrow" /></Button.content>
            <Button.content visible>
            Login
            </Button.content>
            </Button>
          </Segment>
        </Form>
        <Message>
          New member? <a href='#'>Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
    <div>
    <Grid
      textAlign='center'
      style={{ height: '100%' }}
      verticalAlign='middle'
    >
   <Button circular color='facebook' icon='facebook' />
   <Button circular color='twitter' icon='twitter' />
   <Button circular color='linkedin' icon='linkedin' />
   <Button circular color='google plus' icon='google plus' />
   </Grid>
 </div>
  </div>
)
 ReactDOM.render(<LoginForm />,document.getElementById("root"))
 export default LoginForm
=======

ReactDom.render(<App />,document.getElementById("app"))
>>>>>>> 5ad95b56657350a547a8451e179acf9935595cc6
