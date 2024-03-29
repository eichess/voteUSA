import React, {Component} from 'react';
import { Platform, TouchableOpacity, Image , View, StyleSheet } from 'react-native';
import {Container, Header, Body, CheckBox, Title, Card, CardItem,
Left, Right, Icon, Content, Thumbnail, Grid, Col, Text, Button} from 'native-base';
import TopicList from './TopicsList'

 class TopicScreen extends React.Component {
  render() {
    return(
      <Container style={styles.container}>
          <Header style={styles.header}>
              
              <Body style={{flex:1}}>
                  <Title>Topics</Title>
              </Body>
              
          </Header>
          <Content contentContainerStyle={styles.content} >  
         <TopicList/>
         
          </Content>
      </Container>
  )
 }

}

export default TopicScreen;

const styles = StyleSheet.create({
  container: {

  },
  header: {
      paddingRight: 15,
      paddingLeft: 15
  },
  content: {
      display: "flex",
      flex: 1,
      justifyContent: "center",
      padding: 15
  }
});