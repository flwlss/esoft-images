import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import store from "../store";
import MainScreenItem from "../components/MainScreenItem";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

const MainScreen = () => {
  const [search, setSearch] = useState('')
  const [state, setState] = useState<IPhotoResponse>()
  const [secondColumnMode, setSecondColumnMode] = useState(false)

  const filterList = () => {
    return state?.photos.filter(listItem =>
      listItem.title.toLowerCase().includes(search.toLocaleLowerCase()),
    );
  };

  useEffect(() => {
    store.commonStore.getPhotos()
      .then((res: IPhotoResponse) => {
        if (res) {
          setState(res)
        }
      })
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Photos</Text>
      <CustomInput onChangeText={(search) => { setSearch(search) }} />
      <CustomButton
        title="Сменить режим"
        action={() => { setSecondColumnMode(!secondColumnMode) }} />
      <FlatList
        numColumns={secondColumnMode ? 2 : 1}
        key={secondColumnMode ? 2 : 1}
        keyExtractor={(item) => item.id.toString()}
        data={filterList()}
        renderItem={({ item }: any) =>
          <MainScreenItem
            key={item.id}
            url={item.url}
            description={item.description}
            title={item.title} />
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 10
  },
})

export default MainScreen