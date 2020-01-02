import React, { Component } from 'react'
import './App.css'
import { Container, Row, Col, Button } from 'react-bootstrap'

import Emoji from './components/Emoji'
import Software from './components/Software'
import Video from './components/Video'

import premiere from './images/premiere.png'
import aftereffects from './images/after-effects.png'
import illustrator from './images/illustrator.png'
import photoshop from './images/photoshop.png'

import FadeIn from 'react-fade-in'

const BASE_URL = 'https://backend-portfolio-audiovisual.herokuapp.com/'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      softwares: {},
      urlvideos: [],
      mostrarComponente: false
    }
    
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    fetch(BASE_URL+'json/site.json')
      .then(res => res.json())
      .then(json => 
        this.setState({ title: json.title, softwares: json.softwares })
      )
      .catch(error => alert(error.message))

    fetch(BASE_URL)
      .then(res => res.json())
      .then(json => this.setState({ urlvideos: json.urlvideos }))
      .catch(error => alert(error.message))
  }

  arraySoftwares() {
    const { softwares } = this.state
    const items = []
    const images = {
      "Premiere": premiere,
      "After Effects": aftereffects,
      "Illustrator": illustrator,
      "Photoshop": photoshop
    }

    for (var props in softwares) {
      items.push(<Col key={props}>
        <FadeIn>
          <Software
            software={props}
            description={softwares[props]}
            img={images[props]}
          />
        </FadeIn>
      </Col>)
    }

    return items
  }

  handleClick() {
    this.setState({
      mostrarComponente: true
    })
  }

  render() {
    const { title, urlvideos } = this.state
    //console.log(urlvideos)
    return (
      <Container>
        <Row>
          <Col sm={{ span: 8, offset: 2 }}>
            <h1> {title} <Emoji symbol=' 🎬❤️🎥'/></h1>
          </Col>
        </Row>
        
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
            {urlvideos.map((video) => 
              <Video key={video._id} src={video.url} />
            )}
          </Col>
        </Row>

        <Row className='softwares'>
          {this.state.mostrarComponente ? this.arraySoftwares() : 
          <Col sm={{ span: 4, offset: 4 }}><Button 
            variant='dark'
            onClick={this.handleClick}>
            Clique aqui para ver os programas utilizados na edição 
            <Emoji symbol=' 🍕☕'/>
          </Button></Col>}
        </Row>
      </Container>
    )
  }
}