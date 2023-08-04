import { getServerSession } from '#auth';
import { TaskStatus } from '../../../enums/task-status';
import { createTask } from '../../data/tasks';

export default defineEventHandler(async (event) => {
  const session = await getServerSession(event);
  const body = await readBody(event);

  if (!session || !session.user?.email) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    });
  }

  const task = await createTask({
    task: body.task,
    email: session.user.email,
    status: TaskStatus.New,
  });

  return task;
});
