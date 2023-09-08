import React, {useEffect, useState} from 'react';
import {
  Alert,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
  View,
  TextInput,
  SafeAreaView,
} from 'react-native';
import Products from '../../components/custom/Products/Products';
import Filter from '../../components/custom/Filter/Filter';
import {FontAwesomeIcon} from '../../components/custom/icons';
const height = Dimensions.get('window').height;

export default function HomeScreen() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [searchWord, setSearchWord] = useState('');
  const [firstData, setFirstData] = useState([]);
  const [brand, setBrand] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (page !== 0) setFirstData(data.slice(0, page * 12));
  }, [page]);

  // useEffect(() => {

  // })

  useEffect(() => {
    let filterData = [];
    if (selectedBrand) {
      // console.log("HOMESELECTED",selectedBrand)
      data.map(p => {
        if (p.brand === selectedBrand) {
          filterData.push(p);
        }
        // console.log("FİLTERDATA",filterData)
        setFirstData(filterData);
      });
    }
  }, [selectedBrand]);

  useEffect(() => {
    let brandArray = [];
    if (data) {
      data.map(key => {
        if (key.brand && !brandArray.includes(key.brand)) {
          brandArray.push(key.brand);
        }
      });
      setBrand(brandArray);
    }
  }, [data]);
  useEffect(() => {
    if (searchWord) {
      const searchData = data.filter(
        product =>
          product.name.toLowerCase().includes(searchWord.toLowerCase()) == true,
      );
      console.log('DATQA:', searchData);
      setFirstData(searchData);
    } else {
      setPage(1);
    }
  }, [searchWord]);

  const getData = async () => {
    await fetch('https://5fc9346b2af77700165ae514.mockapi.io/products')
      .then(response => response.json())
      .then(response => {
        if (!response) return Alert.alert('Bir Hata Oluştu');
        setData(response);
        console.log("RESPONs",response)
        setPage(1);
        setIsLoading(false);
      })
      .catch(e => Alert.alert('Bir Hata Oluştu'));
  };

  const displayContent = () => {
    return (
      <View style={styles.content}>
        <View style={styles.searchBoxContainer}>
          <View style={styles.searchBox}>
            <FontAwesomeIcon
              name="search"
              color="grey"
              style={{marginLeft: 5}}
            />
            <TextInput
              value={searchWord}
              onChangeText={setSearchWord}
              style={styles.searchInput}
              placeholder="Search"
              placeholderTextColor={'grey'}
            />
          </View>
          <Filter
            brand={brand}
            selectedBrand={selectedBrand}
            setSelectedBrand={setSelectedBrand}
          />
        </View>
        <Products
          data={firstData}
          page={page}
          setPage={setPage}
          searchWord={searchWord}
          footerLoading={firstData.length !== data.length}
          selectedBrand={selectedBrand}
        />
      </View>
    );
  };

  const displayLoading = () => {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {page == 1 && isLoading ? displayLoading() : displayContent()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  searchInput: {
    height: height / 20,
    marginLeft: 10,
    flex: 1,
    fontSize: 17,
    color: 'black',
  },
  searchBoxContainer: {
    alignItems: 'center',
  },
  searchBox: {
    alignItems: 'center',
    flexDirection: 'row',
    margin: 5,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: '#ced4da',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
  },
});
