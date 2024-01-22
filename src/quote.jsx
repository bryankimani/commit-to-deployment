import React from "react";

function Quote({ quote }) {
  return (
    <div>
      <p className="content">{ quote && quote.content }</p>
      <p>
        <span className="author">
          &mdash;
          { quote && quote.author }
        </span>
      </p>
    </div>
  );
}

export { Quote };
