import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Form, Grid, Header, Image, Message, Segment, Icon} from 'semantic-ui-react'



class Subs extends React.Component{
  constructor(){
    super();
     this.state={log:''}
     this.update=this.update.bind(this)
  }

update(e){
  this.setState({
    log:e.target.value
  })
handleClick = () => this.update()

  render(){
    return (
  <div className='sub'>

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
        <Header as='h2' color='teal' textAlign='center' >
          COMMING SOON
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input
              fluid
              icon='mail'
              iconPosition='left'
              placeholder='E-mail address'
            />
            <Button animated ='fade' color='red' onClick={this.handleClick}>
     <Button.Content visible>Subscribe</Button.Content>
     <Button.Content hidden>
       <Icon name='feed' />
     </Button.Content>
   </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  </div>
)
}}
ReactDOM.render(<Subs />,document.getElementById('root'))
export default LoginForm
