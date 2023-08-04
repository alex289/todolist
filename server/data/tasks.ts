import { Prisma } from '@prisma/client';
import { prisma } from './prisma';

export const createTask = async (data: Prisma.taskCreateInput) => {
  return await prisma.task.create({
    data,
  });
};

export const deleteTask = async (id: number) => {
  return await prisma.task.delete({
    where: {
      id,
    },
  });
};

export const updateTask = async (id: number, data: Prisma.taskUpdateInput) => {
  return await prisma.task.update({
    where: {
      id,
    },
    data,
  });
};

export const getTask = async (id: number) => {
  return await prisma.task.findUnique({
    where: {
      id,
    },
  });
};

export const getTasks = async (email: string) => {
  return await prisma.task.findMany({
    where: {
      email,
    },
  });
};
