import SummaryCard from './summary-card'

const ReviewSummary = () => {
  return (
    <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
      <SummaryCard title='Total Reviews' subtitle='17' />
      <SummaryCard title='Urgent Action' subtitle='05' variant='destructive' />
      <SummaryCard title='Auto-Reply Queued' subtitle='09' />
      <SummaryCard title='Portfolio Average' subtitle='3.6' variant='success' />
    </div>
  )
}

export default ReviewSummary
