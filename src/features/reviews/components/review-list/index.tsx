import { reviews } from '@/features/reviews/data/reviews'
import ReviewCard from '../review-card'

const ReviewList = () => {
  return (
    <div className='flex flex-col gap-y-3'>
      {reviews.map((review) => (
        <ReviewCard
          key={review.id}
          customer={review.customer}
          businessName={review.businessName}
          reviewedAt={review.reviewedAt.toISOString()}
          rating={review.rating}
          feedback={review.feedback}
          ownerName={review.ownerName}
          slaValue={review.slaValue}
        />
      ))}
    </div>
  )
}

export default ReviewList
