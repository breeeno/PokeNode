import { MigrationInterface, QueryRunner } from "typeorm";

export class default1673371065894 implements MigrationInterface {
    name = 'default1673371065894'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "pokemon" ("id" SERIAL NOT NULL, "nome" text NOT NULL, "regiao" text NOT NULL, "elemento_id" integer, CONSTRAINT "UQ_bbbf3f9c40b1e6b062770fa028f" UNIQUE ("nome"), CONSTRAINT "PK_0b503db1369f46c43f8da0a6a0a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "elemento" ("id" SERIAL NOT NULL, "nome" text NOT NULL, "fraqueza" text NOT NULL, CONSTRAINT "UQ_719e605140fa988ba2a675c497c" UNIQUE ("nome"), CONSTRAINT "UQ_bebe7db4734aa7c3baf3c52eb70" UNIQUE ("fraqueza"), CONSTRAINT "PK_be2225edd5755f9e759863999bf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "pokemon" ADD CONSTRAINT "FK_8b4ef2f852c845073355a649200" FOREIGN KEY ("elemento_id") REFERENCES "elemento"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pokemon" DROP CONSTRAINT "FK_8b4ef2f852c845073355a649200"`);
        await queryRunner.query(`DROP TABLE "elemento"`);
        await queryRunner.query(`DROP TABLE "pokemon"`);
    }

}
