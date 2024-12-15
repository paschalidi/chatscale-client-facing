import CodeBlock from "@/components/ui/code-block";

export function CodePreview() {
  const integrationCode = `import { ChatProvider, ChatList, MessageInput } from '@chatscale/react'

function App() {
  return (
    <ChatProvider organizationToken="your_token">
      <ChatList />
      <MessageInput />
    </ChatProvider>
  )
}`;

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Integration made simple
        </h2>
        <div className="max-w-3xl mx-auto">
          {/* Using our enhanced CodeBlock component */}
          <CodeBlock
            code={integrationCode}
            language="jsx"
            filename="App.jsx"
            showLineNumbers={true}
          />

          <div className="mt-8 space-y-4 text-sm text-muted-foreground">
            <p className="flex items-center gap-2">
              <span className="font-mono bg-primary/10 px-2 py-1 rounded text-primary">
                @chatscale/react
              </span>
              <span>Type-safe React components powered by our Rust backend</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="font-mono bg-primary/10 px-2 py-1 rounded text-primary">
                @chatscale/sdk
              </span>
              <span>Low-level Rust-compiled WebAssembly SDK for custom implementations</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}