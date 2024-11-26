import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/modules/users/entities/user.entity';
import { Status } from 'src/modules/status/entities/status.entity';
import { Weapon } from 'src/modules/weapon/entities/weapon.entity';
import { Armor } from 'src/modules/armor/entities/armor.entity';
import { InventorySlot } from 'src/modules/inventory-slot/entities/inventory-slot.entity';
import { EquipmentSlot } from 'src/modules/equipment-slot/entities/equipment-slot.entity';

@Entity()
export class Character {
    @ApiProperty({ example: 1, description: 'ID único do personagem' })
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ApiProperty({ example: 'Home-Aranha', description: 'Nome do personagem' })
    @Column('varchar')
    name: string;

    @ApiProperty({ example: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUg...', description: 'Imagem do personagem (base64 ou URL)', })
    @Column({ type: 'text' })
    imagem: string;

    @ApiProperty({ example: 1, description: 'Level atual do personagem' })
    @Column('integer')
    level: number;

    @ApiProperty({ example: 1, description: 'Total de experiencia do personagem' })
    @Column('integer')
    experience: number;

    @ApiProperty({ example: 1000, description: 'Total de pontos de experiência para o próximo level do personagem' })
    @Column('integer')
    experienceNextLevel: number;

    @ApiProperty({ example: 3, description: 'Quantidade disponível de pontos de atributos' })
    @Column('integer')
    availableAttributePoints: number;

    @ApiProperty({ example: 100, description: 'Total geral de pontos de atributos do personagem' })
    @Column('integer')
    totalAttributePoints: number;

    @ApiProperty({ example: 100, description: 'Total de moedas do personagem' })
    @Column('integer')
    coins: number;

    @ApiProperty({ example: new Date(), description: 'Data de criação do personagem' })
    @Column({
        type: 'datetime',
        default: () => 'CURRENT_TIMESTAMP', // Define a data atual por padrão
    })
    createAt: Date;

    @ApiProperty({ example: new Date(), description: 'Data de atualização do personagem' })
    @Column({
        type: 'datetime',
        default: () => 'CURRENT_TIMESTAMP', // Define a data atual por padrão
        onUpdate: 'CURRENT_TIMESTAMP', // Atualiza automaticamente
    })
    updateAt: Date;

    @ApiProperty({ type: () => Status, description: 'Status associado ao personagem' })
    @OneToOne(() => Status, (status) => status.characters)
    status: Status;

    @ApiProperty({ example: [1, 2], description: 'Lista de IDs dos usuários associados ao personagem' })
    @ManyToMany(() => User)
    userIds: number[];

    @OneToMany(() => InventorySlot, (inventorySlot) => inventorySlot.characters)
    inventorySlots: InventorySlot[];

    @OneToMany(() => EquipmentSlot, (equipmentSlot) => equipmentSlot.characters)
    equipmentSlot: EquipmentSlot[];
}

