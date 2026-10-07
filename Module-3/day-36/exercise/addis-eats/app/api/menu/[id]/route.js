export async function GET({ params }) {
  return Response.json({ msg: "Holla", "req-pamrams": params.id });
}
