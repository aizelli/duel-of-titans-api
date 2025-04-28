import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class ExperienceLevel {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('integer')
    level: number;

    @Column('integer')
    maxExperience: number;

    @Column({
        type: 'datetime',
        default: () => 'CURRENT_TIMESTAMP', // Define a data atual por padrão
    })
    createAt: Date;

    @Column({
        type: 'datetime',
        default: () => 'CURRENT_TIMESTAMP', // Define a data atual por padrão
        onUpdate: 'CURRENT_TIMESTAMP', // Atualiza automaticamente
    })
    updateAt: Date;
}
