import { ApiProperty } from "@nestjs/swagger";

export class CreateStatusDto {
    @ApiProperty({ example: 100, description: 'Vida atual' })
    health: number;

    @ApiProperty({ example: 100, description: 'Vida máxima' })
    maxHealth: number;

    @ApiProperty({ example: 10, description: 'Recuperação de vida' })
    healthRegen: number;

    @ApiProperty({ example: 100, description: 'Mana atual' })
    mana: number;

    @ApiProperty({ example: 100, description: 'Mana máxima' })
    maxMana: number;

    @ApiProperty({ example: 10, description: 'Recuperação de mana' })
    manaRegen: number;

    @ApiProperty({ example: 10, description: 'Força atual' })
    strength: number;

    @ApiProperty({ example: 10, description: 'Destreza máxima' })
    dexterity: number;

    @ApiProperty({ example: 10, description: 'Sabedoria máxima' })
    wisdom: number;

    @ApiProperty({ example: 10, description: 'Vida máxima' })
    perception: number;

    @ApiProperty({ example: 10, description: 'Dano base' })
    damage: number;

    @ApiProperty({ example: 10, description: 'Dano máximo' })
    maxDamage: number;

    @ApiProperty({ example: 10, description: 'Velocidade de ataque' })
    attackSpeed: number;

    @ApiProperty({ example: 10, description: 'Defesa corpo a corpo' })
    meleeDefence: number;

    @ApiProperty({ example: 10, description: 'Defesa mágica' })
    magicDefence: number;

    @ApiProperty({ example: 10, description: 'Evasão' })
    evasion: number;

    @ApiProperty({ example: 10, description: 'Dano crítico (em %)' })
    criticalDamage: number;
}
