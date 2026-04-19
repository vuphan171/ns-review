import type { FC } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/card'
import { StarRating } from '@/components/ui/rate'

const reviewCardVariants = cva(
  'gap-y-2 rounded-md p-4 shadow-xs border cursor-pointer',
  {
    variants: {
      variant: {
        default: 'border-slate-200',
        active: 'border-blue-500/50',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

type Props = VariantProps<typeof reviewCardVariants> & {
  customer: string
  businessName: string
  reviewedAt: string
  rating: number
  feedback: string
  ownerName: string
  slaValue: string
}

const ReviewCard: FC<Props> = ({
  variant,
  customer,
  businessName,
  reviewedAt,
  rating,
  feedback,
  ownerName,
  slaValue,
}) => {
  return (
    <Card className={cn(reviewCardVariants({ variant }))}>
      <div className='flex items-center gap-3'>
        <p className='text-base font-semibold dark:text-white'>{customer}</p>
        <span className='text-slate-300 dark:text-slate-700'>|</span>
        <p className='text-sm text-slate-500 dark:text-slate-400'>
          {businessName}
        </p>
        <span className='text-slate-300 dark:text-slate-700'>|</span>
        <p className='text-sm text-slate-400 dark:text-slate-500'>
          {reviewedAt}
        </p>
        <div className='ml-auto'>
          <span className='inline-flex rounded-md border bg-emerald-100 px-2 py-0.5 text-[10px] font-bold tracking-wider text-emerald-700 uppercase dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400'>
            RESOLVED
          </span>
        </div>
      </div>
      <div className='flex items-center gap-x-2'>
        <StarRating className='text-yellow-500' value={rating} size='sm' />
        <span className='font-mono text-sm font-bold text-slate-700 dark:text-slate-300'>
          {rating}/5.0
        </span>
      </div>
      <p className='line-clamp-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300'>
        {feedback}
      </p>
      <div className='mt-2 flex items-center gap-4 text-[11px] font-medium tracking-wider text-slate-400 uppercase dark:text-slate-500'>
        <span>
          Owner:{' '}
          <span className='text-slate-600 dark:text-slate-400'>
            {ownerName}
          </span>
        </span>
        <span>
          SLA:{' '}
          <span className='font-bold text-red-600 dark:text-red-400'>
            {slaValue}
          </span>
        </span>
      </div>
    </Card>
  )
}

export default ReviewCard
