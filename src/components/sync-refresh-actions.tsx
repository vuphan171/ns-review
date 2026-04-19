import { Button } from '@/components/ui/button'

const SyncRefreshActions = () => {
  return (
    <div className='flex gap-x-2'>
      <Button className='bg-blue-500 text-white'>Sync GBP</Button>
      <Button>Refresh</Button>
    </div>
  )
}

export default SyncRefreshActions
