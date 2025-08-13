import React, { useState, useEffect } from "react";

// Extract a single video's data
function extractVideoDataFromElement(element) {
  if (!element) return null;

  return {
    image: element.querySelector("img.thumb-image-container__no-lazy-thumb")?.src || "",
    time: element.querySelector(".thumb-image-container__on-video time")?.textContent.trim() || "",
    description: element.querySelector(".mobile-video-thumb__name")?.textContent.trim() || "",
    views: element.querySelector(".video-thumb-views")?.textContent.trim() || ""
  };
}

// Parse HTML string & return array of video objects
function extractVideoDataFromHTML(htmlString) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  const elements = Array.from(doc.querySelectorAll("li.thumb-list-mobile-item"));
  return elements.map(extractVideoDataFromElement);
}

export default function VideoExtractor() {
  const [inputHTML, setInputHTML] = useState("");
  const [outputData, setOutputData] = useState([]);

  // Load saved data from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("videoData");
    if (saved) {
      setOutputData(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage whenever outputData changes
//   useEffect(() => {
//   }, [outputData]);

  const handleProcess = () => {
    const newItems = extractVideoDataFromHTML(inputHTML);
    
    // Append to old data
    setOutputData(prev => {
      const merged = [...prev, ...newItems];
      return merged;
    });
    // localStorage.setItem("videoData", JSON.stringify(outputData));
// const gdaat = 
    // localStorage.setItem("videoData", JSON.stringify(outputData));


    // Clear textarea after processing
    setInputHTML("");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Video Data Extractor</h2>
      
      <textarea
        rows={8}
        style={{ width: "100%", padding: "8px" }}
        placeholder="Paste your HTML here..."
        value={inputHTML}
        onChange={(e) => setInputHTML(e.target.value)}
      />

      <button
        onClick={handleProcess}
        style={{ marginTop: "10px", padding: "10px 20px", cursor: "pointer" }}
      >
        Add to Saved List
      </button>

      <h3>Saved Data:</h3>
      <pre style={{ background: "#f5f5f5", padding: "10px" }}>
        {outputData.length > 0 ? JSON.stringify(outputData, null, 2) : "No saved data yet."}
      </pre>
    </div>
  );
}
