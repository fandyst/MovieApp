import React, { Component } from 'react'
import { Content, Text, Card, CardItem, Body, Icon,Button } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Image } from 'react-native';
import axios from 'axios'
import firebase from 'react-native-firebase'
export default class Populer extends Component<> {
    constructor() {
        super()
        this.state = {
            list:[],
            userlogin:[]
        }
        this.getData()
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if(user !== null) {
                this.setState({userlogin:user._user})
            }
        })
    }

    getData() {
        axios({
          method: 'GET',
          url: 'https://api.themoviedb.org/3/movie/popular?api_key=d12ef77f88f19a9f05c74aedf8d93e0a'
        }).then((response) => {
          this.setState({list:response.data.results})
        }).catch(error => {
          console.log(error)
        })
    }

    readData() {
        if(this.state.list) {
              return this.state.list.map((data,i) => {
                if(i%2 == 0) {
                    return (
                        <Row key={i}>
                            <Col>
                                <Card key={i}>
                                    <CardItem cardBody>
                                        <Image source={{uri: 'https://image.tmdb.org/t/p/w200/'+this.state.list[i].poster_path}} style={{height: 200, width: null, flex: 1}}/>
                                    </CardItem>
                                    <CardItem>
                                        <Body>
                                            <Text>{this.state.list[i].original_title} </Text>
                                            <Text note><Icon name='calendar' /> {this.state.list[i].release_date}</Text>
                                        </Body>
                                    </CardItem>
                                </Card>
                            </Col>
                            <Col>
                                <Card key={i+1}>
                                    <CardItem cardBody>
                                        <Image source={{uri: 'https://image.tmdb.org/t/p/w200/'+this.state.list[i+1].poster_path}} style={{height: 200, width: null, flex: 1}}/>
                                    </CardItem>
                                    <CardItem>
                                        <Body>
                                            <Text>{this.state.list[i+1].original_title}</Text>
                                            <Text note><Icon name='calendar' /> {this.state.list[i+1].release_date}</Text>
                                        </Body>
                                    </CardItem>
                                </Card>
                            </Col>
                        </Row>
                    )
                }
              })
            }
    }

    render() {
        return (
            <Content>
                
                <Text>Email saya {this.state.userlogin.email}</Text>
                <Grid>
                    {this.readData()}
                </Grid>
            </Content>
        )
    }
}

