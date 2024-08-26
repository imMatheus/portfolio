import { atom } from 'jotai'

export const chartGraphAtom = atom<'line' | 'column' | 'area'>('line')
