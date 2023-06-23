export const rootNotFoundMetadata = {
  title: 'Not Found',
  description: "Sorry, can't find the page you're looking for. :/",
};

export default function RootNotFound() {
  return (
    <div className="not-found">
      <p>
        Oh no! You've stumbled upon a<span className="error404">404 error</span>{' '}
        page here.
      </p>
    </div>
  );
}
