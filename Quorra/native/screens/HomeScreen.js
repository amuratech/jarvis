import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ListView,
  FlatList
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

import axios from 'axios'

export default class HomeScreen extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      input: '',
      stats: [],
      hasData: false
    }
 }
 handleChangeInput = (text) => {
  this.setState({ input: text })
}

  static navigationOptions = {
    header: null,
  };

  fetch(){
    axios.get('https://jsonplaceholder.typicode.com/todos/')
        .then(res=>{
          this.setState({stats: res.data, hasData: true})
    })
  }

  componentWillMount(){
    this.fetch()
  }

  render() {
    const { input } = this.state
    const { stats } = this.state
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/heimdall-icon.png')
                  : require('../assets/images/heimdall-icon.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
            {this._maybeRenderDevelopmentModeWarning()}

            {/* {this._listTodos()} */}
            
            <FlatList
                style={styles.listcontainer}
                data={stats}
                renderItem={({item}) => <Text id={item.id}>{item.title}</Text>}
                keyExtractor={(item, index) => index.toString()}
              />
          </View>

        </ScrollView>

        {/* <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>

          <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
            <MonoText style={styles.codeHighlightText}>navigation/MainTabNavigator.js</MonoText>
          </View>
        </View> */}
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <View>
          <Text style={styles.headline}>Heimdall</Text>
          <Text style={styles.headtag}>Churn analyics tool for sell.do</Text>
          <Text style={styles.developmentModeText}>
            An event where a customer ceases his or her relationship with a service. Online businesses typically label a customer as churned once a considerable amount of time has lapsed since the customer’s last interaction with the site or service. Total revenue loss from customer churn includes both lost revenue and the marketing costs associated with replacing those customers with new ones. Reducing customer churn is a key business goal of every business.
          </Text>
        </View>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _listTodos(){
    if (this.state.hasData) {
      console.log(this.state.stats)
      return (
        <ListView
          style={styles.listcontainer}
          dataSource={this.state.stats}
          renderRow={(data) => <View><Text>{data.title}</Text></View>}
          keyExtractor={(item, index) => index.toString()}
        />
      )
    }
    // return this.state.stats.map((item,i) => <Text key={i}>{item.title}</Text>)
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({

  listcontainer: {
    flex: 1,
    padding: 8,
    flexDirection: 'row',
    // alignItems: 'center',
    backgroundColor: '#C1C1C1',
  },
  input: {
    height: 30,
    flex: 1,
    paddingHorizontal: 8,
    fontSize: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'left',
  },
  headline: {
    textAlign: 'left',
    fontWeight: "800",
    fontSize: 26
  }, 
  headtag: {
    textAlign: 'left',
    fontWeight: "600",
    fontSize: 22
  },  
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    // alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: 30,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
