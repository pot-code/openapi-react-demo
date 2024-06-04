import { defineConfig } from "orval"

const modules = ["account", "flow"]

export default defineConfig(
  Object.fromEntries(
    modules.map((name) => [
      name,
      {
        input: {
          target: "http://127.0.0.1:3001/openapi.json",
          filters: {
            tags: [name],
          },
        },
        output: {
          prettier: true,
          target: `./src/api/${name}.ts`,
          override: {
            mutator: {
              path: "src/lib/http/instance.ts",
              name: "customInstance",
            },
            operationName: ({ operationId }) => operationId!.split("#")[1],
          },
        },
      },
    ]),
  ),
)
