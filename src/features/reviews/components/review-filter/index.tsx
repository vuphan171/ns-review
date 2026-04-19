import { useState, type ChangeEvent } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import RatingFilter from './rating-filter'
import SalonFilter from './salon-filter'
import StatusFilter from './status-filter'

const ReviewFilter = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div className='grid grid-cols-4 gap-4 rounded-md border border-slate-200 bg-white px-4 py-6 shadow-sm dark:border-slate-800'>
      <div className='flex flex-col gap-y-2'>
        <Label>Search</Label>
        <Input
          placeholder='Name, salon or keywords...'
          className='h-9 w-full'
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <SalonFilter />
      <RatingFilter />
      <StatusFilter />
    </div>
  )
}

export default ReviewFilter
