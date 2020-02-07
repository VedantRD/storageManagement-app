import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Button, Header, Content, ListItem, Text, Separator, Body, Right } from 'native-base';

export default class ProfileScreen extends React.Component {
    render() {
        return (
            <Container style={styles.container}>

                <Header>
                    <Body>
                        <Text style={{ fontWeight: 'bold', paddingLeft: 20, color: 'white', fontSize: 20 }}>
                            Profile
                    </Text>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => {
                            this.props.navigation.navigate({ routeName: 'Home' })
                        }} >
                            <Text style={{ textAlignVertical: 'center' }}>Log Out</Text>
                        </Button>
                    </Right>
                </Header>

                {/* <Container> */}
                <Content>
                    <Separator bordered>
                        <Text style={styles.separator} >Personal Details</Text>
                    </Separator>
                    <ListItem>
                        <Text>Edit Profile</Text>
                    </ListItem>
                    <ListItem last>
                        <Text>Change Role</Text>
                    </ListItem>
                    <Separator bordered>
                        <Text style={styles.separator}>App Settings</Text>
                    </Separator>
                    <ListItem>
                        <Text>Change Password</Text>
                    </ListItem>
                    <ListItem last>
                        <Text>Help and Support</Text>
                    </ListItem>
                    <ListItem last>
                        <Text>Feedback</Text>
                    </ListItem>
                </Content>
                {/* </Container> */}


                {/* <Container> */}
                {/* <Content contentContainerStyle={{maxHeight:'auto',backgroundColor:'red',marginHorizontal:'5%'}}>
                        <Button rounded style={{margin:10, backgroundColor:'#fc3103', alignSelf:'center', alignItems:'center'}} onPress={()=>{
                            this.props.navigation.navigate({routeName:'Home'})
                        }} >
                            <Text style={{textAlignVertical:'center'}}>Log Out</Text>
                        </Button>
                    </Content> */}
                {/* </Container> */}
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // maxHeight:'50%',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        // alignItems:'center',
        // justifyContent:'center'
    },
    separator: {
        fontWeight: 'bold', fontSize: 18
    }
})