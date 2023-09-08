import React, {useEffect, useState} from 'react';
import {
  Alert,
  StyleSheet,
  View,
  Text,
  Modal,
  Pressable,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {FontAwesomeIcon} from '../icons';
export default function Filter(props) {
  const {brand, selectedBrand, setSelectedBrand} = props;

  const [modalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState(null);

  const renderItem = ({item, index}) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            setSelected(item);
            if (selected == item) setSelected(null);
          }}
          style={{
            margin: '5%',
            backgroundColor: item === selected ? 'green' : null,
            padding: '3%',
            borderRadius: 8,
          }}>
          <Text
            style={{
              fontSize: 16,
              color: item === selected ? 'white' : 'black',
            }}>
            {item}{' '}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', padding: '2%'}}>
      <View style={{flex: 1}}>
        <Text style={{fontSize: 20}}>Filters:</Text>
      </View>

      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.openModal}>
            <View style={styles.modalView}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                Görüntülemek istediğiniz markayı seçiniz;
              </Text>
              <FlatList data={brand} renderItem={renderItem} />
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setModalVisible(!modalVisible), setSelectedBrand(selected);
                }}>
                <Text style={styles.textStyle}>Filtreyi Uygula</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {selectedBrand && (
            <Pressable
              onPress={() => {
                setSelected(null);
                setSelectedBrand('');
              }}>
              <FontAwesomeIcon
                name="remove"
                color="red"
                size={25}
                style={{paddingRight: '5%'}}
              />
            </Pressable>
          )}

          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textStyle}>Select Filter</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalView: {
    marginHorizontal: '5%',
    marginVertical: '30%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  openModal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  button: {
    padding: 10,
    elevation: 2,
    alignItems: 'center',
  },
  buttonOpen: {
    backgroundColor: '#ced4da',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    fontSize: 18,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
