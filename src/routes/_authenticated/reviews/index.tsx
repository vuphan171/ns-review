import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/reviews/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='h-[10000px] w-full bg-red-500'>
      Hello "/_authenticated/reviewssss/"!
    </div>
  )
}
