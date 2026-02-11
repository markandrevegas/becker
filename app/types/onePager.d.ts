export interface OnePagerData {
	id: number
	documentId: string
	Title: string
	createdAt: string
	updatedAt: string
	publishedAt: string
	Short_Text: string
	About_Header: string
	About_Content: string
	About_Content_Paragraph: string
}

export interface OnePagerResponse {
	data: OnePagerData
	meta: Record<string, unknown>
}
