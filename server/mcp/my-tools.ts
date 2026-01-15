// server/mcp/my-tools.ts
import { readdir } from "node:fs/promises"
import { join } from "node:path"

export default {
	getMyData: {
		description: "Fetches data from the server",
		// Wrap the execution logic
		execute: defineEventHandler(async () => {
			return { status: "active", message: "Hello from Nitro!" }
		})
	},
	listNuxtComponents: {
		description: "Lists all Vue components in the app/components directory",
		execute: defineEventHandler(async () => {
			try {
				const componentsDir = join(process.cwd(), "app", "components")
				const files = await readdir(componentsDir)
				const components = files
					.filter((file) => file.endsWith(".vue"))
					.map((file) => ({
						name: file.replace(".vue", ""),
						filename: file,
						path: `app/components/${file}`
					}))
				return {
					components,
					count: components.length,
					directory: "app/components"
				}
			} catch (error) {
				// Use createError for better Nuxt/Nitro error handling
				throw createError({
					statusCode: 500,
					statusMessage: "Failed to read components directory",
					data: error
				})
			}
		})
	}
}
