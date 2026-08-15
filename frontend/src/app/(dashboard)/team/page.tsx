import { requireAuth } from '@/actions/auth.actions'
import { PageHeader } from '@/components/layout/PageHeader'
import { TeamAvatar } from '@/components/shared/TeamAvatar'

const teamMembers = [
  {
    name: 'Sonu Sojan',
    role: 'Developer',
    photo: '/team/sonu.png',
    blurb: 'Works on application development, implementation and testing.',
  },
  {
    name: 'Luka Grganovic',
    role: 'Developer',
    photo: '/team/luka.jpeg',
    blurb: 'Works on application development, integration and testing.',
  },
 {
  name: 'Gladvin Savio',
  role: 'Project Manager',
  photo: '/team/gladvin.jpeg',
  blurb: 'Coordinates the team, manages project tasks and supports planning and documentation.',
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
            <TeamAvatar
              name={member.name}
              photo={member.photo}
            />

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