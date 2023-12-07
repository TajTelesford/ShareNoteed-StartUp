import { useCallback } from 'react'
import Quill from 'quill'
import TOOLBAR_OPTIONS from './toolbaroptions'
import 'quill/dist/quill.snow.css'
import './styles.css'

const TextEditor = () => {

    const modules = {
        toolbar: TOOLBAR_OPTIONS
    }

    const wrapperRef = useCallback(wrapper => {
        if (wrapper == null) return;

        wrapper.innerHTML = "";
        const editor = document.createElement("div");
        wrapper.append(editor);
        const q = new Quill(editor, { theme: "snow", modules });
    }, []);

  return (
    <div className="contain" ref={wrapperRef} ></div>
  )
}

export default TextEditor