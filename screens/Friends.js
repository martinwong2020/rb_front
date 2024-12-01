import { StyleSheet, View , ScrollView} from 'react-native'
import React from 'react'
import { Avatar, Card, Text, Surface } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  messageBubble: {
    maxWidth: '90%',
    padding: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 12,
    marginLeft: 8,
    elevation: 2, // Optional: adds a subtle shadow
  },
  username: {
    fontWeight: 'bold',
    marginBottom: 2,
  },
});
export default function Friends() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Avatar.Image size={48} source={{}}/>

          <Surface style={styles.messageBubble}>
            <Text style={styles.username}>name</Text>
            <Text>text</Text>
          </Surface>
        </View>

        <View style={styles.container}>
          <Avatar.Image size={48} source={{}}/>

          <Surface style={styles.messageBubble}>
            <Text style={styles.username}>name</Text>
            <Text>dfnoiangbfvonv o iwejfoiwfNOINFOINFOIN F  IODWFJAOIFJIOAFJAOI J IDJAOIDJAOI</Text>
          </Surface>
        </View>

        <View style={styles.container}>
          <Avatar.Image size={48} source={{}}/>

          <Surface style={styles.messageBubble}>
            <Text style={styles.username}>name</Text>
            <Text>dfnoiangbfvonv o iwejfoiwfNOINFOINFOIN F  IODWFJAOIFJIOAFJAOI J IDJAOIDJAOI</Text>
          </Surface>
        </View>

        <View style={styles.container}>
          <Avatar.Image size={48} source={{}}/>

          <Surface style={styles.messageBubble}>
            <Text style={styles.username}>name</Text>
            <Text>dfnoiangbfvonv o iwejfoiwfNOINFOINFOIN F  IODWFJAOIFJIOAFJAOI J IDJAOIDJAOI</Text>
          </Surface>
        </View>

        <View style={styles.container}>
          <Avatar.Image size={48} source={{}}/>

          <Surface style={styles.messageBubble}>
            <Text style={styles.username}>name</Text>
            <Text>dfnoiangbfvonv o iwejfoiwfNOINFOINFOIN F  IODWFJAOIFJIOAFJAOI J IDJAOIDJAOI</Text>
          </Surface>
        </View>

        <View style={styles.container}>
          <Avatar.Image size={48} source={{}}/>

          <Surface style={styles.messageBubble}>
            <Text style={styles.username}>name</Text>
            <Text>dfnoiangbfvonv o iwejfoiwfNOINFOINFOIN F  IODWFJAOIFJIOAFJAOI J IDJAOIDJAOI</Text>
          </Surface>
        </View>

        <View style={styles.container}>
          <Avatar.Image size={48} source={{}}/>

          <Surface style={styles.messageBubble}>
            <Text style={styles.username}>name</Text>
            <Text>dfnoiangbfvonv o iwejfoiwfNOINFOINFOIN F  IODWFJAOIFJIOAFJAOI J IDJAOIDJAOI</Text>
          </Surface>
        </View>

        <View style={styles.container}>
          <Avatar.Image size={48} source={{}}/>

          <Surface style={styles.messageBubble}>
            <Text style={styles.username}>name</Text>
            <Text>dfnoiangbfvonv o iwejfoiwfNOINFOINFOIN F  IODWFJAOIFJIOAFJAOI J IDJAOIDJAOI</Text>
          </Surface>
        </View>
      </ScrollView>
    </SafeAreaView>
  )

  
}
