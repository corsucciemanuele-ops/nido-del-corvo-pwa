export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-6xl font-light">404</h1>
      <p className="text-lg">Pagina non trovata</p>
      <a href="/" className="underline underline-offset-4">
        Torna alla home
      </a>
    </div>
  );
};
