import { toppers } from './toppers';

export { toppers };

export const stats = [
  { label: 'Students Trained', value: 500, suffix: '+', desc: 'Over years of dedicated coaching' },
  { label: 'Success Rate', value: 95, suffix: '%+', desc: 'Consistent 90+ & first division results' },
  { label: 'Tests Conducted', value: 1200, suffix: '+', desc: 'Chapter-wise & full board mocks' },
  { label: 'Recorded Lectures', value: 136, suffix: '', desc: 'Complete Class 12 syllabus recorded' },
  { label: 'Hours of Instruction', value: 50, suffix: '+ hrs', desc: 'Step-by-step concept videos' },
];

export const rewardsInfo = {
  perfectScoreReward: '₹5,100',
  perfectScoreText: 'Score a perfect 100/100 in CBSE Accountancy and Ronak Sir honours you with ₹5,100 cash or cheque felicitated in front of the batch.',
  distinctionGiftsText: 'Every student who scores 90 or more in Accountancy receives an exclusive gift and framed certificate at our annual prize distribution celebration.'
};

export const resultPdfs = [
  {
    id: 'pdf-2025',
    title: 'CBSE Class 12 Accountancy Board Results 2025',
    year: '2025',
    class: 'Class 12',
    pdfUrl: '/samples/cbse_class_12_results_2025.pdf',
    thumbnail: '/gallery/gallery_1.jpg',
    uploadedOn: 'May 2025'
  },
  {
    id: 'pdf-2024',
    title: 'CBSE Class 12 Accountancy Board Results 2024',
    year: '2024',
    class: 'Class 12',
    pdfUrl: '/samples/cbse_class_12_results_2024.pdf',
    thumbnail: '/gallery/gallery_2.jpg',
    uploadedOn: 'May 2024'
  },
  {
    id: 'pdf-mocks-2026',
    title: 'Pre-Board Mock Test Series Official Merit List',
    year: '2026',
    class: 'Class 11 & 12',
    pdfUrl: '/samples/rd_classes_mock_board_merit_list.pdf',
    thumbnail: '/gallery/gallery_3.jpg',
    uploadedOn: 'January 2026'
  }
];
