import {useState} from "react";
import { Divider, Input } from 'antd';

// Iteration 5
function SearchBar(props) {
    const [searchInput, setSearchInput] = useState("");
    const {searchFood} = props;

      const handleSelect = (e) => {
        setSearchInput(e.target.value);
     
        console.log("selected", e.target.value);
        searchFood(e.target.value); 
      };

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={searchInput} type="text" onChange={handleSelect} />
    </>
  );
}

export default SearchBar;