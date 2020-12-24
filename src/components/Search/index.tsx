/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';

// SERVICES
import { FaSearch } from 'react-icons/fa';
import history from '../../services/history';

// STYLED COMPONENTS
import { Container } from './styles';

// ICONS

const Search: React.FC = () => {
  const [search, setSearch] = useState('');

  async function handleSearch() {
    event?.preventDefault();
    if (search) {
      history.push(`/search-product/${search}`);
      location.reload();
    }
  }

  return (
    <Container onSubmit={handleSearch}>
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Buscar"
      />
      <button type="submit">
        <FaSearch />
      </button>
    </Container>
  );
};

export default Search;
