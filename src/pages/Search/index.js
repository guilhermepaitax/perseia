import React from 'react';

import { Container, InputSearch } from './styles';

export default function Search() {
  return (
    <Container>
      <InputSearch placeholderTextColor="#999" placeholder="Buscar..." />
    </Container>
  );
}
