// server/mcp/my-tools.ts
import { readdir } from "node:fs/promises"
import { join } from "node:path"

export default {
	getMyData: {
		description: "Fetches data from the server",
		// Use defineEventHandler if you are doing complex logic
		execute: async () => {
			return { status: "active", message: "Hello from Nitro!" }
		}
	},
	listNuxtComponents: {
		description: "Lists all Vue components in the app/components directory",
		execute: async () => {
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
				return {
					error: "Failed to read components directory",
					message: error instanceof Error ? error.message : String(error)
				}
			}
		}
	}
}
