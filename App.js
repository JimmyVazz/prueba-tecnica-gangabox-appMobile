import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  Alert,
  ToastAndroid,
  FlatList,
} from "react-native";
import { ListItem, Avatar, Header } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useQuery } from "react-query";
import TouchableScale from "react-native-touchable-scale"; // https://github.com/kohver/react-native-touchable-scale

export default function App() {
  const showToast = () => {
    ToastAndroid.show("Se actualizo la lista!", ToastAndroid.SHORT);
  };

  useEffect(async () => {
    let response = await fetch(
      "https://gangabox-admin.herokuapp.com/api/v1/gangabox/productos"
    );

    let response2 = await response.json();

    if (response2 != undefined || response2 != null) {
      setGlobalState({
        isLoading: false,
        error: false,
        success: true,
        data: response2.data,
      });
    } else {
      setGlobalState({
        ...globalState,
        error: true,
      });
    }
  }, []);

  const [globalState, setGlobalState] = useState({
    isLoading: true,
    error: false,
    success: false,
    data: [],
  });

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(async () => {
    let response = await fetch(
      "https://gangabox-admin.herokuapp.com/api/v1/gangabox/productos"
    );

    let response2 = await response.json();

    console.warn(response2);
    showToast();

    if (response2 != undefined || response2 != null) {
      setGlobalState({
        isLoading: false,
        error: false,
        success: true,
        data: response2.data,
      });
    } else {
      setGlobalState({
        ...globalState,
        error: true,
      });
    }
  }, []);

  if (globalState.isLoading)
    return (
      <View style={[styles.loading]}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );

  if (globalState.error)
    return Alert.alert(
      "Gangabox",
      "Hubo un error al cargar los datos, intenta cerrando la app y comenzando de nuevo"[
        ({
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") })
      ],
      { cancelable: false }
    );

  if (globalState.success)
    return (
      <SafeAreaProvider>
        <Header
          leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={{
            text: "Gangabox Catalogue",
            style: { color: "#fff" },
          }}
          rightComponent={{ icon: "home", color: "#fff" }}
        />
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {globalState.data.map((l, i) => (
            <ListItem key={i} bottomDivider>
              <Avatar
                rounded
                source={{
                  uri:
                    "https://cdn.shopify.com/s/files/1/0127/3161/3243/products/JYR-346-Principal_720x.png?v=1609369375",
                }}
              />
              <ListItem.Content>
                <ListItem.Title>{l.PRODUCT_ID}</ListItem.Title>
                <ListItem.Subtitle>Collection: {l.CATEGORY}</ListItem.Subtitle>
                <ListItem.Subtitle>${l.COST} MXN</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))}
        </ScrollView>
      </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 0,
  },
  loading: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});
