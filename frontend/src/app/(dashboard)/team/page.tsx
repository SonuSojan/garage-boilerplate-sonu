import { requireAuth } from '@/actions/auth.actions'
import { PageHeader } from '@/components/layout/PageHeader'

const teamMembers = [
  {
    name: 'Hieu Hoang Quan',
    role: 'Project Manager',
    initials: 'HQ',
    blurb: 'Coordinates the team, sprint planning and project delivery.',
  },
  {
    name: 'Sonu Sojan',
    role: 'Developer',
    initials: 'SS',
    blurb: 'Works on application development, implementation and testing.',
  },
  {
    name: 'Gladvin Savio',
    role: 'Business Analyst',
    initials: 'GS',
    blurb: 'Supports requirements, documentation and project analysis.',
  },
  {
    name: 'Oliver Ferris',
    role: 'UX Designer',
    initials: 'OF',
    blurb: 'Responsible for user experience and interface design.',
  },
  {
    name: 'Luka Grganovic',
    role: 'Developer',
    initials: 'LG',
    blurb: 'Works on application development, integration and testing.',
  },
]

export default async function TeamPage() {
  await requireAuth()

  return (
    <div className="space-y-8">
      <PageHeader
        title="Team 86"
        description="Meet the team behind our project."
      />

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-900 text-lg font-bold text-white dark:bg-white dark:text-black">
              {member.initials}
            </div>

            <h2 className="text-lg font-semibold">
              {member.name}
            </h2>

            <p className="mt-1 text-sm font-medium text-zinc-500">
              {member.role}
            </p>

            <p className="mt-4 text-sm leading-6 text-zinc-500">
              {member.blurb}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}