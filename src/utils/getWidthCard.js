import { WIDTH_CARD } from '@/constants/styleWidth'

export const getWidthCard = (screens) => {
  if (screens.md && !screens.lg) {
    return WIDTH_CARD.TABLET
  }
  if (screens.xs) {
    return WIDTH_CARD.MOBILE
  }
  return WIDTH_CARD.PC
}
