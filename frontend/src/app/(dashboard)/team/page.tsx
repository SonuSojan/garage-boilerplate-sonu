import { requireAuth } from '@/actions/auth.actions'
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
    blurb:
      'Coordinates the team, manages project tasks and supports planning and documentation.',
  },
]

export default async function TeamPage() {
  await requireAuth()

  return (
    <div className="min-h-screen rounded-2xl bg-slate-50 p-6">
      <div className="space-y-8">
        <div className="rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 p-6 text-white shadow-md">
          <h1 className="text-3xl font-bold">
            Team 86
          </h1>

          <p className="mt-1 text-sm text-blue-100">
            Meet the team behind our project.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-md transition duration-200 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="mb-5 inline-block rounded-full ring-4 ring-blue-100">
                <TeamAvatar
                  name={member.name}
                  photo={member.photo}
                />
              </div>

              <h2 className="text-xl font-semibold">
                {member.name}
              </h2>

              <p className="mt-1 text-sm font-semibold text-blue-600">
                {member.role}
              </p>

              <div className="my-4 h-1 w-12 rounded-full bg-blue-500" />

              <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {member.blurb}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}