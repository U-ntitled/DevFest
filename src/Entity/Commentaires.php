<?php

namespace App\Entity;

use App\Repository\CommentairesRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CommentairesRepository::class)]
class Commentaires
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $typeAlert = null;

    #[ORM\Column(length: 255)]
    private ?string $descAlert = null;

    #[ORM\ManyToOne(inversedBy: 'commentaires')]
    private ?Personnel $idPersonnel = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTypeAlert(): ?string
    {
        return $this->typeAlert;
    }

    public function setTypeAlert(string $typeAlert): self
    {
        $this->typeAlert = $typeAlert;

        return $this;
    }

    public function getDescAlert(): ?string
    {
        return $this->descAlert;
    }

    public function setDescAlert(string $descAlert): self
    {
        $this->descAlert = $descAlert;

        return $this;
    }

    public function getIdPersonnel(): ?Personnel
    {
        return $this->idPersonnel;
    }

    public function setIdPersonnel(?Personnel $idPersonnel): self
    {
        $this->idPersonnel = $idPersonnel;

        return $this;
    }
}
