import React from 'react';
import MapGL, { Marker, Popup, NavigationControl } from 'react-map-gl';
import styled from '@emotion/styled';
import { Box } from '@chakra-ui/core';
import PostPin from './PostPin';
// @ts-ignore
import pants from '../../assets/pants-mini.png';
import { Post } from '../../utils/types';

const TOKEN = `pk.eyJ1IjoiY29va2luZ2lucGpzIiwiYSI6ImNqcjdid3d4bjAyMHQzeW15bDMybXJhdDAifQ.
  0S7Xpla3lninbrQMivclGw`;

// const geocodingUrl = 'https://api.mapbox.com/geocoding/v5';
// const mapboxGeocoding = query =>
//   `${geocodingUrl}/mapbox.places/${query}.json?access_token=${TOKEN}`;

// Define layout to use in Layer component
// const layoutLayer = { 'icon-image': 'pants' };

// Create an image for the Layer
const image = new Image();
image.src = 'data:image/svg+xml;charset=utf-8;base64,' + btoa(pants);

// const images = ['pants', image];

const Container = styled(Box)({
  position: 'relative',
  height: '100%',
  flex: '1',
});

// @ts-ignore
const PopUpWrapper = styled(Popup)({
  background: 'white',
  color: '#3f618c',
  fontWeight: '400',
  padding: '5px',
  borderRadius: '2px',
});

// const Mark = styled(Box)({
//   backgroundColor: '#e74c3c',
//   borderRadius: '50%',
//   width: '20px',
//   height: '20px',
//   border: '4px solid #eaa29b',
// });

const MapWrapper = styled(MapGL)({
  position: 'relative',
  width: '100%',
  height: '100%',
  cursor: 'grab',
  touchAction: 'none',
  userSelect: 'none',
  outline: 'none',
});

type MapProps = {
  posts: Post[];
};

type MapState = {
  // @ts-ignore
  popupInfo?: any;
  viewport: {
    latitude: number;
    longitude: number;
    zoom: number;
    bearing: number;
    pitch: number;
  };
};

class Map extends React.Component<MapProps, MapState> {
  constructor(props) {
    super(props);
    // const { posts } = this.props;
    this.state = {
      viewport: {
        latitude: 37.785164,
        longitude: -100,
        zoom: 3.5,
        bearing: 0,
        pitch: 0,
      },
    };
  }

  updateViewport = viewport => {
    this.setState({ viewport });
  };

  renderPostMap = (post, index) => {
    return (
      <Marker
        key={`marker-${index}`}
        longitude={post.location.longitude}
        latitude={post.location.latitude}>
        <PostPin size={20} onClick={() => this.setState({ popupInfo: post })} />
      </Marker>
    );
  };

  renderPopup() {
    const { popupInfo } = this.state;
    return (
      popupInfo && (
        <PopUpWrapper
          tipSize={5}
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={false}
          onClose={() => this.setState({ popupInfo: null })}
        />
      )
    );
  }

  render() {
    const { posts } = this.props;
    const { viewport } = this.state;
    return (
      <Container>
        <MapWrapper
          {...viewport}
          width="300px"
          height="300px"
          mapStyle="mapbox://styles/mapbox/bright-v9"
          onViewportChange={this.updateViewport}
          mapboxApiAccessToken={TOKEN}>
          {posts.map(this.renderPostMap)}

          <div className="nav">
            <NavigationControl onViewportChange={this.updateViewport} />
          </div>
        </MapWrapper>
      </Container>
    );
  }
}

export default Map;
