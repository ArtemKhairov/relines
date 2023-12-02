import { useState, useEffect } from "react";

import "./App.css";
import { List, Typography } from "antd";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://random-data-api.com/api/users/random_user?size=3")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  // if(!data.length){

  // }
  // console.log(!!-1)
  if (data.length <= 0) {
    return <div>null</div>;
  }

  return (
    <List
      size="default"
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      dataSource={data}
      renderItem={(item) => (
        <List.Item onClick={(e) => console.log(e)}>
          <Typography.Text mark>[ITEM]</Typography.Text> {item.first_name}
        </List.Item>
      )}
    />
  );
}

export default App;
