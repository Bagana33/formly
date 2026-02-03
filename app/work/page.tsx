import { workProjects } from "@/lib/work-data"
import { WorkPageClient } from "@/components/work-page-client"

export const revalidate = 300

export default async function WorkPage() {
  const projects = workProjects.slice(0, 24)

  return <WorkPageClient projects={projects ?? []} />
}
