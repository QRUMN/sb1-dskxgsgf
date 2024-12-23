export function CoursesHero() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Trade Compliance Courses
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Expert-led training in international trade regulations, customs procedures, and compliance best practices.
          </p>
          <div className="inline-flex p-1 bg-muted rounded-lg">
            <div className="px-4 py-2 bg-background rounded font-medium shadow-sm">All Levels</div>
            <div className="px-4 py-2">Intro</div>
            <div className="px-4 py-2">Intermediate</div>
            <div className="px-4 py-2">Expert</div>
          </div>
        </div>
      </div>
    </section>
  );
}