import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Footer, FooterTab, Item, Input } from 'native-base';
import axios from 'axios'

export default class Apply extends Component {
    constructor(){
        super()
        this.state = { 
            data : [], 
        }
    }

    componentWillMount(){
        axios.get('https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4328')
        .then (response => {
            
            this.setState ({ data : response.data.teams })
        })
    };

    renderPlayer() {
        return this.state.data.map((x,i) =>
        <Card key={i}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: x.strTeamBadge}} />
                <Body>
                  <Text>{x.strTeam}</Text>
                  <Text note>{x.strLeague}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: x.strTeamFanart1}} style={{height: 300, width: null, flex: 1}}/>
            </CardItem>
          </Card>
        );
    }

    

  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Content>
          {this.renderPlayer()}
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
            <Text>Player Football</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}