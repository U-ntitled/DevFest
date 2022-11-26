<?php

namespace App\Entity;

use App\Repository\RegionsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: RegionsRepository::class)]
class Regions
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 10)]
    private ?string $idRegion = null;

    #[ORM\Column(length: 255)]
    private ?string $nomRegion = null;

    #[ORM\OneToMany(mappedBy: 'idRegion', targetEntity: Organisations::class, orphanRemoval: true)]
    private Collection $organisations;

    public function __construct()
    {
        $this->organisations = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIdRegion(): ?string
    {
        return $this->idRegion;
    }

    public function setIdRegion(string $idRegion): self
    {
        $this->idRegion = $idRegion;

        return $this;
    }

    public function getNomRegion(): ?string
    {
        return $this->nomRegion;
    }

    public function setNomRegion(string $nomRegion): self
    {
        $this->nomRegion = $nomRegion;

        return $this;
    }

    /**
     * @return Collection<int, Organisations>
     */
    public function getOrganisations(): Collection
    {
        return $this->organisations;
    }

    public function addOrganisation(Organisations $organisation): self
    {
        if (!$this->organisations->contains($organisation)) {
            $this->organisations->add($organisation);
            $organisation->setIdRegion($this);
        }

        return $this;
    }

    public function removeOrganisation(Organisations $organisation): self
    {
        if ($this->organisations->removeElement($organisation)) {
            // set the owning side to null (unless already changed)
            if ($organisation->getIdRegion() === $this) {
                $organisation->setIdRegion(null);
            }
        }

        return $this;
    }
}
