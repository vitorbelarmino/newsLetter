/*
  Warnings:

  - The primary key for the `forms_answers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id]` on the table `forms_answers` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `forms_answers` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- CreateIndex
CREATE UNIQUE INDEX `forms_answers_id_key` ON `forms_answers`(`id`);
