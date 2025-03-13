export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900">Welcome to Hodne.land</h1>
        <p className="text-gray-600 mt-4">This is a simple homepage deployed on Azure</p>
        <a
          href="#"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Learn More
        </a>
      </div>
    </main>
  );
}
