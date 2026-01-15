// server/plugins/fix-mcp-warnings.ts
import type { EventHandler } from 'h3'
import { defineEventHandler } from 'h3'

export default defineNitroPlugin((nitroApp) => {
  nitroApp.h3App.stack.forEach((layer: { route: string; handler: EventHandler & { __is_handler__?: boolean } }) => {
    // Check if the handler is missing the explicit __is_handler__ flag
    if (layer.route?.includes('/mcp') && typeof layer.handler === 'function' && !layer.handler.__is_handler__) {
      const originalHandler = layer.handler;
      layer.handler = defineEventHandler(originalHandler);
    }
  })
})