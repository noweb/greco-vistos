<?php

namespace App\Http\Controllers;

use App\Http\Requests\HomeRequest;
use App\Models\Home;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('home', [
            'home' => Home::first() ?? new Home(),
        ]);
    }

    public function update(HomeRequest $request)
    {
        Home::updateOrCreate(['id' => 1], $request->validated());
        return redirect()->route('dashboard.pages.home.index')
            ->with('success', 'Página atualizada com sucesso');
    }
}
