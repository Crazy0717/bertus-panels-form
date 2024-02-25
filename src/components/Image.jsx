import { useState } from "react";
import { RiImageAddFill } from "react-icons/ri";

const Image = () => {
  const [userImage, setUserImage] = useState();
  const [userImageShow, setUserImageShow] = useState(false);

  const loadImage = (e) => {
    setUserImage(URL.createObjectURL(e.target.files[0]));
    setUserImageShow(true);
  };
  return (
    <div className="form-image">
      <input id="files" onChange={loadImage} type="file" accept="image/*" />
      <div className="">
        <label for="files" class="user-image">
          <RiImageAddFill />
        </label>
      </div>
      <img className={userImageShow ? "image show" : "image"} src={userImage} />
    </div>
  );
};

export default Image;
