import { useState } from "react";
import "./App.css";
import CodeEditor from "./Components/CodeEditor";
import LanguageSelector from "./Components/LanguageSelector";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { showErrorToast } from "./Components/popup";
import { ToastContainer } from "react-toastify";
function App() {
  const [code, setCode] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [convertedCode, setConvertedCode] = useState("");
  const [spin, setSpin] = useState(false);
  const openai_key = import.meta.env.VITE_OPENAI_KEY;

  const languageOptions = [
    { value: "python", label: "Python" },
    { value: "javascript", label: "Javascript" },
    { value: "golang", label: "Golang" },
    { value: "java", label: "Java" },
    { value: "c", label: "C" },
  ];

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  const handleLanguageChange = (selectedOption) => {
    setSelectedLanguage(selectedOption);
  };

  const convertCode = () => {
    setSpin(true);

    if (!code || !selectedLanguage) {
      showErrorToast("Please provide code and select target language.");
      setSpin(false);
      return;
    } else {
      axios
        .post(
          `https://api.openai.com/v1/chat/completions`,
          {
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "user",
                content: `Convert the following  code to ${selectedLanguage}: \n${code}.`,
              },
            ],
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${openai_key}`,
            },
          }
        )
        .then((res) => {
          console.log(res);
          console.log(res.data.choices[0].message.content);
          setConvertedCode(res.data.choices[0].message.content);

          setSpin(false);
        })
        .catch((err) => {
          console.log(err);
          setSpin(false);
        });
    }
  };

  const handleClear = () => {
    setCode("");
    setConvertedCode("");
  };

  return (
    <>
      <div className="App ">
        <h1
          style={{
            color: "grey",
          }}
        >
          Code Converter
        </h1>
        <ToastContainer/>

        <div
          style={{
            display: "flex",
            margin: "auto",
            justifyContent: "space-around",
          }}
        >
          <div>
            <LanguageSelector
              onLanguageChange={handleLanguageChange}
              languageOptions={languageOptions}
              text={"Select Target Language"}
            />
          </div>
        </div>
      </div>

      <div>{spin && <CircularProgress color="primary" />}</div>

      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            width: "50%",
          }}
        >
          <CodeEditor code={code} onChange={handleCodeChange} lang={null} />
        </div>

        <div
          style={{
            width: "50%",
            paddingLeft: "20px",
          }}
        >
          <CodeEditor code={convertedCode} lang={selectedLanguage} />
        </div>
      </div>

      <br />

      <div
        style={{
          display: "flex",
          margin: "auto",
          justifyContent: "space-around",
        }}
      >
        <Stack spacing={120} direction="row">
          <Button
            className="responsive-button-container"
            variant="contained"
            onClick={handleClear}
            color="warning"
          >
            Clear
          </Button>
          <Button
            className="responsive-button-container"
            variant="contained"
            onClick={convertCode}
            color="warning"
          >
            Convert
          </Button>
        </Stack>
      </div>
      <div
        style={{
          textAlign: "left",
          paddingTop: "20px",
        }}
      >
        <p style={{ color: "grey" }}>Created By @ Krishna Prasad C</p>
      </div>
    </>
  );
}

export default App;
