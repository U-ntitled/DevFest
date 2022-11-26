<?php

namespace App\Entity;

use App\Repository\OrganisationsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: OrganisationsRepository::class)]
class Organisations
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 10)]
    private ?string $idOrg = null;

    #[ORM\Column(length: 255)]
    private ?string $nomOrg = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $descOrg = null;

    #[ORM\ManyToOne(inversedBy: 'organisations')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Regions $idRegion = null;

    #[ORM\OneToMany(mappedBy: 'idOrg', targetEntity: Personnel::class, orphanRemoval: true)]
    private Collection $personnels;

    public function __construct()
    {
        $this->personnels = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIdOrg(): ?string
    {
        return $this->idOrg;
    }

    public function setIdOrg(string $idOrg): self
    {
        $this->idOrg = $idOrg;

        return $this;
    }

    public function getNomOrg(): ?string
    {
        return $this->nomOrg;
    }

    public function setNomOrg(string $nomOrg): self
    {
        $this->nomOrg = $nomOrg;

        return $this;
    }

    public function getDescOrg(): ?string
    {
        return $this->descOrg;
    }

    public function setDescOrg(?string $descOrg): self
    {
        $this->descOrg = $descOrg;

        return $this;
    }

    public function getIdRegion(): ?Regions
    {
        return $this->idRegion;
    }

    public function setIdRegion(?Regions $idRegion): self
    {
        $this->idRegion = $idRegion;

        return $this;
    }

    /**
     * @return Collection<int, Personnel>
     */
    public function getPersonnels(): Collection
    {
        return $this->personnels;
    }

    public function addPersonnel(Personnel $personnel): self
    {
        if (!$this->personnels->contains($personnel)) {
            $this->personnels->add($personnel);
            $personnel->setIdOrg($this);
        }

        return $this;
    }

    public function removePersonnel(Personnel $personnel): self
    {
        if ($this->personnels->removeElement($personnel)) {
            // set the owning side to null (unless already changed)
            if ($personnel->getIdOrg() === $this) {
                $personnel->setIdOrg(null);
            }
        }

        return $this;
    }
}
