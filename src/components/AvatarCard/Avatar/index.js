import { Rating } from "react-simple-star-rating";

const Avatar = (props) => {
  return (
    <article className={props.id}>
      <div className="titlebox">
        <div className="imgbox">
          <img src={`assets/therapists/${props.img}`} alt="Sample photo" />
        </div>
        <div className="title">
          {/* Seamlessly visualize quality */}
          {props.name}
          <br />
          {props.profession}
        </div>
        <div className="svg">
          {/* <svg stroke="currentColor" fill="currentColor" strokeWidth="0" className="icon" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512" style={{width:"43",height:"43",verticalAlign:"middle",fill:"#81BBF4"}}><path d="M21.5,21.5v129h64.5v-32.25v-64.5v-32.25zM86,53.75c0,17.7805 14.4695,32.25 32.25,32.25c17.7805,0 32.25,-14.4695 32.25,-32.25c0,-17.7805 -14.4695,-32.25 -32.25,-32.25c-17.7805,0 -32.25,14.4695 -32.25,32.25zM118.25,86c-17.7805,0 -32.25,14.4695 -32.25,32.25c0,17.7805 14.4695,32.25 32.25,32.25c17.7805,0 32.25,-14.4695 32.25,-32.25c0,-17.7805 -14.4695,-32.25 -32.25,-32.25z"></path></svg> */}
          <Rating initialValue={props.rate} size="15" readonly="true" />
        </div>
      </div>
      <q>
        <div className="text">
          {/* Collaboratively administrate empowered markets via plug-and-play networks. */}
          {props.approach}
        </div>
      </q>
    </article>
  );
};
export default Avatar;
