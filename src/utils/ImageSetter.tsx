import React, { useState, useEffect } from "react";
import SmallLoader from "../components/smLoader/index";

interface IProps {
  src: any;
  className: string;
}
const ImageSetter = React.memo(({ src, className }: IProps) => {
  const [loading, setLoading] = useState(true);
  const [currentSrc, updateSrc] = useState("");

  useEffect(() => {
    const imageToLoad = new Image();
    imageToLoad.src = src;
    imageToLoad.onload = () => {
      setLoading(false);
      updateSrc(src);
    };
  }, [src]);

  return (
    <>
      {loading ? (
        <SmallLoader />
      ) : (
        <img src={currentSrc} alt="" className={className} />
      )}
    </>
  );
});

export default ImageSetter;
