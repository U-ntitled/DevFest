<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221126104546 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE commentaires (id INT AUTO_INCREMENT NOT NULL, id_personnel_id INT DEFAULT NULL, type_alert VARCHAR(255) NOT NULL, desc_alert VARCHAR(255) NOT NULL, INDEX IDX_D9BEC0C43FD1E507 (id_personnel_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE organisations (id INT AUTO_INCREMENT NOT NULL, id_region_id INT NOT NULL, id_org VARCHAR(10) NOT NULL, nom_org VARCHAR(255) NOT NULL, desc_org VARCHAR(255) DEFAULT NULL, INDEX IDX_D7E459AC1813BD72 (id_region_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE personnel (id INT AUTO_INCREMENT NOT NULL, id_org_id INT NOT NULL, id_personne VARCHAR(255) NOT NULL, nom_personne VARCHAR(255) NOT NULL, prenom_personne VARCHAR(255) DEFAULT NULL, fonction VARCHAR(255) NOT NULL, INDEX IDX_A6BCF3DED2B4C9F6 (id_org_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE regions (id INT AUTO_INCREMENT NOT NULL, id_region VARCHAR(10) NOT NULL, nom_region VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE messenger_messages (id BIGINT AUTO_INCREMENT NOT NULL, body LONGTEXT NOT NULL, headers LONGTEXT NOT NULL, queue_name VARCHAR(190) NOT NULL, created_at DATETIME NOT NULL, available_at DATETIME NOT NULL, delivered_at DATETIME DEFAULT NULL, INDEX IDX_75EA56E0FB7336F0 (queue_name), INDEX IDX_75EA56E0E3BD61CE (available_at), INDEX IDX_75EA56E016BA31DB (delivered_at), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE commentaires ADD CONSTRAINT FK_D9BEC0C43FD1E507 FOREIGN KEY (id_personnel_id) REFERENCES personnel (id)');
        $this->addSql('ALTER TABLE organisations ADD CONSTRAINT FK_D7E459AC1813BD72 FOREIGN KEY (id_region_id) REFERENCES regions (id)');
        $this->addSql('ALTER TABLE personnel ADD CONSTRAINT FK_A6BCF3DED2B4C9F6 FOREIGN KEY (id_org_id) REFERENCES organisations (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE commentaires DROP FOREIGN KEY FK_D9BEC0C43FD1E507');
        $this->addSql('ALTER TABLE organisations DROP FOREIGN KEY FK_D7E459AC1813BD72');
        $this->addSql('ALTER TABLE personnel DROP FOREIGN KEY FK_A6BCF3DED2B4C9F6');
        $this->addSql('DROP TABLE commentaires');
        $this->addSql('DROP TABLE organisations');
        $this->addSql('DROP TABLE personnel');
        $this->addSql('DROP TABLE regions');
        $this->addSql('DROP TABLE messenger_messages');
    }
}
