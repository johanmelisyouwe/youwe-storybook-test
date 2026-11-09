// Placeholder page. Real pages are assembled from src/components and follow
// the approved Figma templates (see the Templates section in Storybook).
export default function Home() {
  return (
    <main className="container" style={{ paddingBlock: 'var(--layout-section-padding)' }}>
      <p className="text-body-sm-med" style={{ color: 'var(--content-brand)' }}>Youwe</p>
      <h1 className="text-heading-2xl">Design system test project</h1>
      <p className="text-body-lg-reg" style={{ color: 'var(--content-secondary)', marginTop: 'var(--space-lg)' }}>
        Components live in Storybook (npm run storybook). Pages will be built from them.
      </p>
    </main>
  );
}
