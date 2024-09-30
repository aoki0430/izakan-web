"use server";

import { prisma } from "../lib/prisma";

export async function getShopsWithOptions() {
  return prisma.shop.findMany();
}
