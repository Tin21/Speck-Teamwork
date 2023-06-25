/* eslint-disable react/prop-types */
import { SearchBarWrapper, SearchBarInput } from './TableHeaderSearchStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Context } from '../../context/Context';
import { useContext } from 'react';

const TableHeaderSearch = ({ setData, placeholderText, byRankIsTrue }) => {
  const { usersTable } = useContext(Context);

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
      <SearchBarWrapper>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ color: '#7F8590' }}
        />
        <SearchBarInput
          placeholder={placeholderText}
          onChange={(event) => handleSearch(event.target.value)}
        />
      </SearchBarWrapper>
    </>
  );
};

export default TableHeaderSearch;
