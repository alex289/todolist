import { getServerSession } from '#auth';
import { getTasks } from '../../data/tasks';

export default defineEventHandler(async (event) => {
  const session = await getServerSession(event);

  if (!session || !session.user?.email) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    });
  }

  return await getTasks(session.user.email);
});
