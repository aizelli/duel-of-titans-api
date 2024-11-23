import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany, OneToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/context/users/entities/user.entity';
import { Status } from 'src/context/status/entities/status.entity';
import { Weapon } from 'src/context/weapon/entities/weapon.entity';
import { Armor } from 'src/context/armor/entities/armor.entity';
import { InventorySlot } from 'src/context/inventory-slot/entities/inventory-slot.entity';
import { EquipmentSlot } from 'src/context/equipment-slot/entities/equipment-slot.entity';

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

    @ApiProperty({ example: 1, description: 'Level do personagem' })
    @Column('integer')
    level: number;

    @ApiProperty({ example: 1, description: 'Experiencia do personagem' })
    @Column('integer')
    experience: number;

    // @ApiProperty({ type: () => Status, description: 'Status associado ao personagem' })
    // @OneToOne(() => Status, (status) => status.characters)
    // status: Status;
    
    @ApiProperty({ type: () => [User], description: 'Lista de usuários associados ao personagem' })
    @ManyToMany(() => User, (user) => user.characters)
    users: User[];

    @OneToMany(() => InventorySlot, (inventorySlot) => inventorySlot.characters)
    inventorySlots: InventorySlot[];

    @OneToMany(() => EquipmentSlot, (equipmentSlot) => equipmentSlot.characters)
    equipmentSlot: EquipmentSlot[];

    // @ApiProperty({ type: () => [Weapon], description: 'Lista de armamentos associados ao personagem' })
    // @ManyToMany(() => Weapon, (weapon) => weapon.characters)
    // weapons: Weapon[];

    // @ApiProperty({ type: () => [Armor], description: 'Lista de armamentos associados ao personagem' })
    // @ManyToMany(() => Armor, (armor) => armor.characters)
    // armors: Armor[];
}

