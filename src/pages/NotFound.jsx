import React from "react";
import { Button, Result } from "antd";
import { Link } from "react-router-dom";
const App = () => (
  <Result
    className="mt-40"
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={
      <Button type="default">
        <Link to="/">Back Home</Link>
      </Button>
    }
  />
);
export default App;
