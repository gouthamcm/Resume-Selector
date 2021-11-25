import React from 'react'
import "antd/dist/antd.css";
import { Empty } from 'antd';
  
function EmptyContent() {
  return (
    <div style={{
      display: 'block', width: 700, padding: 30
    }}>
      <h1>Apply Filters</h1>
      <Empty 
        description="Sorry! No Resumes to display.. Submit few skills and see the magic!"
      />
    </div>
  );
}

export default EmptyContent;