/* eslint-disable react/prop-types */
import {
  SearchBarWrapper,
  SearchBarInput,
  SearchIcon,
  SearchCancelIcon,
} from './TableHeaderSearchStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Context } from '../../context/Context';
import { useContext, useState } from 'react';

const TableHeaderSearch = ({ setData, placeholderText, byRankIsTrue }) => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const { usersTable } = useContext(Context);

  const changeSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  const handleSearch = (value) => {
    if (value === '') {
      setData(usersTable);
    } else {
      console.log('nekja');

      console.log(usersTable);

      const filteredData = usersTable.filter((item) => {
        const lowerCasedValue = value.toLowerCase();
        const activeFacultyYear = item.active_faculty_year
          ? item.active_faculty_year.toString().toLowerCase()
          : '';
        const isNotStudent = activeFacultyYear === '' ? 'ns' : '';

        return byRankIsTrue
          ? item.ranking.toString().includes(lowerCasedValue) ||
              item.full_name.toString().toLowerCase().includes(lowerCasedValue)
          : item.first_name.toLowerCase().includes(lowerCasedValue) ||
              item.last_name.toLowerCase().includes(lowerCasedValue) ||
              item.email.toLowerCase().includes(lowerCasedValue) ||
              activeFacultyYear.includes(lowerCasedValue) ||
              isNotStudent.includes(lowerCasedValue);
      });

      setData(filteredData);
    }
  };

  return (
    <>
      {!showSearchBar && (
        <SearchIcon
          isMobile
          icon={faMagnifyingGlass}
          style={{ color: '#7F8590' }}
          onClick={() => changeSearchBar()}
        />
      )}
      {showSearchBar && (
        <SearchBarWrapper isMobile>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ color: '#7F8590' }}
          />
          <SearchBarInput
            placeholder="Search name or ranking..."
            onChange={(event) => handleSearch(event.target.value)}
          />
          <SearchCancelIcon onClick={() => changeSearchBar()} />
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

export default TableHeaderSearch;
