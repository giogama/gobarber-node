import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateAppoiments1632876564301 implements MigrationInterface {

    // Criar uma Migration
    //yarn typeorm migration:create -n CreateUsers
    //** Executar as Migrations    
    // yarn typeorm migration:run

    //Migrations que já executaram
    //yarn typeorm migration:show

    //Reverter uma Migration
    //yarn typeorm migration:revert


    

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'appointments',
                columns: [ 
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'provider',
                    type: 'varchar',                    
                },
                {
                    name: 'date',
                    type: 'timestamp with time zone',                    
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                },                    
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()',
                },
                ]
            })
        );        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('appointments');
    }

}
