import React, { useState } from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField"; // Required for the input field
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const Listbox = styled("ul")(({ theme }) => ({
  width: "100%",
  margin: 0,
  padding: 0,
  position: "absolute",
  borderRadius: "0px 0px 10px 10px",
  border: "1px solid var(--color-primary)",
  top: 60,
  height: "max-content",
  maxHeight: "500px",
  zIndex: 10,
  overflowY: "scroll",
  left: 0,
  bottom: 0,
  right: 0,
  listStyle: "none",
  backgroundColor: "var(--color-black)",
  overflow: "auto",
  "& li.Mui-focused": {
    backgroundColor: "#4a8df6",
    color: "white",
    cursor: "pointer",
  },
  "& li:active": {
    backgroundColor: "#2977f5",
    color: "white",
  },
}));

function Search({ searchData, placeholder }) {
  const [value, setValue] = useState(null);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if (value) {
      console.log(value);
      navigate(`/album/${value.slug}`);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <form
        className={styles.wrapper}
        onSubmit={(e) => {
          onSubmit(e);
        }}
      >
        <Autocomplete
          options={searchData || []}
          getOptionLabel={(option) => option.title}
          onChange={(event, newValue) => setValue(newValue)}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder={placeholder}
              required
              className={styles.search}
              sx={{
                "& .MuiInputBase-root": {
                  height: "48px", // Match button height
                  width: "800px", // Adjust width as needed
                  backgroundColor: "white", // Set background to white
                  borderRadius: "8px 0px 0px 8px", // Set specific corner radii
                  border:"1px solid black",
                },
              }}
            />
          )}
          ListboxComponent={(props) => <Listbox {...props} />}
        />
        <div>
          <button className={styles.searchButton} type="submit">
            <SearchIcon />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;
