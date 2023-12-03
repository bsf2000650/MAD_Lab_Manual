import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import VolumeControl, { VolumeControlEvents } from 'react-native-volume-control';

const App = () => {
  const [currentVolume, setCurrentVolume] = useState(0);

  useEffect(() => {
    VolumeControl.getVolume().then((volume) => {
      setCurrentVolume(volume);
    });

    const volumeListener = VolumeControl.addListener(
      VolumeControlEvents.VOLUME_CHANGED,
      ({ volume }) => {
        setCurrentVolume(volume);
      }
    );

    // Clean up the listener when the component is unmounted
    return () => volumeListener.remove();
  }, []);

  const setRingerMode = (mode) => {
    // For example, you can mute or unmute using the library
    if (mode === 'mute') {
      VolumeControl.mute();
    } else {
      VolumeControl.unmute();
    }
  };

  return (
    <View>
      <Text>Current Volume: {currentVolume}</Text>
      <TouchableOpacity onPress={() => setRingerMode('mute')}>
        <Text>Mute</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setRingerMode('unmute')}>
        <Text>Unmute</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
