import { Activity, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

type ReviewOperationsProps = React.HTMLAttributes<HTMLDivElement>

/** Placeholder timestamp — replace with live sync state when wired to the API. */
const LAST_SYNC_ISO = '2026-04-19T16:24:53'

export function ReviewOperations({
  className,
  ...props
}: ReviewOperationsProps) {
  return (
    <div
      className={cn(
        'flex min-w-0 flex-1 flex-wrap items-center gap-x-4 gap-y-2',
        className
      )}
      {...props}
    >
      <div className='flex min-w-0 flex-wrap items-center gap-2'>
        <span className='truncate text-sm font-semibold tracking-tight'>
          Review operations
        </span>
        <Badge className='shrink-0 bg-green-50 font-normal text-green-700 dark:bg-green-950 dark:text-green-300'>
          Active
        </Badge>
      </div>

      <Separator
        orientation='vertical'
        className='hidden h-4 sm:block'
        aria-hidden
      />

      <div className='flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground'>
        <span className='inline-flex items-center gap-1.5'>
          <Clock className='size-3.5 shrink-0 opacity-70' aria-hidden />
          <span>
            Last sync{' '}
            <time dateTime={LAST_SYNC_ISO}>19 Apr 2026, 16:24:53</time>
          </span>
        </span>

        <Separator orientation='vertical' className='hidden h-3 md:block' />

        <span className='inline-flex items-center gap-1.5'>
          <Activity className='size-3.5 shrink-0 opacity-70' aria-hidden />
          <span className='sr-only'>Health status:</span>
          <span className='text-muted-foreground'>Health</span>
          <Badge
            variant='outline'
            className='border-emerald-500/40 bg-emerald-500/10 font-normal text-emerald-700 dark:text-emerald-400'
          >
            Optimal
          </Badge>
        </span>
      </div>
    </div>
  )
}

export default ReviewOperations
