import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { User } from 'src/modules/users/entities/user.entity';
import { InventorySlot } from 'src/modules/inventory-slot/entities/inventory-slot.entity';
import { EquipmentSlot } from 'src/modules/equipment-slot/entities/equipment-slot.entity';
import { Status } from 'src/modules/status/entities/status.entity';

@Entity()
export class Character {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar')
    name: string;

    @Column('varchar')
    imagem_url: string;

    @Column('integer')
    level: number;

    @Column('integer')
    experience: number;

    @Column('integer')
    experienceNextLevel: number;

    @Column('integer')
    availableAttributePoints: number;

    @Column('integer')
    totalAttributePoints: number;

    @Column('integer')
    coins: number;

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

    @OneToOne(() => Status, (status) => status.character, { cascade: true }) // Relação 1x1 com cascata
    @JoinColumn()
    status: Status;

    @OneToOne(() => User, (user) => user.character, { onDelete: 'CASCADE' })
    @JoinColumn()
    user: User;

    @OneToMany(() => InventorySlot, (inventorySlot) => inventorySlot.characters)
    inventorySlots: InventorySlot[];

    @OneToMany(() => EquipmentSlot, (equipmentSlot) => equipmentSlot.characters)
    equipmentSlot: EquipmentSlot[];
}

