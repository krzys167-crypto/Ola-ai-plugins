export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>OLA AI Plugins</h1>
      <p>Evidence Layer for OLA di-OS</p>
      <section style={{ marginTop: '2rem' }}>
        <h2>Purpose</h2>
        <p>
          OLA Evidence is the evidence and provenance layer of OLA di-OS.
          Its purpose is to transform operational observations, files, events 
          and verification results into structured, traceable and independently 
          verifiable evidence.
        </p>
        <blockquote style={{ 
          borderLeft: '4px solid #0070f3', 
          paddingLeft: '1rem', 
          margin: '1rem 0',
          fontStyle: 'italic' 
        }}>
          «No important decision without traceable evidence.»
        </blockquote>
      </section>
    </main>
  )
}
