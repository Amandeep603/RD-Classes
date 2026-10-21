/**
 * Student Portal Mock Database
 * Single source of truth for student portal data.
 */

export const mockStudentProfile = {
  id: 'student-001',
  studentId: 'RD-2025-042',
  name: 'Vardaan Agarwal',
  email: 'vardaan@rdclasses.demo',
  phone: '+91 98100 XXXXX',
  classLevel: 'Class 12',
  school: 'MVN (Modern Vidya Niketan), Faridabad',
  enrolledCourse: 'Class 12 Comprehensive Accountancy (Full Syllabus)',
  enrolledDate: '15 April 2024',
  validityDate: '31 March 2026',
  avatarInitials: 'VA',
  progressPercent: 74,
  stats: {
    lecturesWatched: 101,
    totalLectures: 136,
    notesDownloaded: 28,
    testsAttempted: 14,
    avgScore: '94.5%'
  },
  continueWatching: {
    lectureId: 'lec-ch5-03',
    title: 'Admission of a Partner: Hidden Goodwill & Capital Adjustments',
    chapter: 'Chapter 5: Admission of a Partner',
    book: 'Book 1: Partnership',
    duration: '42 mins',
    progressMinutes: 28,
    progressPercent: 66,
    vimeoId: '76979871'
  },
  approvedDevices: [
    {
      id: 'dev-1',
      name: 'Chrome on Windows',
      deviceType: 'Laptop / Desktop',
      firstLogin: '18 April 2024, 04:30 PM',
      lastActive: 'Just now',
      ip: '103.21.124.89 (Faridabad, HR)',
      isCurrent: true,
      status: 'Approved'
    }
  ]
};

export const mockAnnouncements = [
  {
    id: 'ann-1',
    date: 'Today',
    priority: 'high',
    title: 'Sunday Mock Test #15 Schedule',
    message: 'Reporting time 9:00 AM sharp at Sector 9 Centre. Syllabus: Accounting for Share Capital (Pro-rata & Forfeiture). Carry original calculator & stationery.'
  },
  {
    id: 'ann-2',
    date: 'Yesterday',
    priority: 'normal',
    title: 'New Chapter 8 Formula Sheet Uploaded',
    message: 'All 16 Accounting Ratios master handout with CBSE past 10-year question trends is now available in the Notes tab.'
  }
];

export const mockCourses = [
  {
    id: 'course-c12-flagship',
    title: 'CBSE Class 12 Accountancy (Full Syllabus Flagship)',
    classLevel: 'Class 12',
    faculty: 'Ronak Dugar',
    totalBooks: 3,
    totalLectures: 136,
    completedLectures: 101,
    books: [
      {
        id: 'book-1',
        title: 'Book 1: Accounting for Partnership Firms',
        code: 'PARTNERSHIP',
        weightage: '36 Marks',
        totalLectures: 48,
        completedLectures: 42,
        chapters: [
          {
            id: 'ch-1',
            number: '01',
            title: 'Fundamentals of Partnership',
            lecturesCount: 8,
            lectures: [
              { id: 'lec-ch1-01', title: '01. Partnership Deed & Indian Partnership Act 1932', duration: '34 mins', watched: true, vimeoId: '76979871' },
              { id: 'lec-ch1-02', title: '02. Profit & Loss Appropriation Account Essentials', duration: '38 mins', watched: true, vimeoId: '76979871' },
              { id: 'lec-ch1-03', title: '03. Interest on Drawings (Average Period Method)', duration: '41 mins', watched: true, vimeoId: '76979871' },
              { id: 'lec-ch1-04', title: '04. Past Adjustments Table Matrix (Single Entry Rectification)', duration: '45 mins', watched: true, vimeoId: '76979871' },
              { id: 'lec-ch1-05', title: '05. Guarantee of Profit to a Partner (Multi-case Scenarios)', duration: '39 mins', watched: true, vimeoId: '76979871' }
            ]
          },
          {
            id: 'ch-2',
            number: '02',
            title: 'Valuation of Goodwill',
            lecturesCount: 6,
            lectures: [
              { id: 'lec-ch2-01', title: '01. Nature, Need & Factors Affecting Goodwill', duration: '28 mins', watched: true, vimeoId: '76979871' },
              { id: 'lec-ch2-02', title: '02. Average & Weighted Average Profit Method', duration: '35 mins', watched: true, vimeoId: '76979871' },
              { id: 'lec-ch2-03', title: '03. Super Profit & Capitalisation Methods with Past Years', duration: '44 mins', watched: true, vimeoId: '76979871' }
            ]
          },
          {
            id: 'ch-3',
            number: '03',
            title: 'Change in Profit-Sharing Ratio & Reserves',
            lecturesCount: 7,
            lectures: [
              { id: 'lec-ch3-01', title: '01. Sacrificing & Gaining Ratios Calculation', duration: '30 mins', watched: true, vimeoId: '76979871' },
              { id: 'lec-ch3-02', title: '02. Treatment of Workmen Compensation & Investment Fluctuation Reserve', duration: '46 mins', watched: true, vimeoId: '76979871' },
              { id: 'lec-ch3-03', title: '03. Revaluation Account & Memorandum Revaluation', duration: '40 mins', watched: true, vimeoId: '76979871' }
            ]
          },
          {
            id: 'ch-4',
            number: '04',
            title: 'Admission of a Partner',
            lecturesCount: 12,
            lectures: [
              { id: 'lec-ch4-01', title: '01. Calculation of New Profit Sharing Ratio & Sacrificing Ratio', duration: '36 mins', watched: true, vimeoId: '76979871' },
              { id: 'lec-ch4-02', title: '02. Accounting Treatment of Goodwill on Admission', duration: '42 mins', watched: true, vimeoId: '76979871' },
              { id: 'lec-ch5-03', title: '03. Hidden Goodwill & Capital Adjustment Masterclass', duration: '42 mins', watched: false, isCurrent: true, vimeoId: '76979871' },
              { id: 'lec-ch4-04', title: '04. Preparation of Comprehensive Balance Sheet After Admission', duration: '50 mins', watched: false, vimeoId: '76979871' }
            ]
          },
          {
            id: 'ch-5',
            number: '05',
            title: 'Dissolution of a Partnership Firm',
            lecturesCount: 9,
            lectures: [
              { id: 'lec-ch5-01', title: '01. Dissolution vs Dissolution of Partnership', duration: '28 mins', watched: false, vimeoId: '76979871' },
              { id: 'lec-ch5-02', title: '02. Realisation Account Formats & Rules', duration: '48 mins', watched: false, vimeoId: '76979871' },
              { id: 'lec-ch5-04', title: '03. Treatment of Partner Loan & Unrecorded Assets', duration: '42 mins', watched: false, vimeoId: '76979871' }
            ]
          }
        ]
      },
      {
        id: 'book-2',
        title: 'Book 2: Accounting for Companies',
        code: 'COMPANIES',
        weightage: '24 Marks',
        totalLectures: 38,
        completedLectures: 26,
        chapters: [
          {
            id: 'ch-comp-1',
            number: '06',
            title: 'Accounting for Share Capital & Pro-Rata',
            lecturesCount: 14,
            lectures: [
              { id: 'lec-comp-01', title: '01. Types of Share Capital, Minimum Subscription & Calls-in-Arrears', duration: '38 mins', watched: true, vimeoId: '76979871' },
              { id: 'lec-comp-02', title: '02. Pro-Rata Allotment: The 6-Column Mathematical Table', duration: '52 mins', watched: true, vimeoId: '76979871' },
              { id: 'lec-comp-03', title: '03. Forfeiture of Shares Issued at Par & Premium', duration: '48 mins', watched: true, vimeoId: '76979871' },
              { id: 'lec-comp-04', title: '04. Reissue of Forfeited Shares & Capital Reserve Transfer', duration: '44 mins', watched: false, vimeoId: '76979871' }
            ]
          },
          {
            id: 'ch-comp-2',
            number: '07',
            title: 'Issue & Redemption of Debentures',
            lecturesCount: 10,
            lectures: [
              { id: 'lec-deb-01', title: '01. Issue of Debentures as Collateral Security', duration: '35 mins', watched: true, vimeoId: '76979871' },
              { id: 'lec-deb-02', title: '02. Writing Off Discount / Loss on Issue of Debentures', duration: '40 mins', watched: false, vimeoId: '76979871' }
            ]
          }
        ]
      },
      {
        id: 'book-3',
        title: 'Book 3: Analysis of Financial Statements',
        code: 'ANALYSIS',
        weightage: '20 Marks',
        totalLectures: 32,
        completedLectures: 20,
        chapters: [
          {
            id: 'ch-fin-1',
            number: '08',
            title: 'Accounting Ratios Masterclass',
            lecturesCount: 12,
            lectures: [
              { id: 'lec-ratio-01', title: '01. Liquidity Ratios (Current & Quick Ratio analysis)', duration: '36 mins', watched: true, vimeoId: '76979871' },
              { id: 'lec-ratio-02', title: '02. Solvency Ratios (Debt-Equity & Proprietary)', duration: '42 mins', watched: true, vimeoId: '76979871' },
              { id: 'lec-ratio-03', title: '03. Activity & Turnover Ratios with Average Inventory', duration: '46 mins', watched: false, vimeoId: '76979871' }
            ]
          },
          {
            id: 'ch-fin-2',
            number: '09',
            title: 'Cash Flow Statement (AS-3 Revised)',
            lecturesCount: 14,
            lectures: [
              { id: 'lec-cfs-01', title: '01. Operating Activities & Net Profit Before Tax Adjustments', duration: '55 mins', watched: true, vimeoId: '76979871' },
              { id: 'lec-cfs-02', title: '02. Investing & Financing Cash Flow Schedules', duration: '48 mins', watched: false, vimeoId: '76979871' },
              { id: 'lec-cfs-03', title: '03. Full 8-Mark Board Question Step-by-Step Solving', duration: '60 mins', watched: false, vimeoId: '76979871' }
            ]
          }
        ]
      }
    ]
  }
];

export const mockNotes = [
  {
    id: 'note-01',
    title: 'Partnership Fundamentals & P&L Appropriation Master Sheet',
    book: 'Book 1',
    chapter: 'Fundamentals of Partnership',
    classLevel: 'Class 12',
    size: '2.4 MB',
    fileUrl: '/samples/cbse_class_12_results_2025.pdf',
    updatedDate: '12 October 2025'
  },
  {
    id: 'note-02',
    title: 'Admission of Partner: Hidden Goodwill & Capital Adjustments',
    book: 'Book 1',
    chapter: 'Admission of a Partner',
    classLevel: 'Class 12',
    size: '3.1 MB',
    fileUrl: '/samples/cbse_class_12_results_2024.pdf',
    updatedDate: '08 October 2025'
  },
  {
    id: 'note-03',
    title: 'Pro-Rata Allotment 6-Column Mathematical Matrix Sheet',
    book: 'Book 2',
    chapter: 'Accounting for Share Capital',
    classLevel: 'Class 12',
    size: '1.8 MB',
    fileUrl: '/samples/rd_classes_mock_board_merit_list.pdf',
    updatedDate: '28 September 2025'
  },
  {
    id: 'note-04',
    title: 'All 16 CBSE Accounting Ratios Comprehensive Formula Cheat Sheet',
    book: 'Book 3',
    chapter: 'Accounting Ratios',
    classLevel: 'Class 12',
    size: '1.5 MB',
    fileUrl: '/samples/cbse_class_12_results_2025.pdf',
    updatedDate: '01 October 2025'
  },
  {
    id: 'note-05',
    title: 'Cash Flow Statement (AS-3 Revised) Provision for Tax Checklist',
    book: 'Book 3',
    chapter: 'Cash Flow Statement',
    classLevel: 'Class 12',
    size: '2.9 MB',
    fileUrl: '/samples/cbse_class_12_results_2024.pdf',
    updatedDate: '15 September 2025'
  },
  {
    id: 'note-06',
    title: 'Bank Reconciliation Statement (BRS) Zero-Confusion Rulebook',
    book: 'Foundation',
    chapter: 'BRS',
    classLevel: 'Class 11',
    size: '1.2 MB',
    fileUrl: '/samples/rd_classes_mock_board_merit_list.pdf',
    updatedDate: '10 September 2025'
  }
];

export const mockTests = [
  {
    id: 'test-upcoming-1',
    title: 'Sunday Mock Test #15 (Pre-Board Series)',
    type: 'upcoming',
    date: 'Next Sunday, 20 Oct 2025',
    timing: '9:00 AM - 12:00 PM (3 Hours)',
    venue: 'Sector 9 Centre, Faridabad',
    syllabus: 'Company Accounts (Share Capital + Debentures Complete)',
    maxMarks: 80,
    reportingNote: 'Calculators & physical transparent pencil pouch compulsory.'
  },
  {
    id: 'test-comp-1',
    title: 'Sunday Mock Test #14',
    type: 'completed',
    date: '13 Oct 2025',
    syllabus: 'Partnership: Admission, Retirement, Death & Dissolution',
    maxMarks: 80,
    scoredMarks: 78,
    percentage: 97.5,
    rank: 'Rank 1 in Batch',
    batchAverage: '64/80',
    feedback: 'Flawless treatment of deceased partner loan account. Rupee symbols drawn cleanly throughout.'
  },
  {
    id: 'test-comp-2',
    title: 'Sunday Mock Test #13',
    type: 'completed',
    date: '06 Oct 2025',
    syllabus: 'Analysis of Financial Statements & All 16 Ratios',
    maxMarks: 50,
    scoredMarks: 48,
    percentage: 96.0,
    rank: 'Rank 2 in Batch',
    batchAverage: '39/50',
    feedback: 'Excellent pro-rata working notes. Narration format needs a tad more consistency in Q4.'
  },
  {
    id: 'test-comp-3',
    title: 'Milestone Test #12',
    type: 'completed',
    date: '29 Sep 2025',
    syllabus: 'Cash Flow Statement (Complete 8-marker simulation)',
    maxMarks: 40,
    scoredMarks: 38,
    percentage: 95.0,
    rank: 'Rank 2 in Batch',
    batchAverage: '31/40',
    feedback: 'Provision for taxation adjustment was accurate. Keep up the high exam tempo.'
  },
  {
    id: 'test-comp-4',
    title: 'Chapter Test #11',
    type: 'completed',
    date: '15 Sep 2025',
    syllabus: 'Fundamentals of Partnership & Past Adjustments',
    maxMarks: 50,
    scoredMarks: 46,
    percentage: 92.0,
    rank: 'Rank 3 in Batch',
    batchAverage: '36/50',
    feedback: 'Good approach to guarantee of profit. Work on working note cross-referencing.'
  }
];

export const mockMarksProgress = [
  { test: 'Test 1', score: 82, max: 100 },
  { test: 'Test 3', score: 86, max: 100 },
  { test: 'Test 6', score: 90, max: 100 },
  { test: 'Test 9', score: 92, max: 100 },
  { test: 'Test 12', score: 95, max: 100 },
  { test: 'Test 14', score: 98, max: 100 }
];
