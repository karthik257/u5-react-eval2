import React from "react";

function ProductInput({ data, handleData, handleSubmit }) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="">
          <input
            type="text"
            placeholder="Enter Title"
            name="title"
            value={data.title}
            onChange={handleData}
          />
        </div>
        <div className="">
          <input
            type="number"
            placeholder="Enter Cost"
            name="cost"
            value={data.cost}
            onChange={handleData}
          />
        </div>
        <div className="">
          <input
            type="text"
            placeholder="Enter URL of Image"
            name="image"
            value={data.image}
            onChange={handleData}
          />
        </div>
        <div className="">
          <select name="category" value={data.category} onChange={handleData}>
            <option value="">Select ---</option>

            <option value="vegetables">vegetables</option>
            <option value="fruits">fruits</option>
            <option value="provisions">provisions</option>
          </select>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </>
  );
}

export default ProductInput;
