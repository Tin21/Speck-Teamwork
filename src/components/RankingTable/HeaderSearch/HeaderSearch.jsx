/* eslint-disable react/prop-types */
import { rankingData } from '../../../utils/mock/rankingData';
import {
  SearchBarWrapper,
  SearchBarInput,
  SearchIcon,
} from './HeaderSearchStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const HeaderSearch = ({ setData }) => {
  const [showSearchBar, setShowSearchBar] = useState(false);
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

  const changeSeachBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  return (
    <>
      {!showSearchBar && (
        <SearchIcon
          isMobile
          icon={faMagnifyingGlass}
          style={{ color: '#7F8590' }}
          onClick={() => changeSeachBar()}
        />
      )}
      {showSearchBar && (
        <SearchBarWrapper isMobile>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ color: '#7F8590' }}
            onClick={() => changeSeachBar()}
          />
          <SearchBarInput
            placeholder="Search name or ranking..."
            onChange={(event) => handleSearch(event.target.value)}
          />
        </SearchBarWrapper>
      )}

      <SearchBarWrapper isTablet>
        <SearchIcon icon={faMagnifyingGlass} style={{ color: '#7F8590' }} />
        <SearchBarInput
          placeholder="Search name or ranking..."
          onChange={(event) => handleSearch(event.target.value)}
        />
      </SearchBarWrapper>
    </>
  );
};

export default HeaderSearch;
