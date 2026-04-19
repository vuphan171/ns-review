import { useState } from 'react'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'

type ReviewStatus = 'all' | 'replied' | 'ai_pending' | 'auto_pending'

const reviewStatusText = new Map<ReviewStatus, string>([
  ['all', 'All Status'],
  ['replied', 'Replied'],
  ['ai_pending', 'AI Pending'],
  ['auto_pending', 'Auto Pending'],
])

const StatusFilter = () => {
  const [reviewRating, setReviewRating] = useState<ReviewStatus>('all')

  const handleReviewRatingChange = (value: ReviewStatus) => {
    setReviewRating(value)
  }

  return (
    <div className='flex flex-col gap-y-2'>
      <Label>Status</Label>
      <Select value={reviewRating} onValueChange={handleReviewRatingChange}>
        <SelectTrigger className='w-full'>
          <SelectValue>{reviewStatusText.get(reviewRating)}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='all'>All Status</SelectItem>
          <SelectItem value='replied'>Replied</SelectItem>
          <SelectItem value='ai_pending'>AI Pending</SelectItem>
          <SelectItem value='auto_pending'>Auto Pending</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default StatusFilter
