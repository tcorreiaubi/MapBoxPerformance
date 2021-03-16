import React from 'react';
import {View} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

const MAPBOX_ACCESS_TOKEN =
  'pk.eyJ1IjoidGNvcnJlaWF1Yml3aGVyZSIsImEiOiJja2JyempueGYzMWdlMnhsOWg1ajB1a2IxIn0.e1Pl-tYxZlzhga_ZW7jwHA';

MapboxGL.setAccessToken(MAPBOX_ACCESS_TOKEN);

export const TrailsMap = () => {
  return (
    <View style={{flex: 1}}>
      <MapboxGL.MapView
        style={{flex: 1}}
        rotateEnabled={false}
        compassEnabled={false}>
        <MapboxGL.Camera
          centerCoordinate={[-8.661996, 40.708593]}
          zoomLevel={8.5}
        />
      </MapboxGL.MapView>
    </View>
  );
};

export default TrailsMap;
