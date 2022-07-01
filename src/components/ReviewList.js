import React from "react";
import ReviewItem from "./ReviewItem";

const ReviewList = ({reviews}) => {
    return (
        <div className="reviewList">
            {reviews.map(review => (
                <ReviewItem review={review} />
            ))}
        </div>
    )
}

export default ReviewList