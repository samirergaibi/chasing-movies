import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/random-movies')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/random-movies"!</div>
}
