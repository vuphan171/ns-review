import { useState } from 'react'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'

type Salon =
  | 'all'
  | 'anna-hair'
  | 'bella-beauty'
  | 'urban-chic'
  | 'golden-scissors'
  | 'lux-salon'

const salonText = new Map<Salon, string>([
  ['all', 'All Salons'],
  ['anna-hair', 'Anna Hair Studio'],
  ['bella-beauty', 'Bella Beauty Lounge'],
  ['urban-chic', 'Urban Chic Salon'],
  ['golden-scissors', 'Golden Scissors'],
  ['lux-salon', 'LUX Salon & Spa'],
])

const SalonFilter = () => {
  const [salon, setSalon] = useState<Salon>('all')

  const handleSalonChange = (value: Salon) => {
    setSalon(value)
  }

  return (
    <div className='flex flex-col gap-y-2'>
      <Label>Salon</Label>
      <Select value={salon} onValueChange={handleSalonChange}>
        <SelectTrigger className='w-full'>
          <SelectValue>{salonText.get(salon)}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='all'>All Salons</SelectItem>
          <SelectItem value='anna-hair'>Anna Hair Studio</SelectItem>
          <SelectItem value='bella-beauty'>Bella Beauty Lounge</SelectItem>
          <SelectItem value='urban-chic'>Urban Chic Salon</SelectItem>
          <SelectItem value='golden-scissors'>Golden Scissors</SelectItem>
          <SelectItem value='lux-salon'>LUX Salon & Spa</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default SalonFilter
