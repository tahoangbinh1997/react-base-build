import create from 'zustand'

interface BearStore {
  bears: number,
  increasePopulation: () => void,
  removeAllBears: () => void,
}

const useBearStore = create<BearStore>((set: any) => ({
  bears: 0,
  increasePopulation: () => set((state: any) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))

export default useBearStore
