export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-slate-900 dark:text-white mb-4">404</h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
          Page not found
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          Go home
        </a>
      </div>
    </div>
  );
}
