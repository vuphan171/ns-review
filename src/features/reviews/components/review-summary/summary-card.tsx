import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const summaryValueVariants = cva(
  'font-mono text-3xl font-semibold tracking-tight',
  {
    variants: {
      variant: {
        default: 'text-foreground',
        success: 'text-green-600 dark:text-green-500',
        destructive: 'text-red-600 dark:text-red-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

const cardSummaryVariants = cva(
  'gap-y-2 rounded-md p-4 shadow-xs border border-slate-200 border-l-[3px]',
  {
    variants: {
      variant: {
        default: 'border-l-gray-500',
        success: 'border-l-emerald-500',
        destructive: 'border-l-red-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

type Props = VariantProps<typeof cardSummaryVariants> & {
  title: string
  subtitle: string
}

const SummaryCard: React.FC<Props> = ({ title, subtitle, variant }) => {
  return (
    <Card className={cn(cardSummaryVariants({ variant }))}>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 p-0'>
        <CardTitle className='text-xs font-normal text-muted-foreground uppercase'>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className='px-0'>
        <div className={cn(summaryValueVariants({ variant }))}>{subtitle}</div>
      </CardContent>
    </Card>
  )
}

export default SummaryCard
