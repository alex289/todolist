import { getTask, updateTask } from '../../data/tasks';
import { getServerSession } from '#auth';

export default defineEventHandler(async (event) => {
  const session = await getServerSession(event);
  const body = await readBody(event);

  if (!session || !session.user?.email) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    });
  }

  const task = await getTask(body.id);

  if (!task) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Not Found',
    });
  }

  if (task.email !== session.user.email) {
    throw createError({
      statusCode: 403,
      statusMessage: 'Forbidden',
    });
  }

  return await updateTask(body.id, {
    task: body.task,
    status: body.status,
  });
});
