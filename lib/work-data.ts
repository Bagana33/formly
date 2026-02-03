export interface WorkProject {
  slug: string
  title: string
  category: "Сургалтын төв" | "Эмнэлэг / гоо сайхан" | "Үйлчилгээ" | "Зуучлал"
  description: string
  image: string
  url?: string
  industry: string
  goal: string
  problem: string
  solution: string
  pages: string[]
  duration: string
}

export const workProjects: WorkProject[] = [
  {
    slug: "mongol-english-academy",
    title: "kmo education",
    category: "Сургалтын төв",
    description: "Англи хэлний сургалтын төвийн вэб сайт",
    image: "/kmo-education.png",
    url: "https://kmoedu.business/",
    industry: "Сургалтын төв",
    goal: "Онлайн бүртгэл нэмэгдүүлэх, сургалтын хөтөлбөрүүдийг танилцуулах",
    problem:
      "Facebook page-ээс өөр онлайн байршил байхгүй, үйлчлүүлэгч сургалтын талаар дэлгэрэнгүй мэдээлэл авч чадахгүй байсан",
    solution: "Сургалтын хөтөлбөр бүрт зориулсан тусдаа хуудас, онлайн бүртгэлийн форм, багш нарын танилцуулга",
    pages: ["Нүүр", "Хөтөлбөрүүд", "Багш нар", "Бүртгэл", "Холбоо барих"],
    duration: "3 хоног",
  },
  {
    slug: "shine-medee-clinic",
    title: "Derma Lux Клиник",
    category: "Эмнэлэг / гоо сайхан",
    description: "Арьс гоо сайхны эмнэлгийн вэб сайт",
    image: "/derma-lux-clinic.png",
    url: "https://derma-lux-clinic-website.vercel.app/",
    industry: "Эмнэлэг / гоо сайхан",
    goal: "Үйлчилгээний танилцуулга, цаг захиалгын систем",
    problem: "Үйлчлүүлэгчид үйлчилгээний үнэ, төрлийг мэдэхгүй байсан, цаг захиалахад хүндрэлтэй",
    solution: "Үйлчилгээ бүрийн дэлгэрэнгүй танилцуулга, үнийн жагсаалт, Messenger-ээр цаг захиалах боломж",
    pages: ["Нүүр", "Үйлчилгээ", "Үнэ", "Манай баг", "Холбоо барих"],
    duration: "3 хоног",
  },
  {
    slug: "nomad-tour",
    title: "Nomad Tour Mongolia",
    category: "Үйлчилгээ",
    description: "Аялал жуулчлалын компанийн вэб сайт",
    image: "/nomad-tour-mongolia.png",
    url: "https://nomad-way-travel-website.vercel.app/",
    industry: "Үйлчилгээ",
    goal: "Гадаад, дотоод аялагчдад аялалын багцуудыг танилцуулах",
    problem: "Аялалын багцууд зөвхөн PDF файлаар тараагддаг байсан, захиалга авахад хүндрэлтэй",
    solution: "Аялал бүрийн дэлгэрэнгүй хуудас, зургийн галерей, захиалгын форм",
    pages: ["Нүүр", "Аялалууд", "Галерей", "Бидний тухай", "Захиалга"],
    duration: "3 хоног",
  },
  {
    slug: "hr-connect",
    title: "HR Connect",
    category: "Зуучлал",
    description: "Хүний нөөцийн зуучлалын компанийн вэб сайт",
    image: "/hr-connect.png",
    url: "https://education-three-ruddy.vercel.app/",
    industry: "Зуучлал",
    goal: "Ажил олгогч болон ажил хайгчдыг холбох",
    problem: "Зөвхөн Facebook group-ээр ажлын зар тавьдаг байсан, мэргэжлийн имиж дутмаг",
    solution: "Ажлын зарын хуудас, CV илгээх боломж, компаний танилцуулга",
    pages: ["Нүүр", "Ажлын зар", "CV илгээх", "Бидний тухай", "Холбоо барих"],
    duration: "3 хоног",
  },
  {
    slug: "auto-master",
    title: "Auto Master",
    category: "Үйлчилгээ",
    description: "Авто засварын газрын вэб сайт",
    image: "/auto-repair-garage-website-modern.jpg",
    industry: "Үйлчилгээ",
    goal: "Үйлчилгээний танилцуулга, цаг захиалга",
    problem: "Үйлчлүүлэгчид ямар засвар хийдэг, үнэ хэд болохыг мэдэхгүй байсан",
    solution: "Засварын төрөл бүрийн танилцуулга, үнийн жагсаалт, онлайн цаг захиалга",
    pages: ["Нүүр", "Үйлчилгээ", "Үнэ", "Галерей", "Холбоо барих"],
    duration: "3 хоног",
  },
  {
    slug: "learn-code",
    title: "LearnCode Academy",
    category: "Сургалтын төв",
    description: "Програмчлалын сургалтын төвийн вэб сайт",
    image: "/coding-bootcamp-academy-website-tech.jpg",
    industry: "Сургалтын төв",
    goal: "Сургалтын хөтөлбөр танилцуулах, суралцагч бүртгэх",
    problem: "Сургалтын агуулга, хугацаа, үнийн талаар мэдээлэл хүрэлцэхгүй байсан",
    solution: "Курс бүрийн дэлгэрэнгүй хуудас, сургалтын хуваарь, онлайн бүртгэл",
    pages: ["Нүүр", "Курсууд", "Хуваарь", "Багш нар", "Бүртгэл"],
    duration: "3 хоног",
  },
]

export function getWorkBySlug(slug: string): WorkProject | undefined {
  return workProjects.find((project) => project.slug === slug)
}
