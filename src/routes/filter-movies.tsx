import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/filter-movies')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/filter-movies"!</div>;
}
