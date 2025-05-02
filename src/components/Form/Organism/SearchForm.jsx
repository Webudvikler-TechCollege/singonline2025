import { SearchField } from "../Molecyles/SearchField";

export const SearchForm = ({ keyword, onKeywordChange }) => {
  return (
    <div>
      <SearchField value={keyword} onChange={onKeywordChange} />
    </div>
  );
};
