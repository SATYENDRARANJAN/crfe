import styled from "styled-components";
import Review from "./customer/Review"

const CustomerReviews = ({reviews}) => {
    return ( <Inner>
        {reviews && reviews.length > 0 &&
          reviews.map((item, index) => <Review key={index} review={item} />)}
        {reviews &&  reviews.length === 0 && <div>No Reviews found!</div>}
      </Inner> );
}

const Inner = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px 20px;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
  background: #f8f8f8;
  border-radius: 4px;
`;
 
export default CustomerReviews;