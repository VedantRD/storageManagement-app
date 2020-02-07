import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Button, Header, Content, Icon, ListItem, Text, Separator, Body, Right } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class ProfileScreen extends React.Component {
    render() {
        return (
            <Container style={styles.container}>

                <Header>
                    <Body>
                        <Text style={{ fontWeight: 'bold', alignSelf: 'center', color: 'white', fontSize: 20 }}>
                            Dashboard
                    </Text>
                    </Body>
                </Header>

                {/* <Container> */}
                <Content>
                    <Separator bordered>
                        <Text style={styles.separator} > New Owner </Text>
                    </Separator>
                    <ListItem>

                        <Text>Apply For New Warehouses</Text>
                    </ListItem>
                    {/* <ListItem last>
                        <Text>Change Role</Text>
                    </ListItem> */}
                    <Separator bordered>
                        <Text style={styles.separator}>Existing Owner</Text>
                    </Separator>
                    <ListItem >

                        <TouchableOpacity transperent onPress={() => this.props.navigation.navigate("WareDetails")}>
                            <Text>My Warehouses</Text>
                        </TouchableOpacity>
                    </ListItem>



                    {/* <ListItem last>
                        <Text>Help and Support</Text>
                    </ListItem>
                    <ListItem last>
                        <Text>Feedback</Text>
                    </ListItem> */}
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
        fontWeight: 'bold', fontSize: 20, alignSelf: 'center'

    }
})