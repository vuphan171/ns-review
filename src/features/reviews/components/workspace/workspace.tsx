import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { StarRating } from '@/components/ui/rate'

const rating = 2

const WorkSpace = () => {
  return (
    <div className='self-star sticky top-20 z-10 min-h-screen w-full shrink-0'>
      <Card className='flex-1 gap-y-4 overflow-auto rounded-md p-6'>
        <div className='border-b border-slate-200 pb-4 dark:border-slate-800'>
          <Label className='uppercase'>Escalation Workspace</Label>
          <h3 className='mt-2 text-xl font-bold tracking-tight text-slate-900 dark:text-white'>
            Ngọc Trâm
          </h3>
          <div className='flex items-center gap-x-2'>
            <StarRating className='text-yellow-500' value={rating} size='sm' />
            <span className='font-mono text-sm font-bold text-slate-700 dark:text-slate-300'>
              {rating}/5.0
            </span>
          </div>
        </div>
        <div>
          <p className='text-xs font-normal text-muted-foreground uppercase'>
            Original Review
          </p>
          <div className='mt-2 rounded-md border border-slate-200 bg-slate-50 p-4 text-sm leading-relaxed text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300'>
            Đặt lịch trước nhưng vẫn phải chờ khá lâu. Kỹ thuật ổn nhưng khu vực
            tiếp khách chưa được hướng dẫn rõ ràng.
          </div>
        </div>
        <div className='grid grid-cols-2 gap-x-4 gap-y-4 border-y border-slate-200 py-4 dark:border-slate-800'>
          <div>
            <p className='text-xs font-normal text-muted-foreground uppercase'>
              Source
            </p>
            <p className='mt-1 text-sm font-semibold text-slate-900 dark:text-slate-200'>
              Google Business Profile
            </p>
          </div>
          <div>
            <p className='text-xs font-normal text-muted-foreground uppercase'>
              Owner
            </p>
            <p className='mt-1 text-sm font-semibold text-slate-900 dark:text-slate-200'>
              Mai Tran
            </p>
          </div>
          <div>
            <p className='text-xs font-normal text-muted-foreground uppercase'>
              Last Updated
            </p>
            <p className='mt-1 text-sm font-semibold text-slate-900 dark:text-slate-200'>
              21:30 10-04
            </p>
          </div>
          <div>
            <p className='text-xs font-normal text-muted-foreground uppercase'>
              Workflow
            </p>
            <p className='mt-1 text-sm font-semibold text-slate-900 dark:text-slate-200'>
              Đã phản hồi
            </p>
          </div>
          <div>
            <p className='text-xs font-normal text-muted-foreground uppercase'>
              SLA
            </p>
            <p className='mt-1 text-sm font-semibold text-slate-900 dark:text-slate-200'>
              CLOSED
            </p>
          </div>
          <div>
            <p className='text-xs font-normal text-muted-foreground uppercase'>
              Salon
            </p>
            <p className='mt-1 text-sm font-semibold text-slate-900 dark:text-slate-200'>
              Luxe Nails &amp; Spa
            </p>
          </div>
        </div>
        <div>
          <p className='text-xs font-normal text-blue-600 uppercase dark:text-blue-500'>
            Draft Reply (AI Generated)
          </p>
          <textarea
            rows={3}
            className='mt-2 w-full rounded-md border border-slate-300 bg-white p-3 text-sm leading-relaxed text-slate-900 shadow-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-slate-700 dark:bg-black dark:text-slate-200 dark:focus:border-blue-500'
            placeholder='AI draft will appear here. You can edit before publishing.'
            defaultValue={
              'Chào chị Ngọc Trâm, rất tiếc vì trải nghiệm chưa tốt. Quản lý tiệm sẽ liên hệ hỗ trợ.'
            }
          />
        </div>
        <div className='pb-2'>
          <p className='text-xs font-normal text-emerald-600 uppercase dark:text-emerald-500'>
            Published Response
          </p>
          <div className='mt-2 rounded-md border border-emerald-200 bg-emerald-50 p-4 text-sm leading-relaxed text-emerald-800 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400'>
            Chào chị Ngọc Trâm, rất tiếc vì trải nghiệm chưa tốt. Quản lý tiệm
            sẽ liên hệ hỗ trợ.
          </div>
        </div>
        <div className='flex justify-between gap-x-2 border-t border-slate-200 pt-6 dark:border-slate-800'>
          <Button variant='outline' size='lg' className='flex-1'>
            Edit Draft
          </Button>
          <Button size='lg' className='flex-1'>
            Published
          </Button>
          <Button size='lg' variant='destructive' className='flex-1'>
            Escalate
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default WorkSpace
