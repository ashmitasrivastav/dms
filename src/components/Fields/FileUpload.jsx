import React, { useState } from "react";

const FileUpload = () => {
    const [fileName, setFileName] = useState("");

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name); // Store the file name
        }
    };

    return (
        <div style={{ width: "100%" }}>
            <label htmlFor="file-upload" style={{ display: "block", marginBottom: "8px" }}></label>
            <input
                id="file-upload"
                type="file"
                onChange={handleFileChange}
                style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    boxSizing: "border-box",
                }}
            />
            {fileName && (
                <p style={{ marginTop: "10px" }}>
                    <strong>Selected File: </strong>{fileName}
                </p>
            )}
        </div>
    );
};

export default FileUpload;
