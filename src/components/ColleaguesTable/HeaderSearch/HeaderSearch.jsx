/* eslint-disable react/prop-types */
import { colleaguesData } from '../../../utils/mock/colleaguesTest';
import { SearchBarWrapper, SearchBarInput } from './HeaderSearchStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const HeaderSearch = ({ setData }) => {
  const handleSearch = (value) => {
    if (value === '') {
      setData(colleaguesData);
    } else {
      const filteredData = colleaguesData.filter((item) => {
        const lowerCasedValue = value.toLowerCase();
        return (
          item.year.toString().includes(lowerCasedValue) ||
          item.firstName.toLowerCase().includes(lowerCasedValue) ||
          item.lastName.toLowerCase().includes(lowerCasedValue) ||
          item.email.toLowerCase().includes(lowerCasedValue)
        );
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
          placeholder="Search name, email or year"
          onChange={(event) => handleSearch(event.target.value)}
        />
      </SearchBarWrapper>
    </>
  );
};

export default HeaderSearch;
