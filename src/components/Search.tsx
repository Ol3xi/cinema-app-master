import React, { ChangeEvent } from "react";
import { Form } from "react-bootstrap";

interface SearchProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Search: React.FC<SearchProps> = ({ value, onChange }) => {
  return (
    <Form>
      <Form.Group controlId="formBasicSearch">
        <Form.Control
          type="text"
          placeholder="Search movies"
          value={value}
          onChange={onChange}
        />
      </Form.Group>
    </Form>
  );
};
