import "./style.css";
import Avatar from "./Avatar";
import AvatarArr from "./therapists";

const AvatarCard = () => {
  console.log("AvatarArr-", AvatarArr);
  const AvatarCards = AvatarArr.map((card, index) => {
    return <Avatar {...card} key={index} />;
  });

  return <div className="grid">{AvatarCards}</div>;
};
export default AvatarCard;
