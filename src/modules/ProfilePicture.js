import dogSrc from "../images/dog.jpg";

function ProfilePicture() {
  return (
    <div className="avatar">
      <img src={dogSrc} />
    </div>
  );
}

export default ProfilePicture;
