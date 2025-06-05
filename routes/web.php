<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [HomeController::class, 'index'])->name('dashboard.pages.home.index');
    Route::put('dashboard/pages/home', [HomeController::class, 'update'])->name('dashboard.pages.home.update');

    Route::get('dashboard/settings', function () {
        return Inertia::render('settings');
    })->name('dashboard.settings');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
