/* eslint-disable react/prop-types */
import { SearchBarWrapper, SearchBarInput } from './TableHeaderSearchStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const HeaderSearch = ({ setData, dataList, placeholderText }) => {
  const handleSearch = (value) => {
    if (value === '') {
      setData(dataList);
    } else {
      const filteredData = dataList.filter((item) => {
        const lowerCasedValue = value.toLowerCase();
        return (
          item.id.toString().includes(lowerCasedValue) ||
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
          placeholder={placeholderText}
          onChange={(event) => handleSearch(event.target.value)}
        />
      </SearchBarWrapper>
    </>
  );
};

export default HeaderSearch;
