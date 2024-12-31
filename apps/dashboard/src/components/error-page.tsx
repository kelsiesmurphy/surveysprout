export default function ErrorPage({ message }: { message: string }) {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <p>{message}</p>
    </div>
  );
}
