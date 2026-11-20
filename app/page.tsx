export default function Home() {
  return (
    <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>OLA AI Plugins</h1>
      <h2>Evidence Layer for OLA di-OS</h2>
      <p>
        OLA Evidence is the evidence and provenance layer of OLA di-OS.
        Its purpose is to transform operational observations, files, events and verification results 
        into structured, traceable and independently verifiable evidence.
      </p>
      <div style={{ marginTop: '2rem' }}>
        <p><strong>Core Principle:</strong></p>
        <blockquote style={{ fontStyle: 'italic', margin: '1rem 0', paddingLeft: '1rem', borderLeft: '3px solid #ccc' }}>
          «No important decision without traceable evidence.»
        </blockquote>
      </div>
      <div style={{ marginTop: '2rem' }}>
        <p>For full documentation, see the README.md file in the repository.</p>
      </div>
    </main>
  );
}
