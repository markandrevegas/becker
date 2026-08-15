// composables/useOnePager.ts
import type { OnePagerSkeleton } from "~/types/contentful"
export const useOnePager = () => {
	const { getEntry } = useContentful()
	const ENTRY_ID = "tvmagv98WHR9YBjGRhG4k"

	return getEntry<OnePagerSkeleton>(ENTRY_ID)
}