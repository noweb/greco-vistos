<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get('dashboard/pages/home', [HomeController::class, 'show'])->name('dashboard.pages.home.show');
Route::get('dashboard/packages/all', [ProductController::class, 'getProducts'])->name('dashboard.pages.packages.products');

