import { workProjects, type WorkProject } from "@/lib/work-data"

export type Plan = {
  name: string
  price: string
  unit?: string
  description: string
  popular?: boolean
  features: string[]
}

export type TimelineStep = {
  day: string
  title: string
  description: string
}

export type FAQ = {
  question: string
  answer: string
}

export type ServiceItem = {
  title: string
  description: string
}

export type HomepageCard = {
  title: string
  description: string
  buttonText: string
  buttonHref: string
}

export type ProtocolCard = {
  title: string
  description: string
}

export type SiteContent = {
  hero: {
    eyebrow: string
    headline: string
    subhead: string
    description: string
  }
  heroCards: HomepageCard[]
  protocolSection: {
    title: string
    cards: ProtocolCard[]
  }
  portfolioSection: {
    title: string
  }
  membershipSection: {
    title: string
    description: string
  }
  proofs: string[]
  industries: string[]
  problems: string[]
  solutions: string[]
  serviceSystem: ServiceItem[]
  work: WorkProject[]
  plans: Plan[]
  timeline: TimelineStep[]
  assurances: string[]
  faqs: FAQ[]
}

export function getDefaultContent(): SiteContent {
  return {
    hero: {
      eyebrow: "Formly · 3 хоногт · 2025",
      headline: "3 хоногт захиалга авчирдаг веб сайт",
      subhead: "Монголын үйлчилгээний бизнесүүдэд зориулсан, mobile-first, Messenger-ээр холбогддог веб шийдэл.",
      description: "72 цагийн дотор хүргэх өндөр гүйцэтгэлтэй веб сайтаар танай брэндийг өсгөнө. Тогтвортой өсөлт энергээр дүүрэн дизайн-тай уулзана.",
    },
    heroCards: [
      {
        title: "Тусламж Үйлчилгээ",
        description: "Таны тусгай дизайн багтай шууд холбогдох.",
        buttonText: "Чат эхлүүлэх",
        buttonHref: "https://m.me/961702760355484",
      },
      {
        title: "Стратегийн Шинжилгээ",
        description: "Таны дижитал стратегид мэргэжлийн зөвлөгөө.",
        buttonText: "Зөвлөлдөх цаг захиалах",
        buttonHref: "/contact",
      },
    ],
    protocolSection: {
      title: "3 Хоногийн Протокол",
      cards: [
        {
          title: "Бүтэц",
          description: "Сайтын газрын зураг болон гол бүтцийг зөв урсгалд зориулж тодорхойлох.",
        },
        {
          title: "Харагдах Бүтэц",
          description: "Өндөр чанартай дүрслэл хийж, контентыг саадгүй нэгтгэх.",
        },
        {
          title: "Нээлт",
          description: "Нарийвчилсан чанарын баталгаажуулалт, дараа нь шууд амьд нээлт.",
        },
      ],
    },
    portfolioSection: {
      title: "Сонгосон Портфолио",
    },
    membershipSection: {
      title: "Гишүүнчлэл",
      description: "Тогтвортой дижитал өсөлтөд зориулсан ил тод үнэ. Хүссэн үедээ зогсоож, цуцлах боломжтой.",
    },
    proofs: ["ЖДБ-д зориулав", "Messenger + Form", "Mobile-first"],
    industries: ["Сургалтын төв", "Эмнэлэг / Гоо сайхан", "Үйлчилгээ", "Зуучлал"],
    problems: [
      "Facebook page-д найддаг тул лавлагаа алга болдог",
      "Үнийн мэдээлэл, санал хүсэлт тарамдсан",
      "Мобайл дээр уншихад хэцүү, UX эмх цэгцгүй",
      "Итгэл төрүүлэх хангалттай баримт байхгүй",
    ],
    solutions: [
      "Бүтэц нь хэрэглэгчийг шууд захиалга хүртэл чиглүүлнэ",
      "Messenger + Form-оор нэг товчоор холбогдоно",
      "Брэндтэй нийцсэн, итгэл төрүүлэх UI",
      "Mobile-first, хурдтай кодчилол",
    ],
    serviceSystem: [
      { title: "UX бүтэц", description: "Үйлчилгээний урсгалыг 3 алхмаар ойлгомжтой болгоно" },
      { title: "Брэндтэй нийцсэн UI", description: "Өнгө, фонт, copy-г танай бизнест тааруулж кодолно" },
      { title: "Messenger + Form холболт", description: "Холбогдох сувгийг нэг товчоор ил тод үзүүлнэ" },
      { title: "Хурд + SEO", description: "Mobile-first код, HTTPS, analytics суурилуулалт" },
    ],
    work: workProjects.map((project) => ({ ...project })),
    plans: [
      {
        name: "Starter",
        price: "450,000",
        unit: "₮",
        description: "Эхлэхэд тохиромжтой",
        popular: true,
        features: ["1–3 хуудас", "Messenger + Form", "Mobile-first UX", "Дотооддоо засах заавар"],
      },
      {
        name: "Growth",
        price: "750,000",
        unit: "₮",
        description: "Илүү дэлгэрэнгүй",
        features: ["6–8 хуудас", "Work / FAQ / Process хуудас", "UX бичиглэл", "14 хоногийн дэмжлэг"],
      },
      {
        name: "Care",
        price: "120,000",
        unit: "₮ / сар",
        description: "Тогтмол арчилгаа",
        features: ["Сар бүрийн арчилгаа", "Контент шинэчлэл", "Жижиг хөгжүүлэлт", "Сар бүрийн тайлан"],
      },
    ],
    timeline: [
      { day: "1", title: "Бүтэц + баталгаажуулалт", description: "15 минутын уулзалт, UX flow, wireframe батлах" },
      { day: "2", title: "Дизайн + холболт", description: "Mobile-first UI, Messenger + Form, контент суулгах" },
      { day: "3", title: "Тест + нээлт", description: "Олон төхөөрөмжийн тест, домэйн/SSL, зааварчилгаа" },
    ],
    assurances: ["Нууц төлбөр байхгүй", "Дараа нь өргөтгөнө", "Албадсан багц байхгүй"],
    faqs: [
      {
        question: "Domain байхгүй бол яах вэ?",
        answer:
          "Домэйн худалдаж авахад бид туслана. Монголд .mn домэйн жилд 50,000-80,000₮ орчим. Сонгох, бүртгэхэд зөвлөгөө өгнө.",
      },
      {
        question: "3 хоногт үнэхээр дуусах уу?",
        answer:
          "Тийм. Starter (1-3 хуудас) 3 хоногт, Growth (6-8) 5-7 хоногт бэлэн болно. Контент бэлдэлтээс хамаарна.",
      },
      {
        question: "Дараа нь өргөтгөж болох уу?",
        answer:
          "Тийм, эхлээд Starter-аар эхлээд дараа нь Work/FAQ/Process зэрэг хуудсууд нэмэх боломжтой. Бид хамт өснө.",
      },
      {
        question: "Контент хэн бэлдэх вэ?",
        answer:
          "Текст, зураг зэрэг контентыг та бэлдэнэ. Агуулгын бүтэц, ямар зураг хэрэгтэй талаар зөвлөгөө өгнө. Шаардлагатай бол нэмэлт үйлчилгээ хэлбэрээр хийнэ.",
      },
      {
        question: "Сар бүр арчилгаа заавал авах уу?",
        answer:
          "Үгүй. Care багц сонголт. Өөрөө засах бол авахгүй байж болно. Тогтмол шинэчлэлт, засвар хэрэгтэй бол Care авна.",
      },
    ],
  }
}
