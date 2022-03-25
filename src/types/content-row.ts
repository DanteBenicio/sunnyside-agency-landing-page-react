export type ContentRow = {
  title: string
  description: string
  desktopImgSrc: string
  mobileImgSrc: string
  altSrc: string
  learnMoreColor: 'yellow' | 'soft-red'
}

export interface IContentRowProps extends ContentRow {
  rowReverse?: boolean
}
