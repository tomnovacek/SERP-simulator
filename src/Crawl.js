import React from "react";

function CrawlPage(props) {
  const [info, setInfo] = React.useState("");
  const [remoteData, setRemoteData] = React.useState("No data fetched yet!");

  async function load() {
    const response = await fetch(info);
    console.log(info);
    const text = await response.text();
    setRemoteData(text);
  }

  return (
    <div>
      <input value={info} onChange={(e) => setInfo(e.target.value)} />
      <button onClick={load}>Fetch</button>
      <textarea>{remoteData}</textarea>
    </div>
  );
}
export default CrawlPage;
