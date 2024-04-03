import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

const LanguageSelector = ({
  // eslint-disable-next-line react/prop-types
  onLanguageChange,
  // eslint-disable-next-line react/prop-types
  text,
}) => {
  const handleChange = (e) => {
    onLanguageChange(e.target.value);
  };

  return (
    <div className="language-selector">
      <label style={{ fontSize: "18px", color: "grey" }}>{text} :</label>
      <br />
      <br />

      <div style={{}}>
        <FormControl
          sx={{
            m: 1,
            minWidth: 220,
            backgroundColor: "#E1F5FE",
            borderRadius: "1px",
          }}
        >
          <Select onChange={handleChange}>
            <MenuItem value={"python"}>Python</MenuItem>
            <MenuItem value={"javascript"}>Javascript</MenuItem>
            <MenuItem value={"golang"}>Golang</MenuItem>
            <MenuItem value={"java"}>Java</MenuItem>
            <MenuItem value={"c"}>C</MenuItem>
          </Select>
        </FormControl>

        <br />
        <br />
      </div>
    </div>
  );
};

export default LanguageSelector;
