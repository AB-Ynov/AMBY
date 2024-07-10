import { SearchBar } from 'react-native-elements';

function SearchComponent() {
  const [search, setSearch] = React.useState('');

  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <SearchBar
      placeholder="Rechercher..."
      onChangeText={updateSearch}
      value={search}
    />
  );
}
