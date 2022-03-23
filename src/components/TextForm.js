import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {


    // text = "ajdlaj"; Wrong way to change the text
    // setText("new Text"); correct way

    const UpClick = () => {
        // console.log("Upper Case Clicked!" + text);
        let Uptext = text.toUpperCase();
        setText(Uptext);
        props.showAlert("Converted to Uppercase", "success");
    }

    const LpClick = () => {
        let Lptext = text.toLowerCase();
        setText(Lptext);
        props.showAlert("Converted to Lowercase", "success");
    }

    const UponChange = (event) => {
        // console.log("On change!");
        setText(event.target.value);
    }

    const CleartClick = () => {
        let setx = '';
        setText(setx);
        props.showAlert("Cleared all text", "success");
    }

    const SenClick = () => {
        // let set = text.slice(0,1).toUpperCase();
        // let t = text.slice(1,text.length).toLowerCase();
        // setText(set+t);
        // let s = text.toLowerCase().replace(/(^\s*\w|\s*\w)/g, function (ele) { return ele.toUpperCase() })
        /*eslint no-useless-escape: "off"*/
        let s = text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function (ele) { return ele.toUpperCase() })
        setText(s);
        props.showAlert("Converted to Sentence Case", "success");
    }

    const CapClick = () => {
        const se = text.split(" ");
        for (let index = 0; index < se.length; index++) {
            se[index] = se[index].charAt(0).toUpperCase() + se[index].slice(1);
        }
        const sf = se.join(" ");
        setText(sf);
        props.showAlert("Converted to Capitalisedcase", "success");
    }

    const CopyClick = () => {
        let tex = document.getElementById("mybox");
        tex.select();
        navigator.clipboard.writeText(tex.value);
        props.showAlert("Copied to your clipboard!", "success");
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className="container">
                <h1 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={UponChange} id="mybox" rows="8" style={{ color: props.mode === 'light' ? '#0c0c60' : 'white', backgroundColor: props.mode === 'light' ? 'white' : 'grey', cursor:'default' }}></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={UpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={LpClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={SenClick}>Convert to Sentencecase</button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={CapClick}>Convert to Capitalisedcase</button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={CopyClick}>Copy Text</button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={CleartClick}>Clear</button>
            </div>

            {/* <div className="container" style={{ color: props.mode === 'light' ? 'green' : 'white' }}> */}
            <div className="container" style={{ color: props.mode === 'light' ? '#0c0c60' : 'white' }}>
                <h2>Text Summary</h2>
                <p>No. of words {text.split(" ").filter((element) => { return element.length !== 0 }).length} and characters {text.length}</p>
                <p>Time required to read {0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minutes</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
            </div>
        </>
    )
}

TextForm.protoTypes = {
    heading: PropTypes.string
}