import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} inline>
      <div className="d-flex">
        <Form.Control
          type="text"
          name="q"
          size="sm"
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search Products..."
          // className="mr-sm-2 ml-sm-5"
        ></Form.Control>
        <Button type="submit" variant="outline-success" className="ml-2">
          Search
        </Button>
      </div>
    </Form>
  );
};

export default SearchBox;
