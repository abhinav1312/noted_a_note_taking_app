import React from "react";
import imgArray from "../../assets/images/landing_page_animation_images.mjs";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";

const HomeRight = () => {
  return (
    <>
      <div className="landing-img-wrapper bg-dgrey h-full w-full">
        <div className="outside">
          {imgArray.map((imgObj, index) => {
            const link = imgObj.link;
            return (
              <div className="inside" key={index}>
                <img src={link} alt={imgObj.caption} />
                <h2 className="text-center text-dblue text-5xl font-bold capitalize my-8">
                  {imgObj.caption}
                  <span className="ml-4">
                    <DownloadDoneIcon
                      sx={{ fontSize: "5rem", color: "orange" }}
                    />
                  </span>
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomeRight;
