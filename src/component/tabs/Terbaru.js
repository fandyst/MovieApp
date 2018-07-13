import React, { Component } from 'react'
import { Content, Text, Card, CardItem, Body, Icon } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Image } from 'react-native';
import axios from 'axios'
export default class Terbaru extends Component<> {
    constructor() {
        super()
        this.state = {
            list:[]
        }
        this.getData()
    }
    getData() {
        axios({
          method: 'GET',
          url: 'https://api.themoviedb.org/3/movie/newest?api_key=d12ef77f88f19a9f05c74aedf8d93e0a'
        }).then((response) => {
          this.setState({list:response.data.results})
        }).catch(error => {
          console.log(error)
        })
    }

    readData() {
        if(this.state.list) {
              return this.state.list.map((data,i) => {
                return (
                  <Card key={i}>
                    <CardItem cardBody>
                        <Image source={{uri: 'https://image.tmdb.org/t/p/w200/'+data.poster_path}} style={{height: 200, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text>{data.original_title}</Text>
                            <Text note><Icon name='calendar' /> {data.release_date}</Text>
                        </Body>
                    </CardItem>
                  </Card>
                )
              })
            }
    }

    render() {
        return (
            <Content>
            {this.readData()}
            </Content>
        )
    }
}