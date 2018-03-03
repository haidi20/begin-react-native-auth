import React, {Component} from 'react';
import {
  FlatList,
  StyleSheet,
  Text, View, Image, Alert
} from 'react-native';
import flatListData from '../data/flatListData';
import Swipeout from 'react-native-swipeout';
import AddModal from './AddModal';

class FlatListItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeRowKey : null
    };
    this._onPressAdd = this._onPressAdd.bind(this);
  }
  _onPressAdd(){
    this.refs.AddModal.showAddModal();
  }
  render(){
    const swipeSettings = {
      autoClose: true,
      onClose: (secId, rowId, direction) => {
        if (this.state.activeRowKey != null) {
          this.setState({activeRowKey: null});
        }
      },
      onOpen: (secId, rowId, direction) => {
        this.setState({activeRowKey: this.props.item.key});
      },
      right: [
        {
          onPress: () => {
            Alert.alert(
              'Alert',
              'Are You sure want to delete ?',
              [
                {Text: 'No', onPress :() => console.log('Cancel presseds'), style: 'cancel'},
                {Text: 'Yes', onPress:() => {
                  flatListData.splice(this.props.index, 1);
                }},
              ],
              {Cancelable: true}
            );
          },
          text: 'Delete', type: 'delete'
        }
      ],
      rowId: this.props.index,
      sectionId: 1
    }
    return (
      <Swipeout {...swipeSettings}>
        <View style={{
          flex: 1,
          flexDirection: 'column'
        }}>

          <View style={{
            backgroundColor: 'mediumseagreen',
            flexDirection: 'row',
            flex: 1
          }}>

              <Image
                source={{uri:this.props.item.imageUrl}}
                style={{width: 100, height: 100, margin: 5}}
              >
              </Image>

              <View style={{
                flex: 1,
                flexDirection: 'column'
              }}>
                <Text style={style.flatListItem}> {this.props.item.name} </Text>
                <Text style={style.flatListItem}> {this.props.item.foodDescription} </Text>
              </View>

              <View style={{
                height: 1,
                backgroundColor: 'white'
              }}>
              </View>

          </View>

        </View>
      </Swipeout>
    );
  }
}

const style = StyleSheet.create({
  flatListItem: {
    color: 'white',
    padding: 10,
    fontSize: 16,
  }
});

export default class BasicFlatList extends Component{
  render(){
    return(
      <View style={{
        flex: 1,
        marginTop: 22
      }}>
        <FlatList
          data={flatListData}
          renderItem={({item, index}) => {
            return (
              <FlatListItem item={item} index={index}>

              </FlatListItem>
            );
          }}
        >

        </FlatList>
        <AddModal ref={'AddModal'} parentFlatList={this}>

        </AddModal>
      </View>
    );
  }
}
