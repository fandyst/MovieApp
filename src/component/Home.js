import React, { Component } from 'react'
import { Container, Header, Body, Title, Icon, Text, Tabs, Tab, TabHeading, Content, Button } from 'native-base'
import Populer from './tabs/Populer'
import Terbaru from './tabs/Terbaru'
import {StackActions, NavigationActions} from 'react-navigation'
import firebase from 'react-native-firebase'

export default class Home extends Component<> {
    handleLogout() {
        firebase.auth().signOut().then(() => this.props.navigation.dispatch(homelogin)).catch(error => console.log(error.message))
    }

	render() {
		return (
			<Container>
				<Header hasTabs>
					<Body>
						<Title>Movie App</Title>
					</Body>
				</Header>
				<Tabs>
					<Tab heading={
						<TabHeading>
							<Text>Populer</Text>
						</TabHeading>
					}>
						<Populer />
					</Tab>
					<Tab heading={
						<TabHeading>
							<Text>Terbaru</Text>
						</TabHeading>
					}>
						<Terbaru />
					</Tab>
					<Tab heading={
						<TabHeading>
							<Text>Akan Datang</Text>
						</TabHeading>
					}>
						<Terbaru />
					</Tab>
				</Tabs>
				<Content>
					<Button onPress={() => {this.handleLogout()}}><Text>Logout</Text></Button>
				</Content>
			</Container>
		)
	}
}

const homelogin = StackActions.reset({
    index:0,
    actions: [
    NavigationActions.navigate({routeName: 'Login'})]
})