import { PrismaClient } from '@prisma/client';

let db;

const prismaClientSingleton = () => {
  if (!db) {
    db = new PrismaClient();
  }
  return db;
};

if (!globalThis.prismaGlobal) {
  globalThis.prismaGlobal = prismaClientSingleton();
}

const prismaInstance = globalThis.prismaGlobal;

export default prismaInstance;