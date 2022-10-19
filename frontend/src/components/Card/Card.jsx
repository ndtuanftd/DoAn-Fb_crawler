import React from "react";

export const CookieCard = () => {
  return (
    <div className="card border-light shadow-sm mb-4">
      <div className="card-body">
        <form action="">
          <div class="form-row align-items-center">
            <div className="col-auto">
              <div class="custom-file">
                <input
                  type="file"
                  class="custom-file-input"
                  id="validatedCustomFile"
                  required
                />
                <label class="custom-file-label" for="validatedCustomFile">
                  Choose file...
                </label>
                <div class="invalid-feedback">
                  Example invalid custom file feedback
                </div>
              </div>
            </div>
            <div className="col-auto">
              <button class="btn btn-primary" type="submit">
                Submit form
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const ToolCard = () => {
  return (
    <div className="card border-light shadow-sm mb-4">
      <div className="card-body">
        <form>
          <div class="form-row align-items-center">
            <div class="col-sm-3 my-1">
              <label class="sr-only" for="inlineFormInputName">
                Enter facebook groups/pages 's url
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
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
  );
};

export default ToolCard;
