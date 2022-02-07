import React from "react";

const Pagination = ({ pageSelection }) => {
  return (
    <div>
      <ul className="pagination justify-content-center mt-2">
        <li className="page-item">
          <button
            value="1"
            className="page-link"
            onClick={(event) => pageSelection(event)}
          >
            1
          </button>
        </li>
        <li className="page-item">
          <button
            value="2"
            className="page-link"
            onClick={(event) => pageSelection(event)}
          >
            2
          </button>
        </li>
        <li className="page-item">
          <button
            value="3"
            className="page-link"
            onClick={(event) => pageSelection(event)}
          >
            3
          </button>
        </li>
        <li className="page-item">
          <button
            value="4"
            className="page-link"
            onClick={(event) => pageSelection(event)}
          >
            4
          </button>
        </li>
        <li className="page-item">
          <button
            value="5"
            className="page-link"
            onClick={(event) => pageSelection(event)}
          >
            5
          </button>
        </li>
        <li className="page-item">
          <button
            value="6"
            className="page-link"
            onClick={(event) => pageSelection(event)}
          >
            6
          </button>
        </li>
        <li className="page-item">
          <button
            value="7"
            className="page-link"
            onClick={(event) => pageSelection(event)}
          >
            7
          </button>
        </li>
        <li className="page-item">
          <button
            value="8"
            className="page-link"
            onClick={(event) => pageSelection(event)}
          >
            8
          </button>
        </li>
        <li className="page-item">
          <button
            value="9"
            className="page-link"
            onClick={(event) => pageSelection(event)}
          >
            9
          </button>
        </li>
        <li className="page-item">
          <button
            value="10"
            className="page-link"
            onClick={(event) => pageSelection(event)}
          >
            10
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
