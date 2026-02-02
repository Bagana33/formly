import { getWorkProjectsFromSupabase } from "@/lib/work-data"
import { WorkPageClient } from "@/components/work-page-client"

export const revalidate = 300

export default async function WorkPage() {
  const projects = await getWorkProjectsFromSupabase()

  return <WorkPageClient projects={projects ?? []} />
}
