<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Persistence\ManagerRegistry;

use App\Entity\Regions;
use App\Entity\Personnel;
use App\Entity\Organisations;
use App\Entity\Commentaires;
use App\Repository\PersonnelRepository;
use App\Repository\RegionsRepository;

class ProjectController extends AbstractController
{
    #[Route('/api/login', name: 'api_')]
    // #[Route('/project', name: 'app_project')]
    public function index(PersonnelRepository $personnel): Response
    {
        $personnels = $personnel->findAll();
        $datas = [];
        foreach($personnels as $personnel){
            $datas[] = [
                'password' => $personnel->getPassword(),
                'username' => $personnel->getUsername(),

            ];
            // return $this->json($datas);
        }
        return $this->json($datas);
        // return $this->render('spa/index.html.twig', [
        //     'name' => $this->json($datas),
        // ]);

    }

    #[Route('/api/verif', name: 'api_verif')]
    // #[Route('/project', name: 'app_project')]
    public function verif(PersonnelRepository $personnel): Response
    {
        $personnels = $personnel->findAll();
        $datas = [];
        foreach($personnels as $personnel){
            $datas[] = [
                'mail' => $personnel->getEmail(),
                'username' => $personnel->getUsername(),
                'tel' => $personnel->getTel(),
                'password' => $personnel->getPassword(),

            ];
            // return $this->json($datas);
        }
        
        return $this->json($datas);
        // return $this->render('spa/index.html.twig', [
        //     'name' => $this->json($datas),
        // ]);

    }


    




}
