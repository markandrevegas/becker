// composables/useOnePagerFields.ts
export const useOnePagerFields = async () => {
	const { data: onePager } = await useOnePager()
	return computed(() => {
		const entry = onePager?.value
		if (!entry) return null
		return {
			title: entry.fields.title,
			desc: entry.fields.desc,
			aboutTeaser: entry.fields.aboutTeaser,
			aboutHeader: entry.fields.aboutHeader,
			aboutParagraph: entry.fields.aboutParagraph,
			videoHeader: entry.fields.videoHeader,
			bioHeader: entry.fields.bioHeader,
			bioParagraph: entry.fields.bioParagraph,
			agentsHeader: entry.fields.agentsHeader
		}
	})
}
