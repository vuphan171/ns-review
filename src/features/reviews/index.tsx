import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import ReviewOperations from '@/components/review-operations'
import SyncRefreshActions from '@/components/sync-refresh-actions'
import ReviewFilter from './components/review-filter'
import ReviewList from './components/review-list'
import ReviewSummary from './components/review-summary'
import WorkSpace from './components/workspace/workspace'

export function Reviews() {
  return (
    <>
      <Header fixed>
        <ReviewOperations className='me-auto' />
        <SyncRefreshActions />
      </Header>
      <Main fluid className='flex flex-1 flex-col gap-4 bg-slate-50 sm:gap-6'>
        <div className='flex flex-wrap items-end justify-between gap-2'>
          <div>
            <h2 className='text-2xl font-bold tracking-tight'>All Reviews</h2>
            <p className='text-muted-foreground'>
              Command center for live Google review handling, AI draft review,
              and response operations.
            </p>
          </div>
        </div>
        <div className='grid items-start gap-4 xl:grid-cols-[1fr_450px]'>
          <div className='flex min-w-0 flex-1 flex-col gap-y-6'>
            <ReviewFilter />
            <ReviewSummary />
            <ReviewList />
          </div>
          <WorkSpace />
        </div>
      </Main>
    </>
  )
}
