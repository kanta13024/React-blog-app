import React from "react";

const ImagePreview = (props) => {
  return (
    <div className="p-media__thumb" onClick={() => props.delete(props.id)}>
      <img src={props.path} alt="商品画像" />
    </div>
  );
};

export default ImagePreview;
