export default function BookDetails({ 
  params,
}: {
  params: { bookId: string};
}) {
  return <h1>Details about book {params.bookId} to ADMIN</h1>;
}