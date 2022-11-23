import React, { useState } from "react";
// import { Alert } from "@mui/material";

import "./Card.css";
export const CookieCard = () => {
  return (
    <div className="card border-light shadow-sm mb-4">
      <div className="card-body">
        <form action="">
          <div class="form-row align-items-center">
            <div className="col-auto">
              <div class="custom-file">
                <input class="form-control" type="file" id="formFile"></input>
                <div class="invalid-feedback">
                  Example invalid custom file feedback
                </div>
              </div>
            </div>
            <div className="col-auto">
              <button class="btn btn-primary" type="submit">
                Verify
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const ToolCard = () => {
  const [textArea, setTextArea] = useState("");
  const [submittedText, setSubmittedText] = useState(null);
  const [listOfUrls, setListOfUrls] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(textArea);
    setSubmittedText(textArea);
    setListOfUrls(textArea.split(","));

    setTextArea("");
  };
  return (
    <div>
      <div className="card border-light shadow-sm mb-4">
        <div className="card-body">
          <form onClick={handleSubmit}>
            <div class="form-row align-items-center">
              <div class="col-xl-4">
                <label for="inlineFormInputName">
                  Enter facebook groups/pages 's url
                </label>
                <textarea
                  onChange={(event) => {
                    setTextArea(event.target.value);
                    console.log(textArea);
                  }}
                  value={textArea}
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Ví dụ: https://www.facebook.com/groups/3105074999741166,.."
                ></textarea>
              </div>
              <div class="col-auto my-1">
                <button type="submit" class="btn btn-primary">
                  Crawl
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {submittedText && (
        <div>
          <p style={{ color: "red" }}>You just typed: {submittedText}</p>
        </div>
      )}
      {/* TODO: */}
      {listOfUrls &&
        listOfUrls.map((url) => {
          // if (
          //   url.match(
          //     "/(?:https?://)?(?:www.)?facebook.com/(?:(?:w.)*#!/)?(?:pages/)?(?:[w-.]*/)*([w-.]*)/"
          //   )
          // ) {
          return <p>{url}</p>;
          // }
          // else {
          //   return (
          //     <Alert severity="warning">
          //       {url} is not a correct facebook url
          //     </Alert>
          //   );
          // }
          // return (
          //   <alert severity="warning">
          //     {url} is not a corrent facebook url
          //   </alert>
          // );
        })}
    </div>
  );
};

export default ToolCard;
