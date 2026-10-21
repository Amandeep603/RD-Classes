export const PORTAL_SECTION_DATA = {
  pill: {
    icon: 'Zap',
    text: '24/7 STUDENT LEARNING PORTAL',
  },
  heading: {
    prefix: 'Never Miss a Class With Our ',
    highlight: 'HD Video Player',
  },
  paragraph:
    'Missed a class for school competitions or need a late-night concept revision before your pre-boards? Log in to your private student dashboard anytime.',
  features: [
    {
      id: 'feature-1',
      icon: 'PlayCircle',
      tileBg: '#FFEBA8',
      title: '136 HD Recorded Video Lectures',
      description:
        'Complete syllabus with zero gaps — watch anytime at 1x to 2x speed.',
    },
    {
      id: 'feature-2',
      icon: 'FileText',
      tileBg: '#D6E8FB',
      title: 'Chapter-wise PDF Notes & Formula Sheets',
      description:
        'One-click access to handwritten solutions & board formula cheatsheets.',
    },
    {
      id: 'feature-3',
      icon: 'MonitorPlay',
      tileBg: '#FFD3B3',
      title: 'Cross-Device Progress Tracking',
      description:
        'Seamless resume watching across laptop, tablet and mobile browsers.',
    },
    {
      id: 'feature-4',
      icon: 'Headset',
      tileBg: '#D0E6FA',
      title: 'Direct Doubt Support for Enrolled Students',
      description:
        'Get personal answers within 24 hours on any tricky problem.',
    },
  ],
  buttons: {
    primary: {
      text: 'Student Login',
      link: '/student/login',
    },
    secondary: {
      text: 'Browse Lecture Library',
      link: '/recorded-lectures',
    },
  },
  mockup: {
    laptop: {
      breadcrumb: 'Class 12 > Accounting for Partnership Firms',
      quality: '1080p HD',
      sidebarTitle: 'Lectures (48)',
      lectures: [
        { num: '01', title: 'Introduction', duration: '32:18', active: true },
        { num: '02', title: 'Nature of Partnership', duration: '28:51', active: false },
        { num: '03', title: 'Partnership Deed', duration: '41:20', active: false },
        { num: '04', title: 'Fixed vs Fluctuating...', duration: '36:10', active: false },
        { num: '05', title: 'Profit & Loss...', duration: '47:35', active: false },
        { num: '06', title: 'Appropriation Account', duration: '39:12', active: false },
      ],
      chalkboard: {
        heading: 'Partnership Accounts',
        lines: [
          '1. Appropriation of Profit   \u2192   Partners',
          '2. Interest on Capital        \u2192   As per deed',
          '3. Interest on Drawings       \u2192   As per deed',
          '4. Salary / Commission        \u2192   As per deed',
        ],
        footer: 'Profit & Loss Appropriation A/c',
      },
      time: '24:11 / 35:40',
      progress: 55,
    },
    phone: {
      title: 'RD Classes',
      status: 'Live',
      cardTitle: 'Cash Flow Statement',
      cardSubtitle: 'Lecture 84 \u2022 18 min left',
      progress: 65,
      items: [
        { label: 'Notes Downloaded', icon: 'Check' },
        { label: 'Add to Watch Later', icon: 'Clock' },
        { label: 'Playback Speed', value: '1.5x', icon: 'Gauge' },
      ],
    },
    chips: [
      {
        id: 'chip-pdf',
        icon: 'FileText',
        tileBg: '#D6E8FB',
        label: 'PDF Notes',
        position: 'top-left',
      },
      {
        id: 'chip-speed',
        icon: 'Gauge',
        tileBg: '#FFD3B3',
        label: 'Watch at 1x \u2013 2x',
        position: 'top-right',
      },
      {
        id: 'chip-devices',
        icon: 'Monitor',
        tileBg: '#FFEBA8',
        labelLines: ['Access on', 'All Devices'],
        position: 'bottom-left',
      },
    ],
  },
};
