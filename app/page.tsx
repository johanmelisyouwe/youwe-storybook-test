// Placeholder page. Real pages are assembled from src/components and follow
// the approved Figma templates (see the Templates section in Storybook).
export default function Home() {
  return (
    <main className="container" style={{ paddingBlock: 'var(--layout-section-padding)' }}>
      <p className="yw-body-sm-med" style={{ color: 'var(--color-shared-content-brand)' }}>Youwe</p>
      <h1 className="yw-heading-2xl">Design system test project</h1>
      <p className="yw-body-lg-reg" style={{ color: 'var(--color-shared-content-secondary)', marginTop: 'var(--spacing-lg)' }}>
        Components live in Storybook (pnpm storybook). Pages will be built from them.
      </p>
    </main>
  );
}
