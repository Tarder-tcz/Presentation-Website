export type LayoutType = 'title' | 'split' | 'single' | 'quote' | 'metrics';

export interface SlideData {
  id: string;
  title: string;
  content: string | string[];
  speaker: string;
  layoutType: LayoutType;
  stats?: { label: string; value: string }[];
}

export const slideData: SlideData[] = [
  {
    id: "slide-1",
    title: "Intro Text",
    content: "Content",
    speaker: "Speaker",
    layoutType: "title"
  },
  {
    id: "slide-2",
    title: "Title",
    content: [
      "Content",
      "Content",
      "Content"
    ],
    speaker: "Speaker",
    layoutType: "split"
  },
  {
    id: "slide-3",
    title: "Title",
    content: "Content",
    speaker: "Speaker",
    layoutType: "single"
  },
  {
    id: "slide-4",
    title: "Title",
    content: "Content",
    speaker: "Speaker",
    layoutType: "single"
  },
  {
    id: "slide-5",
    title: "Title",
    content: "Content",
    speaker: "Speaker",
    layoutType: "metrics",
    stats: [
      { label: "Label", value: "Value" },
      { label: "Label", value: "Value" },
      { label: "Label", value: "Value" }
    ]
  },
  {
    id: "slide-6",
    title: "Title",
    content: [
      "Content",
      "Content",
      "Content"
    ],
    speaker: "Speaker",
    layoutType: "split"
  },
  {
    id: "slide-7",
    title: "Title",
    content: "Content",
    speaker: "Speaker",
    layoutType: "single"
  },
  {
    id: "slide-8",
    title: "Title",
    content: "Content",
    speaker: "Speaker",
    layoutType: "quote"
  },
  {
    id: "slide-9",
    title: "Title",
    content: [
      "Content",
      "Content",
      "Content"
    ],
    speaker: "Speaker",
    layoutType: "split"
  },
  {
    id: "slide-10",
    title: "Title",
    content: "Content",
    speaker: "Speaker",
    layoutType: "single"
  },
  {
    id: "slide-11",
    title: "Title",
    content: "Content",
    speaker: "Speaker",
    layoutType: "metrics",
    stats: [
      { label: "Label", value: "Value" },
      { label: "Label", value: "Value" },
      { label: "Label", value: "Value" }
    ]
  },
  {
    id: "slide-12",
    title: "Exit Text",
    content: "Content",
    speaker: "Speaker",
    layoutType: "title"
  }
];
