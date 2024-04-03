import  { useRef } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-golang';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';
import { Button } from 'antd'; 
import { ToastContainer } from "react-toastify";
import { showErrorToast, showSuccessToast } from "./popup";

// eslint-disable-next-line react/prop-types
function CodeEditor({ code, onChange, lang }) {
  const editorRef = useRef(null);

  const handleCopyCode = () => {
    if (editorRef.current) {
      const codeToCopy = editorRef.current.editor.getValue();
      navigator.clipboard.writeText(codeToCopy)
        .then(() => {
       
          showSuccessToast('Code copied to clipboard');
        })
        .catch((error) => {
          showErrorToast('Failed to copy code:', error);
          
        });
    }
  };

  return (
    <div style={{ paddingTop: '30px' }}>
      <div style={{ marginBottom: '10px' }}>
        <Button type="primary" onClick={handleCopyCode}>
          Copy code
        </Button>
        <ToastContainer/>
      </div>
      <AceEditor
        ref={editorRef}
        mode={lang}
        theme="monokai"
        width="100%"
        wrapEnabled={true}
        height="400px"
        value={code}
        onChange={onChange}
        name="code-editor"
        editorProps={{ $blockScrolling: Infinity }}
        enableBasicAutocompletion={true}
        enableLiveAutocompletion={true}
        setOptions={{ useWorker: false }}
      />
    </div>
  );
}

export default CodeEditor;
