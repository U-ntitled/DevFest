<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CodeGenController extends AbstractController
{
    #[Route('/code/gen', name: 'app_code_gen')]
    public function index(): Response
    {
        return $this->render('code_gen/index.html.twig', [
            'controller_name' => 'CodeGenController',
        ]);
    }
}
