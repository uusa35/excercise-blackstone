<?php

use App\Http\Controllers\ProblemSolvingController;
use App\Http\Controllers\ProductController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::resource('product', ProductController::class);
Route::get('problem-solving', [ProblemSolvingController::class, 'index'])->name('problem.solving.index');
Route::post('problem-solving', [ProblemSolvingController::class, 'store'])->name('problem.solving.store');
Route::get('problem-solving-reset', [ProblemSolvingController::class, 'reset'])->name('problem.solving.reset');
Route::get('change-mode', function () {
    session()->put('mode', request()->mode);
    return redirect()->back();
})->name('change.mode');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__ . '/auth.php';
