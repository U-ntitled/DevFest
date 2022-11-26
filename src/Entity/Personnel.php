<?php

namespace App\Entity;

use App\Repository\PersonnelRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PersonnelRepository::class)]
class Personnel
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $idPersonne = null;

    #[ORM\Column(length: 255)]
    private ?string $nomPersonne = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $prenomPersonne = null;

    #[ORM\Column(length: 255)]
    private ?string $fonction = null;

    #[ORM\ManyToOne(inversedBy: 'personnels')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Organisations $idOrg = null;

    #[ORM\OneToMany(mappedBy: 'idPersonnel', targetEntity: Commentaires::class)]
    private Collection $commentaires;

    public function __construct()
    {
        $this->commentaires = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIdPersonne(): ?string
    {
        return $this->idPersonne;
    }

    public function setIdPersonne(string $idPersonne): self
    {
        $this->idPersonne = $idPersonne;

        return $this;
    }

    public function getNomPersonne(): ?string
    {
        return $this->nomPersonne;
    }

    public function setNomPersonne(string $nomPersonne): self
    {
        $this->nomPersonne = $nomPersonne;

        return $this;
    }

    public function getPrenomPersonne(): ?string
    {
        return $this->prenomPersonne;
    }

    public function setPrenomPersonne(?string $prenomPersonne): self
    {
        $this->prenomPersonne = $prenomPersonne;

        return $this;
    }

    public function getFonction(): ?string
    {
        return $this->fonction;
    }

    public function setFonction(string $fonction): self
    {
        $this->fonction = $fonction;

        return $this;
    }

    public function getIdOrg(): ?Organisations
    {
        return $this->idOrg;
    }

    public function setIdOrg(?Organisations $idOrg): self
    {
        $this->idOrg = $idOrg;

        return $this;
    }

    /**
     * @return Collection<int, Commentaires>
     */
    public function getCommentaires(): Collection
    {
        return $this->commentaires;
    }

    public function addCommentaire(Commentaires $commentaire): self
    {
        if (!$this->commentaires->contains($commentaire)) {
            $this->commentaires->add($commentaire);
            $commentaire->setIdPersonnel($this);
        }

        return $this;
    }

    public function removeCommentaire(Commentaires $commentaire): self
    {
        if ($this->commentaires->removeElement($commentaire)) {
            // set the owning side to null (unless already changed)
            if ($commentaire->getIdPersonnel() === $this) {
                $commentaire->setIdPersonnel(null);
            }
        }

        return $this;
    }
}
