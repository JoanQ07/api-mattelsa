-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "names" VARCHAR NOT NULL,
    "surnames" VARCHAR NOT NULL,
    "mail" VARCHAR NOT NULL,
    "googleId" VARCHAR NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
