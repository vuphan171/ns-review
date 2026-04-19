import { useState } from 'react'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'

type ReviewRating = 'all' | '1' | '2' | '3' | '4' | '5'

const reviewRatingText = new Map<ReviewRating, string>([
  ['all', 'All Ratings'],
  ['1', '1 Star'],
  ['2', '2 Stars'],
  ['3', '3 Stars'],
  ['4', '4 Stars'],
  ['5', '5 Stars'],
])

const RatingFilter = () => {
  const [reviewRating, setReviewRating] = useState<ReviewRating>('all')

  const handleReviewRatingChange = (value: ReviewRating) => {
    setReviewRating(value)
  }

  return (
    <div className='flex flex-col gap-y-2'>
      <Label>Rating</Label>
      <Select value={reviewRating} onValueChange={handleReviewRatingChange}>
        <SelectTrigger className='w-full'>
          <SelectValue>{reviewRatingText.get(reviewRating)}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='all'>All Ratings</SelectItem>
          <SelectItem value='1'>1 Star</SelectItem>
          <SelectItem value='2'>2 Stars</SelectItem>
          <SelectItem value='3'>3 Stars</SelectItem>
          <SelectItem value='4'>4 Stars</SelectItem>
          <SelectItem value='5'>5 Stars</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default RatingFilter
