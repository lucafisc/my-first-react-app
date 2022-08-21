import dogSrc from "../images/dog.jpg";

function ProfilePicture() {
  return (
    <>
      <div className="avatar">
        <div className="credits">
          Photo by{" "}
          <a href="https://unsplash.com/@alecuffia?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            José Alejandro Cuffia
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/s/photos/profile?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </div>
        <img src={dogSrc} />
      </div>
    </>
  );
}

export default ProfilePicture;
