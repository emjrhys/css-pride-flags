import { defineStore } from 'pinia'
import * as Flags from '@/components/flags'

export const useFlagStore = defineStore('flag', () => {
  const flags = [
    {
      label: 'Progress',
      flag: 'ProgressPrideFlag',
    },
    {
      label: 'Rainbow',
      flag: 'PrideFlag',
    },
    {
      label: '8-Stripe Rainbow',
      flag: 'GilbertBakerPrideFlag',
    },
    {
      label: 'Agender',
      flag: 'AgenderFlag',
    },
    {
      label: 'Aromantic',
      flag: 'AromanticFlag',
    },
    {
      label: 'Asexual',
      flag: 'AsexualFlag',
    },
    {
      label: 'Bisexual',
      flag: 'BisexualFlag',
    },
    {
      label: 'Demiboy',
      flag: 'DemiboyFlag',
    },
    {
      label: 'Demigirl',
      flag: 'DemigirlFlag',
    },
    {
      label: 'Gay Men',
      flag: 'GayMenFlag',
    },
    {
      label: 'Genderfluid',
      flag: 'GenderfluidFlag',
    },
    {
      label: 'Genderqueer',
      flag: 'GenderqueerFlag',
    },
    {
      label: 'Intersex',
      flag: 'IntersexFlag',
    },
    {
      label: 'Lesbian',
      flag: 'LesbianFlag',
    },
    {
      label: 'Nonbinary',
      flag: 'NonbinaryFlag',
    },
    {
      label: 'Pansexual',
      flag: 'PansexualFlag',
    },
    {
      label: 'Transgender',
      flag: 'TransgenderFlag',
    },
  ]

  function getFlagComponent (componentName: string) {
    return Flags[componentName]
  }

  return { flags, getFlagComponent }
})
