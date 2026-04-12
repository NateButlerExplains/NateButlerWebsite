import { Metadata } from 'next'

export function generateStaticParams() {
  return [
    { eventType: 'corporate' },
    { eventType: 'executive-offsite' },
    { eventType: 'conference' },
    { eventType: 'cyber-event' },
  ]
}

const eventTypeMetadata: Record<string, { title: string; description: string }> = {
  corporate: {
    title: 'Keynote Speaker for Corporate Events - Nate Butler',
    description: 'Executive keynotes on GRC, AI, and cybersecurity strategy for corporate events and business conferences.',
  },
  'executive-offsite': {
    title: 'Keynote Speaker for Executive Offsites - Nate Butler',
    description: 'Custom keynotes for C-suite retreats and executive offsites on cybersecurity and digital transformation.',
  },
  conference: {
    title: 'Keynote Speaker for Conferences - Nate Butler',
    description: 'Captivating keynotes for industry conferences on cybersecurity, risk management, and AI strategy.',
  },
  'cyber-event': {
    title: 'Keynote Speaker for Cyber Events - Nate Butler',
    description: 'Expert talks on cybersecurity trends, best practices, and emerging threats for cyber-focused events.',
  },
}

export const generateMetadata = async (props: {
  params: Promise<{ eventType: string }>
}): Promise<Metadata> => {
  const params = await props.params
  const metadata = eventTypeMetadata[params.eventType] || eventTypeMetadata.corporate

  return {
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
    },
  }
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
