export async function GET() {
  return Response.json({
    healthCheck: true,
    serverVar: process.env.SERVER_VAR,
  });
}
