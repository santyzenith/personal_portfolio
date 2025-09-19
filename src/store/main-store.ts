import { create } from "zustand";

// type PortfolioState = {
//   selectedDataset: string | null;
//   uploadedFile: File | null;
//   selectedSummMethod: string | null;
//   startSummary: boolean;
//   summaryData: SummaryRow[] | null;
//   sessionId: string | null;
//   profile: string | null;
//   goal: GoalSelection | null;
//   plotUrls: PlotItem[];

//   // actions
//   setDataset: (dataset: string | null) => void;
//   setFile: (file: File | null) => void;
//   setSummMethod: (method: string | null) => void;
//   setStartSummary: (value: boolean) => void;
//   setSummaryData: (data: SummaryRow[] | null) => void;
//   setSessionId: (id: string | null) => void;
//   setProfile: (profile: string | null) => void;
//   setGoal: (goal: GoalSelection | null) => void;
//   setPlotUrls: (urls: PlotItem[]) => void;
//   addPlot: (plot: PlotItem) => void;
//   updatePlot: (plot: PlotItem) => void;
//   removePlot: (plotId: string) => void;
// };

// export const usePlatformStore = create<PlatformState>((set) => ({
//   selectedDataset: null,
//   uploadedFile: null,
//   selectedSummMethod: "LLM",
//   startSummary: false,
//   summaryData: null,
//   sessionId: null,
//   profile: null,
//   goal: null,
//   plotUrls: [],

//   setDataset: (dataset) =>
//     set({ selectedDataset: dataset, uploadedFile: null }),
//   setFile: (file) => set({ uploadedFile: file, selectedDataset: null }),
//   setSummMethod: (method) => set({ selectedSummMethod: method }),
//   setStartSummary: (value) => set({ startSummary: value }),
//   setSummaryData: (data) => set({ summaryData: data }),
//   setSessionId: (id) => set({ sessionId: id }),
//   setProfile: (profile) => set({ profile }),
//   setGoal: (goal) => set({ goal }),

//   // plots management
//   setPlotUrls: (urls) => set({ plotUrls: urls }),
//   addPlot: (plot) => set((state) => ({ plotUrls: [...state.plotUrls, plot] })),
//   updatePlot: (plot) =>
//     set((state) => ({
//       plotUrls: state.plotUrls.map((p) =>
//         p.plotId === plot.plotId ? plot : p
//       ),
//     })),
//   removePlot: (plotId) =>
//     set((state) => ({
//       plotUrls: state.plotUrls.filter((p) => p.plotId !== plotId),
//     })),
// }));
