import React, { useState } from "react";

const MultiLineInput = ({ className }) => {
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div className={`${className} mt-6`}>
            <label htmlFor="multiLineInput" style={{ display: "block", marginBottom: "8px" }}>
                <textarea
                    className="bg-transparent"
                    id="multiLineInput"
                    value={text}
                    onChange={handleChange}
                    rows="5" // Defines the number of visible text rows
                    style={{
                        width: "100%",
                        padding: "10px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        boxSizing: "border-box",
                        resize: "vertical", // Allows resizing of the textarea vertically
                    }}
                    placeholder="Type your message here..."
                />
            </label>
            <p style={{ marginTop: "10px" }}>You entered: {text || "Nothing"}</p>
        </div>
    );
};

export default MultiLineInput;
