// types/contentful.ts
// types/contentful.ts
import type { EntrySkeletonType, EntryFieldTypes } from "contentful"

export interface OnePagerSkeleton extends EntrySkeletonType {
	contentTypeId: "onePager" // match your actual Contentful content type ID
	fields: {
		title: EntryFieldTypes.Symbol
		desc: EntryFieldTypes.Symbol
		aboutTeaser: EntryFieldTypes.Symbol
		aboutHeader: EntryFieldTypes.Symbol
		aboutParagraph: EntryFieldTypes.Symbol
		videoHeader: EntryFieldTypes.Symbol
		bioHeader: EntryFieldTypes.Symbol
		bioParagraph: EntryFieldTypes.Symbol
		agentsHeader: EntryFieldTypes.Symbol
	}
}
export interface OnePager {
	title: string
	desc: string
	image: string
	aboutHeader: string
	aboutTeaser: string
	aboutParagraph: string
	videoHeader: string
	bioHeader: string
	bioParagraph: string
	agentsHeader: string
	agentsInfo: string
}
