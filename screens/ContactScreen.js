import { ScrollView } from "react-native-web"
import { Card } from "react-native-elements"
import { Text } from "react-native"

const ContactScreen = () => {
    return <ScrollView>
        <Card wrapperStyle={{margin: 20}}>
            <Card.Title> Contact Information</Card.Title>
            <Text> 1 Nucamp Way </Text>
            <Text> Seattle, WA 98001</Text>
            <Text style={{marginBottom: 10}}> U.S.A.</Text>
            <Text> Phone: 1-206-555-1234</Text>
            <Text> Email: campsites@nucamp.co</Text>
            <Card.Divider />
        </Card>
    </ScrollView>
}


export default ContactScreen;