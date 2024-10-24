import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View, StatusBar, Button } from 'react-native';
import { WebView } from 'react-native-webview';

function App(): React.JSX.Element {
  // const [url, setUrl] = useState('https://www.nanshanmuseum.com/exh-guide/qtqh/list.html');
  const [url, setUrl] = useState('file:///android_asset/index.html');
  const webviewRef = useRef(null);

  const handleGoBack = () => {
    webviewRef.current?.goBack();
  };

  const handleGoForward = () => {
    webviewRef.current?.goForward();
  };

  const handleRefresh = () => {
    webviewRef.current?.reload();
  };

  const handleNavigate = () => {
    setUrl('file:///android_asset/loading.html');
    setTimeout(() => {
      setUrl('file:///android_asset/index.html');
    }, 100);
  };


  return (
    <View style={{ flex: 1 }}>
      <WebView
        ref={webviewRef}
        source={{ uri: url }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        originWhitelist={["*"]}
        style={{ flex: 1 }}
      />
      <View style={styles.ctrlGroup}>
        <View style={styles.ctrlSubGroup}>
          {/* // 后退按钮 */}
          <TouchableOpacity
            style={styles.imgButtonContainer}
            activeOpacity={0.7}
            onPress={handleGoBack}
          >
            <Image source={require('./src/icons/btn_back.png')} style={styles.imgButtonContainerImg} />
          </TouchableOpacity>
          {/* // 刷新按钮 */}
          <TouchableOpacity
            style={styles.imgButtonContainer}
            activeOpacity={0.7}
            onPress={handleRefresh}
          >
            <Image source={require('./src/icons/btn_refresh.png')} style={styles.imgButtonContainerImg2} />
          </TouchableOpacity>
          {/* // 前进按钮 */}
          <TouchableOpacity
            style={styles.imgButtonContainer}
            activeOpacity={0.7}
            onPress={handleGoForward}
          >
            <Image source={require('./src/icons/btn_forward.png')} style={styles.imgButtonContainerImg} />
          </TouchableOpacity>
        </View>
        <View style={styles.ctrlSubGroup}>
          {/* // 目录按钮 */}
          <TouchableOpacity
            style={styles.imgButtonContainer}
            activeOpacity={0.7}
            onPress={handleNavigate}
          >
            <Image source={require('./src/icons/btn_menu.png')} style={styles.imgButtonContainerImg} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ctrlGroup: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  ctrlSubGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#708090',
    borderRadius: 20,
    margin: 4,
  },
  imgButtonContainer: {

  },
  imgButtonContainerImg: {
    width: 30,
    height: 30,
    marginVertical: 0,
    marginHorizontal: 8
  },
  imgButtonContainerImg2: {
    width: 20,
    height: 20,
    marginVertical: 0,
    marginHorizontal: 8
  }
});

export default App;
