import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

export default function SearchBar() {
    return (
        <SearchContainer>
            <SearchField>
                <FiSearch />
                <input type="text" placeholder="Search all orders" />
            </SearchField>
        </SearchContainer>
    );
}

const SearchContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 10px 20px;
  background-color: #fff;
  border-bottom: 1px solid #eaeaea;
  margin-bottom: 20px;
`;

const SearchField = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 5px 10px;
  background-color: #f7f7f7;

  input {
    border: none;
    outline: none;
    background: none;
    margin-left: 5px;
  }

  svg {
    color: #888;
  }
`;
