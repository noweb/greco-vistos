<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use App\Models\Home;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'home' => Home::first() ?? new Home(),
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard/home', [HomeController::class, 'index'])->name('dashboard');

    Route::put('dashboard/pages/home', [HomeController::class, 'update'])->name('dashboard.pages.home.update');

    Route::get('dashboard/packages', [ProductController::class, 'index'])->name('dashboard.pages.packages.index');
    Route::post('dashboard/packages', [ProductController::class, 'store'])->name('dashboard.pages.packages.store');
    Route::put('dashboard/packages', [ProductController::class, 'update'])->name('dashboard.pages.packages.update');
    Route::delete('dashboard/packages/{id}', [ProductController::class, 'destroy'])->name('dashboard.pages.packages.destroy');

    Route::get('dashboard/settings', function () {
        return Inertia::render('settings');
    })->name('dashboard.settings');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
