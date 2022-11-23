import styled from "styled-components";
import "./review.css";
import Moment from "moment";
import { Rating } from "react-simple-star-rating";


const Review = ({ review }) => {
    
    const getContent = (value) => {
        if (value === undefined || value === null || value === "") return undefined;
        return value
  }

   
    

    return (
      <div>
        {review !== undefined && (
          <div className="container">
            <div className="header">
              <div class="userName">
                {/* <Icon src={UserIcon}></Icon>{" "} */}
                <p className="userNameContent">
                  {getContent(review.createdBy)}
                </p>
              </div>
              <div className="title"><u>{getContent(review.title)}</u></div>
              <div className="rating">
                {" "}
                <Rating
                  readonly={true}
                  allowFraction={true}
                  initialValue={review.rating}
                />
                <div className="rightContainer">
                  <div>{Moment(review.createdAt).format("DD-MM-YYYY")}</div>
                </div>
              </div>
            </div>
            <div className="details">
              <div className="content">
                <div className="leftContainer">
                  <em>{getContent(review.content)}</em>
                </div>
              </div>
              <div className="imagesContainer">
                {review.images &&
                  review.images.length > 0 &&
                  review.images.map((img, index) => (
                    <ImageHeader key={index} src={img.url} alt="Loading..." />
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
}
 
export default Review;

const Wrapper= styled.div`
    width:100%;
    display:flex;
    // position:fixed;
    // top:0px;
    height:100px;
    color:#fff;
    background :${props => props.primaryColor ? props.primaryColor : "#034c9d"};;
    justify-content:space-between;
    box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.06);

`

const ImageHeader = styled.img`
    display:flex;
    padding:20px;
    max-width:100px;
    max-height:100px;

`
const ButtonTray=styled.div`
    display:flex;
    
`
const Icon = styled.img`
    display: flex;
    color: #000000;
    width: 40px;
    height: 40px;
`;

const HeaderDiv=styled.div`
    display: flex;
    flex:auto;
    flex-direction: column;
    height:100%;
    // align-items:center;
    justify-content:center;
`
const Title= styled.div`
    display: flex;
    padding-top: 10px;
    padding-left: 10px;
    font-family:'Open Sans';
    font-size: 30px;
`
const SubTitle= styled.div`
    display: flex;
    padding-top: 10px;
    padding-left: 10px;
    font-family:'Open Sans';


`

const Text=styled.label` 
display: flex;
font-family: "Open Sans";
font-size: 15px;
color: #fff;
padding-left: 50px;
// height:105px;
text-align: left;
justify-content:center;
align-items:center;
`

