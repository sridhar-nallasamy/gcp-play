export const dynamic = 'force-dynamic';

export async function GET() {
  return Response.json({
    healthCheck: true,
    serverVar: `${process.env.SERVER_VAR} 🚀`,
    timeStamp: Date.now(),
  });
}
