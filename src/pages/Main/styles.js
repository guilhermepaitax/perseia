import styled from 'styled-components/native';
import MapView from 'react-native-maps';

export const Map = styled(MapView)`
  flex: 1;
`;

export const Container = styled.View`
  position: absolute;
  top: 13px;
  left: 13px;
  right: 13px;
  z-index: 5;
  flex-direction: row;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  height: 50px;
  background: #fff;
  color: #333;
  border-radius: 25px;
  padding: 0 20px;
  font-size: 16px;
  box-shadow: 4px 4px 2px rgba(0, 0, 0, 0.2);
`;

export const LoadButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background: #fff;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  margin-left: auto;
`;

export const Menu = styled.View``;

