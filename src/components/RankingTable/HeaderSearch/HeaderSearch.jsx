/* eslint-disable react/prop-types */
import { rankingData } from '../../../utils/mock/rankingData';
import { SearchBarWrapper, SearchBarInput } from './HeaderSearchStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const HeaderSearch = ({ setData }) => {
  const handleSearch = (value) => {
    if (value === '') {
      setData(rankingData);
    } else {
      const filteredData = rankingData.filter((item) => {
        const lowerCasedValue = value.toLowerCase();
        return item.name.toLowerCase().includes(lowerCasedValue);
      });

      setData(filteredData);
    }
  };

  return (
    <>
      <SearchBarWrapper>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ color: '#7F8590' }}
        />
        <SearchBarInput
          placeholder="Search name or ranking..."
          onChange={(event) => handleSearch(event.target.value)}
        />
      </SearchBarWrapper>
    </>
  );
};

export default HeaderSearch;
