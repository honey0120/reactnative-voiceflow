import { useCallback } from 'react';
import { Linking, Alert } from 'react-native';

const useOpenURLInBrowser = () => {
  const openURL = useCallback(async (url) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, []);

  return openURL;
};

export default useOpenURLInBrowser;